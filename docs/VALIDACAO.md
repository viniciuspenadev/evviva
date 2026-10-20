# Validação da primeira versão — 20/10/2026

## Build e referências

- `npm run build`: aprovado; checagem de 21 arquivos sem erros, avisos ou sugestões.
- Saída estática: nove páginas de conteúdo e uma página 404.
- `npm run verify`: aprovado; 243 referências locais e 18 instâncias de imagem verificadas.
- 36 variantes WebP geradas pelo Astro, com dimensões e alternativas nas imagens.
- Preview local respondeu HTTP 200.

## Navegador

- Home inspecionada em 1440 × 1000 e 390 × 844.
- Nove páginas de conteúdo verificadas em 320 px, sem transbordamento horizontal.
- Home, ambiente de cozinha, coleções, materiais, loja e arquitetos verificadas em 820 e 1440 px, sem transbordamento horizontal.
- Imagens de cozinhas, livings e closets carregadas na seção de ambientes.
- Menu móvel: abertura, navegação para Coleções, fechamento e desbloqueio da rolagem confirmados.
- Agendamento pelo menu móvel: menu fechado, diálogo de contato aberto e foco restaurado ao menu ao sair com Escape.
- Formulário: telefone inválido rejeitado; valores de demonstração revisados; edição do resumo confirmada. Nenhum contato externo foi iniciado.
- Materiais: alternância por clique e seta do teclado confirmada; aba, painel e representação visual atualizados juntos.
- Nenhum erro ou aviso retornado pelo registro do navegador consultado.

As capturas em `docs/preview/` registram a home desktop, a home móvel, os ambientes e a revisão de agendamento com dados fictícios de teste. O navegador foi devolvido ao tamanho normal e à home, sem dados do teste preenchidos.

## Limites

Sem publicação, auditoria formal de acessibilidade ou medição de Core Web Vitals. Unidade, cidade e contatos ainda não foram informados. Fotografias são ilustrações geradas por IA. Não há confirmação de agendamento, envio a CRM ou armazenamento de leads. Os textos de coleções utilizam o mapeamento público como referência; disponibilidade comercial e identidade final dependem da unidade e da franqueadora.

## Evolução — galeria imersiva e SURFORM

- Galeria da home substituída por quatro cenários: Cozinhas, Livings, Closets e SURFORM · SSM. Navegação por abas, setas, prévia lateral e teclado (setas, Home e End), com um painel ativo por vez.
- Alternância dos quatro cenários e carregamento das imagens confirmados no navegador. Volta circular pelas setas confirmada. Detalhe expansível abre e fecha com Escape; a posição do texto foi ajustada para preservar a leitura no celular. Status do cenário comunicado para leitores de tela.
- Home conferida em 320, 390, 820, 1024 e 1440 px: sem transbordamento horizontal ou sobreposição entre o bloco de texto e o navegador de cenários.
- Página `/surform-ssm/` acessível pelo cenário e pelo rodapé. Verificada em 320, 390, 820 e 1440 px, com imagens carregadas e sem transbordamento horizontal. Pergunta sobre cuidados abriu a resposta correspondente.
- Links de contato da SURFORM apontam para o perfil informado pelo usuário, em nova aba. Nenhuma mensagem ou agendamento foi enviado.
- `npm run build`: 25 arquivos verificados, zero erros, avisos ou sugestões; 11 páginas estáticas, incluindo 404.
- `npm run verify`: 293 referências locais, 29 instâncias de imagem e 71 variantes WebP; aprovado.
- Registro do navegador consultado sem erros ou avisos.
- Movimento reduzido respeitado no CSS. Gesto horizontal de toque implementado, sem ensaio em dispositivo físico; navegação por toque nas abas não depende do gesto.

Capturas adicionais em `docs/preview/`: `ambientes-surform-desktop.png`, `ambientes-surform-mobile.png`, `surform-ssm-desktop.png` e `surform-ssm-mobile.png`. Os prompts completos e os caminhos dos dois novos assets constam em `docs/IMAGENS_SURFORM.md`.

## Revisão — largura total e pontos animados

- Faixa de prévia lateral removida do HTML, CSS e script. A imagem ocupa toda a largura útil da página; `sizes="100vw"` nas imagens responsivas.
- Dois pontos por cenário (oito no total). O clique desenha uma linha SVG até um balão com título, descrição e botão de fechar. A linha usa transição de 480 ms e o balão começa a aparecer após 320 ms.
- Nos quatro cenários, a abertura do segundo ponto fechou o primeiro: um único ponto ativo, `aria-expanded` atualizado e conteúdo anterior oculto para tecnologia assistiva. Linhas geradas e estado final do traço confirmados no navegador.
- Fechamento pelo botão do balão, Escape, clique fora e troca de cenário confirmados. Botão de fechar e Escape devolvem foco ao ponto. A alternância também foi confirmada por toque/clique em tela móvel.
- Em 320 px, os quatro balões permaneceram dentro da tela sem cobrir os pontos ou o texto principal. Em 390 px, a linha se reajustou ao redimensionamento. Balões e linhas respeitam movimento reduzido.
- Build: 25 arquivos, sem erros, avisos ou sugestões. Verificação estática aprovada: 11 páginas, 289 referências locais, 25 instâncias de imagem e 67 variantes WebP.
- Capturas desta revisão: `docs/preview/ambientes-full-width-pontos-desktop.png` e `docs/preview/ambientes-full-width-pontos-mobile.png`. As capturas anteriores foram preservadas como histórico.

## Revisão — página exclusiva SURFORM e evidências públicas

- Cabeçalho, navegação móvel, rodapé e metadados da página identificam a SURFORM. Retorno à Evviva mantido; não há formulário de atendimento Evviva na página SURFORM.
- Novos textos de apresentação e escolha do material. As ilustrações permanecem identificadas como conceito. Três vídeos do perfil oficial foram incorporados com autoria, data e link de origem; os conteúdos foram conferidos no navegador público, sem autenticação.
- Os três vídeos carregaram na página local. A altura foi adaptada à proporção 4:5 observada nas três publicações, com espaço para a interface de atribuição do Instagram. Em telas menores, a grade reorganiza as publicações sem comprimir as mídias.
- Página conferida em 320, 390, 820 e 1440 px, sem transbordamento horizontal. Menu SURFORM: abertura, acesso às âncoras, fechamento, Escape, desbloqueio da rolagem e retorno de foco confirmados.
- Ida à home da Evviva e retorno à SURFORM pela galeria confirmados. A home mantém sua marca e seu diálogo de atendimento.
- `npm run build`: 28 arquivos checados, sem erros, avisos ou sugestões; 11 páginas. `npm run verify`: aprovado; 293 referências locais, 25 instâncias de imagem, 67 variantes WebP.
- Fontes, autoria e limites das evidências registrados em `docs/SURFORM_CONTEUDO_E_FONTES.md`. Não foram criados depoimentos, clientes, notas ou estatísticas. Disponibilidade e interface dos vídeos dependem do Instagram.
- Capturas: `surform-exclusiva-desktop.png`, `surform-exclusiva-mobile.png`, `surform-publicacoes-desktop.png` e `surform-publicacoes-mobile.png`, em `docs/preview/`.

## Revisão — Nossos projetos na home

- Seção `#projetos` inserida imediatamente antes de `#ambientes`, com o fundo marfim `rgb(243, 240, 233)` em continuidade com a página.
- Estrutura da seção de portfólio da Tecnoglass consultada apenas como referência de carrossel e filtros. O projeto de referência não foi alterado.
- Seis referências conceituais, duas por categoria: SURFORM SSM, Planejados e Móveis. As imagens são identificadas como ilustrativas no texto e nos cartões. Os links levam à página da SURFORM, aos ambientes e às coleções.
- Filtros conferidos no navegador: cada categoria mostrou exatamente duas referências; Todos restaurou as seis. Estado `aria-pressed` e contagem visível atualizados juntos.
- Setas deslocaram o trilho; teclas Home e End alcançaram início e fim; o botão de avançar foi desabilitado no fim. A rolagem horizontal é restrita ao carrossel.
- Em 320, 390, 820 e 1440 px, os filtros cabem na tela e não há transbordamento horizontal da página. Grupos filtrados ficam centralizados quando há espaço.
- Botão e seta da abertura da home apontam para `#projetos`.
- `npm run build`: 31 arquivos checados, sem erros, avisos ou sugestões. `npm run verify`: 11 páginas, 305 referências locais, 31 instâncias de imagem e 88 variantes WebP; aprovado.
- Registro do navegador consultado sem erros ou avisos. Nova imagem de mobiliário e prompt documentados em `docs/IMAGEM_MOVEIS_PROJETOS.md`.
- Capturas: `docs/preview/projetos-home-desktop.png` e `docs/preview/projetos-home-mobile.png`.

## Revisão — três categorias de serviços

- A seção foi simplificada para exatamente três cartões: SURFORM SSM, Planejados e Móveis. Título e textos passaram a apresentar serviços. O fundo marfim e a posição antes dos ambientes foram preservados.
- Filtros, setas, contagem, carrossel, dados antigos e script de filtragem foram removidos. Os dados atuais estão em `src/data/services.ts`; a seção mantém `#projetos` para preservar os acessos existentes.
- Três cartões e ausência de filtros/controles confirmados no navegador. Links: SURFORM → `/surform-ssm/`; Planejados → `/#ambientes`; Móveis → `/colecoes/`. A navegação para ambientes e o retorno pelo botão “Conhecer serviços” foram confirmados.
- Desktop em 1440 px e versões menores em 320, 390 e 820 px conferidos, sem transbordamento horizontal da página. No celular os cartões são empilhados. Imagens continuam identificadas como conceituais.
- `npm run build`: 30 arquivos checados, sem erros, avisos ou sugestões. `npm run verify`: aprovado; 11 páginas, 299 referências locais, 28 instâncias de imagem e 78 variantes WebP.
- Registro do navegador consultado sem erros ou avisos. Capturas: `docs/preview/servicos-tres-categorias-desktop.png` e `docs/preview/servicos-tres-categorias-mobile.png`.

## Revisão — apresentação comercial das imagens

- Retiradas as etiquetas de imagem ilustrativa/conceito das fotos, cartões, legendas e rodapés das páginas Evviva e SURFORM. Textos alternativos descrevem o conteúdo das imagens.
- Mantidas as três categorias de serviços, sem atribuir às imagens projetos executados. Origem das ambientações e inclusão futura de fotografias de obras informadas na página de privacidade; prompts e arquivos originais preservados.
- Informações de funcionamento do formulário e das incorporações do Instagram preservadas.
- Build aprovado: 30 arquivos checados, zero erros/avisos; 11 páginas. Verificação estática aprovada: 299 referências locais, 28 instâncias de imagem e 78 variantes WebP.
- Home conferida em 1440 e 390 px, sem transbordamento horizontal; três cartões preservados. Página SURFORM sem etiquetas, com três publicações incorporadas. Navegador sem erros/avisos.
- Capturas: `docs/preview/servicos-apresentacao-desktop.png` e `docs/preview/servicos-apresentacao-mobile.png`.

## Revisão — logo oficial Evviva

- Arquivos públicos oficiais da Evviva aplicados no cabeçalho, menu do celular, rodapé e ícone da aba; origem e detalhes registrados em `docs/MARCA_EVVIVA.md`.
- Componente compartilhado mantém proporção e alternativa textual. Versão escura em fundos claros, branca no rodapé. Arquivos da marca preservados em `public/brand/`.
- Build aprovado: 31 arquivos, zero erros/avisos; 11 páginas. Verificação aprovada: 329 referências locais, 58 instâncias de imagem e 78 variantes WebP.
- Conferidos carregamento, proporção e contraste em desktop (1440 px), celular (390 px), menu aberto e rodapé. Sem transbordamento horizontal ou erros no navegador.
- Capturas: `docs/preview/logo-oficial-desktop.png` e `docs/preview/logo-oficial-mobile.png`.

## Revisão — preparação GitHub / EasyPanel

- Criados `Dockerfile`, `nginx.conf` e `.dockerignore`, seguindo a estrutura estática da Tecnoglass sem copiar suas integrações de leads.
- Build Node 24 Alpine com `npm ci --include=dev`, checagem, geração e verificação. Runtime Nginx 1.30 Alpine, porta 3000, teste de configuração no build e healthcheck em `/healthz`.
- Rotas estáticas, 404 personalizada, redirects relativos atrás do proxy, revalidação de HTML e cache longo apenas para arquivos com hash.
- URL de apresentação configurada em `astro.config.mjs` e `src/data/site.ts`. Canonical das 11 páginas conferido; sem localhost/127.0.0.1 no HTML gerado. Bloqueios de indexação preservados, com cabeçalho Nginx adicional.
- `npm run build`: 31 arquivos checados, zero erros/avisos. `npm run verify`: 11 páginas, 329 referências locais, 58 instâncias de imagem, 78 variantes WebP; aprovado.
- Docker, Nginx e GitHub CLI não estão disponíveis no PATH deste ambiente. A imagem não foi construída/executada localmente; a validação Linux/HTTP do contêiner permanece para o primeiro build no EasyPanel ou uma máquina com Docker. Comandos e conferência em `docs/DEPLOY_EASYPANEL.md`.
- Nenhum commit, push, repositório remoto, DNS ou serviço externo foi criado/alterado. O formulário de apresentação mantém seu funcionamento sem envio.
