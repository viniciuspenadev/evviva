# Deploy SURFORM — GitHub, Docker e EasyPanel

A aplicação produz arquivos estáticos com Astro. O Dockerfile executa o build e o verificador antes de copiar `dist/` para o Nginx.

## Configuração do serviço

1. Enviar o repositório para o GitHub escolhido pelo responsável.
2. Criar ou atualizar um serviço **App** no EasyPanel com a fonte GitHub.
3. Selecionar build por **Dockerfile**, contexto `/`, arquivo `Dockerfile`.
4. Usar a porta interna **3000**. O healthcheck responde em `/healthz`.
5. Vincular o domínio SURFORM confirmado e configurar HTTPS no painel.
6. Informar o argumento de build `PUBLIC_SITE_URL` com a URL pública completa, por exemplo a URL efetivamente configurada no serviço. Reexecutar o build para atualizar canonicals.

O domínio anterior da Evviva foi retirado da configuração ativa. Esta revisão não escolhe nem configura um novo domínio, não altera DNS e não publica externamente.

## Antes da publicação comercial

- Confirmar o WhatsApp e atualizar `src/data/site.ts`; o Instagram é o canal atual de contato.
- Confirmar quais fabricantes e produtos são efetivamente oferecidos antes de acrescentar marcas, fichas, garantias ou certificações.
- Validar a identidade tipográfica SURFORM e fornecer o logotipo oficial, se existir.
- Acrescentar fotografias de obras reais com identificação e autorização quando disponíveis. As ambientações atuais têm origem descrita na política.
- Definir a política aplicável à operação e decidir quando liberar indexação. Atualmente há bloqueio por meta, robots.txt e cabeçalhos Nginx.

## Verificação local

```sh
npm run build
npm run verify
npm run preview
```

A imagem Docker não foi executada nesta máquina; Docker não está disponível no ambiente. A configuração de build estático e o verificador são os mesmos usados pelo Dockerfile.
