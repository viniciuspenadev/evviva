# Apresentação no EasyPanel

Destino: **https://evviva.bluedigitalhub.com.br**

## Arquitetura

O Dockerfile segue a estrutura da Tecnoglass: Node 24 Alpine gera o site; Nginx 1.30 Alpine serve os arquivos estáticos na porta **3000**. O build executa `astro check`, gera o site, verifica os arquivos e valida a configuração do Nginx. O contêiner final contém apenas o resultado público, sem Node, fontes do projeto, documentação ou dependências de desenvolvimento.

Não é necessário banco de dados, volume persistente, comando personalizado de início ou variável de ambiente para esta apresentação. As fontes tipográficas e imagens de ambientação são locais; as publicações do Instagram dependem do serviço externo.

## GitHub

Este checkout ainda não tem remoto configurado. Crie um repositório vazio no GitHub, preferencialmente privado, e use a URL fornecida por ele. Na raiz deste projeto:

```sh
git add .
git commit -m "Prepara apresentação Evviva para EasyPanel"
git branch -M main
git remote add origin URL_DO_REPOSITORIO
git push -u origin main
```

Substitua `URL_DO_REPOSITORIO` pela URL real. Se já houver um repositório com conteúdo, preserve seu histórico e conecte-o antes de seguir estes comandos. `dist`, `node_modules` e arquivos `.env` estão fora do Git; as seis imagens em `src/assets/inspiration` e os logos em `public/brand` devem subir, pois fazem parte do build.

## Serviço no EasyPanel

1. Crie um serviço do tipo **App** no projeto desejado.
2. Em **Source**, escolha **GitHub**, informe `proprietario/repositorio`, a branch enviada e **Build Path `/`**. Para um repositório privado, use a integração GitHub já configurada no painel.
3. Em **Build**, selecione **Dockerfile**, com caminho `Dockerfile` e contexto na raiz. Não use a opção de fonte Dockerfile inline, pois o build precisa dos arquivos do repositório.
4. Execute **Deploy** e confira a conclusão das etapas de build e do início do Nginx.
5. Em **Domains**, adicione `evviva.bluedigitalhub.com.br`, caminho `/`, protocolo interno **HTTP** e porta de destino **3000**. Marque como domínio principal e habilite HTTPS pelo proxy do painel.
6. No DNS, aponte o subdomínio `evviva` para o IP público do servidor EasyPanel (ou use um CNAME para um hostname desse servidor que você já utilize). Aguarde a resolução e a emissão do certificado.
7. Para atualizações, faça commit/push e use **Deploy**. Se desejar, habilite **Auto Deploy** no serviço GitHub.

Não crie um mapeamento público adicional da porta 3000. O proxy do EasyPanel recebe o domínio e encaminha ao contêiner. Se o painel oferecer checagem HTTP, use `/healthz` na porta 3000.

## Testar o contêiner em uma máquina com Docker

```sh
docker build --pull -t evviva-apresentacao .
docker run -d --rm --name evviva-apresentacao -p 127.0.0.1:8080:3000 evviva-apresentacao
docker exec evviva-apresentacao nginx -t
docker inspect --format '{{.State.Health.Status}}' evviva-apresentacao
```

Abra `http://127.0.0.1:8080/`. O estado de saúde passa de `starting` para `healthy` após a primeira sondagem. Ao terminar:

```sh
docker stop evviva-apresentacao
```

## Conferência após o deploy

- Home, `/surform-ssm/` e `/ambientes/cozinhas/` abrem diretamente e continuam funcionando após atualizar a página.
- `/colecoes` redireciona para `/colecoes/` sem expor porta 3000 nem trocar HTTPS por HTTP.
- Uma rota inexistente retorna HTTP 404 e mostra a página personalizada.
- `/healthz` retorna HTTP 200 com `ok`.
- `/robots.txt` mantém `Disallow: /`; HTML contém `noindex, nofollow` e a resposta Nginx tem `X-Robots-Tag`. Isso evita indexação, mas não restringe acesso por link.
- Imagens, fontes e scripts carregam; arquivos com hash em `/_astro/` têm cache de um ano. O HTML exige revalidação, para apresentar as próximas alterações.
- O canonical usa o domínio temporário HTTPS. Não há sitemap nesta apresentação.

O atendimento permanece na experiência de revisão já existente: nenhum agendamento é enviado ou confirmado por esta versão. Dados da unidade e canal de atendimento podem ser conectados depois.

## Mudança para o domínio definitivo

Atualize `site` em `astro.config.mjs` e `productionUrl` em `src/data/site.ts`, configure o domínio no EasyPanel e reconstrua a imagem. Essas URLs entram no build estático; mudar apenas variáveis no contêiner em execução não altera os arquivos gerados.

Para permitir indexação no lançamento, revise em conjunto `preview` em `src/data/site.ts`, `public/robots.txt`, os dois cabeçalhos `X-Robots-Tag` de `nginx.conf` e a verificação de prévia em `scripts/verify-build.mjs`.

## Referências

- [EasyPanel — App Service](https://easypanel.io/docs/services/app)
- [EasyPanel — Builders](https://easypanel.io/docs/builders)
- [Astro — Build with Docker](https://docs.astro.build/en/recipes/docker/)
