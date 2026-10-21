# Evviva — A casa, à sua maneira.

Site de apresentação em Astro, Tailwind e TypeScript, com fotografia editorial, paleta marfim/preto chumbo e tipografia Playfair Display + DM Sans carregada localmente.

## Deploy no EasyPanel

Preparado para **https://evviva.bluedigitalhub.com.br**, com `Dockerfile`, `nginx.conf` e `.dockerignore`. No EasyPanel: serviço **App**, fonte **GitHub**, build **Dockerfile**, contexto `/`, porta interna **3000** e HTTPS no domínio. O build valida o site antes de gerar a imagem final. Instruções completas em [docs/DEPLOY_EASYPANEL.md](docs/DEPLOY_EASYPANEL.md).

A apresentação mantém bloqueio de indexação por meta, robots.txt e cabeçalho HTTP. O formulário continua sem envio. O repositório remoto e a configuração do serviço/DNS ainda precisam ser definidos no GitHub e no painel.

## Rodar

Node >= 22.12.0.

```sh
npm ci
npm run dev
```

O servidor usa a porta 4321. As dependências iniciais foram copiadas da instalação local da Tecnoglass, com as mesmas versões fixadas no lockfile, sem alterar o projeto de referência.

```sh
npm run build
npm run verify
npm run preview
```

`dist/` contém o resultado estático. O build executa a checagem de tipos do Astro e otimiza as imagens em WebP responsivo.

## Experiência implementada

- Home com ambientes, personalização, coleções, materiais, processo e acesso ao atendimento.
- Seção “Nossos serviços” antes dos ambientes, com o mesmo fundo marfim e exatamente três categorias: SURFORM SSM, Planejados e Móveis. Dados em `src/data/services.ts`, sem filtros ou carrossel.
- Galeria imersiva em largura total com quatro cenários, transições, navegação flutuante e controles por teclado. Dois pontos por imagem revelam balões com linhas animadas; apenas um fica aberto por vez. Configuração dos pontos e textos em `src/data/scenes.ts`.
- Portfólio `/portfolio/` com as 165 imagens do acervo oficial Evviva: 77 fotos de ambientes/acessórios e 88 amostras de acabamentos. Filtros por sete categorias, mais imagens por etapa e visualização ampliada com navegação por teclado. Seleção na home; origem em `docs/ACERVO_EVVIVA.md`.
- Páginas próprias para cozinhas, livings e closets.
- Página `/surform-ssm/` com cabeçalho, menu e rodapé próprios da SURFORM, explicação de SSM, aplicações ilustrativas, três publicações oficiais incorporadas, roteiro de escolha e cuidados. Fontes e limites em `docs/SURFORM_CONTEUDO_E_FONTES.md`.
- Coleções e sistemas, com descrições baseadas no mapeamento e links para as páginas oficiais.
- Seletor de coleções na home em arco com perspectiva, quatro fotografias oficiais, transições sincronizadas e controles por clique, arraste e teclado. Implementação Astro/CSS/TypeScript e fontes das imagens em `docs/COLECOES_INTERATIVAS.md`.
- Explorador de materiais com abas acessíveis por teclado.
- Experiência na loja, arquitetos, privacidade da prévia e página 404.
- Menu móvel em diálogo nativo, foco, Escape e rolagem preservados.
- Preparação de mensagem com validação e revisão, sem submissão, armazenamento ou confirmação de agendamento.
- Respeito a movimento reduzido e imagens com dimensões, alternativas e carregamento sob demanda.

## Personalizar a unidade

Os dados comerciais ficam em `src/data/site.ts`. Nome da unidade, cidade, endereço, WhatsApp e e-mail permanecem vazios até serem confirmados. O domínio temporário está configurado ali e em `astro.config.mjs`. O site usa o localizador oficial como destino externo de atendimento.

Ao configurar um número de WhatsApp, o resumo pode encaminhar a mensagem por `wa.me`; a pessoa ainda precisa continuar no serviço. Ajustar conjuntamente os textos de privacidade e demonstração antes de ativar esse fluxo. Atualmente a experiência está identificada como demonstração e não envia dados.

O site de apresentação mantém `noindex, nofollow`, `robots.txt` e cabeçalho HTTP bloqueando indexação. Antes do lançamento definitivo, preencher a unidade, revisar identidade e conteúdo com a franqueadora, inserir imagens autorizadas e provas da operação real, configurar a política de privacidade, domínio e metadados de compartilhamento, ativar o canal de atendimento e ajustar a indexação.

## Imagens e conteúdo

`src/assets/inspiration/` contém sete imagens ilustrativas geradas por IA. Não são fotografias de produtos Evviva, obras entregues ou lojas. A origem é informada na página de privacidade, sem etiquetas repetidas nas imagens de ambientação. O estudo inicial aprovado está em `docs/conceito-aprovado.png`; origem, método e prompts das imagens estão em `docs/IMAGENS.md`, `docs/IMAGENS_SURFORM.md` e `docs/IMAGEM_MOVEIS_PROJETOS.md` e `docs/IMAGEM_FAMILIA.md`.

Não há dados, integrações de marketing, formulários ou credenciais da Tecnoglass neste projeto. A referência forneceu a linguagem técnica; a composição foi construída para o conceito da Evviva.

O mapeamento de origem permanece em `MAPEAMENTO_EVVIVA.md` e `INVENTARIO_URLS_EVVIVA.json`.
