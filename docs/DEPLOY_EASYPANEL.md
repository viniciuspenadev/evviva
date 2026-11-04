# Deploy SURFORM — GitHub, Docker e EasyPanel

A aplicação produz arquivos estáticos com Astro. O Dockerfile executa o build e o verificador antes de copiar `dist/` para o Nginx.

## Configuração do serviço

1. Enviar o repositório para o GitHub escolhido pelo responsável.
2. Criar ou atualizar um serviço **App** no EasyPanel com a fonte GitHub.
3. Selecionar build por **Dockerfile**, contexto `/`, arquivo `Dockerfile`.
4. Usar a porta interna **3000**. O healthcheck responde em `/healthz`.
5. Vincular o endereço temporário confirmado `evviva.bluedigitalhub.com.br` e configurar HTTPS no painel.
6. O endereço temporário é o padrão de `astro.config.mjs`. Para outro endereço, informar o argumento de build `PUBLIC_SITE_URL` com a URL pública HTTPS completa. Reexecutar o build para atualizar canonicals, `og:url` e os endereços da imagem social.

O endereço temporário é uma exceção técnica autorizada pelo cliente para a apresentação; a marca permanece SURFORM. `PUBLIC_SITE_URL` permite mudar para o domínio oficial sem alterar os componentes. Esta revisão não altera DNS nem publica externamente.

## Antes da publicação comercial

- Confirmar o WhatsApp e atualizar `src/data/site.ts`; o Instagram é o canal atual de contato.
- Confirmar quais fabricantes e produtos são efetivamente oferecidos antes de acrescentar marcas, fichas, garantias ou certificações.
- Validar a identidade tipográfica SURFORM e fornecer o logotipo oficial, se existir.
- Acrescentar fotografias de obras reais com identificação e autorização quando disponíveis. As ambientações atuais têm origem descrita na política.
- Definir a política aplicável à operação e decidir quando liberar indexação. Atualmente há `noindex` no HTML e nos cabeçalhos Nginx; `robots.txt` permite ler essas regras e os metadados sociais.

## Verificação local

```sh
npm run build
npm run verify
npm run preview
```

A imagem Docker não foi executada nesta máquina; Docker não está disponível no ambiente. A configuração de build estático e o verificador são os mesmos usados pelo Dockerfile.
