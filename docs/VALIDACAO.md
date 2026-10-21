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

## Revisão — acervo oficial e preto chumbo (21/10/2026)

- Importadas todas as imagens encontradas nas sete categorias oficiais: cozinhas 19, dormitórios 5, living 11, banho 8, corporativo 9, acessórios 25, acabamentos 88. São 165 URLs distintas, com arquivos locais e origem registrada no manifesto.
- Criada `/portfolio/`, integrada ao menu, rodapé e home. Filtros por categoria, exibição em grupos de 12, imagens ampliadas com setas e teclado, Escape, foco restaurado e bloqueio de rolagem do fundo. Origem Evviva identificada; nenhuma atribuição de execução à unidade local ou à SURFORM.
- Seleção com três fotos oficiais na home após a galeria imersiva. Três cartões de serviços preservados.
- Paleta atualizada de verde musgo para preto chumbo `#242426`, com neutros correspondentes para textos, hover, bordas, overlays e controles, inclusive na página SURFORM. Logos oficiais preservados.
- Todos os 165 arquivos tiveram metadados lidos; WebP responsivo e versões ampliadas geradas localmente. As fotografias não dependem de hotlink do site oficial.
- `npm run build`: 36 arquivos checados, zero erros/avisos/sugestões; 12 páginas. `npm run verify`: aprovado, 725 referências locais, 230 instâncias de imagem e 645 variantes WebP. Canonical da nova página conferido para o domínio temporário.
- Filtros conferidos no navegador com os totais acima. Carregamento adicional de acabamentos passou de 12 para 24; cozinhas chegou a 19 e ocultou o botão. Ampliação, próxima foto, seta do teclado, Escape, retorno do foco e link de origem confirmados.
- 320, 390, 820 e 1440 px sem transbordamento horizontal. Galeria em uma, duas ou três colunas conforme a tela; visualizador centralizado, sem transbordamento no celular. Fundo e botão confirmados em `rgb(36, 36, 38)`; link sobre fundo escuro em marfim.
- Capturas: `portfolio-oficial-desktop.png`, `portfolio-oficial-mobile.png` e `portfolio-home-chumbo-desktop.png`, em `docs/preview/`. Detalhes de importação e fontes em `docs/ACERVO_EVVIVA.md`.
- Preview local reiniciado na porta 4321. Nenhum push ou deploy externo realizado. Configuração Docker existente inclui os novos arquivos automaticamente.

## Revisão — família ultrapassando o recorte (21/10/2026)

- A prévia com família no living foi aprovada e convertida em imagem de produção com transparência real. As cabeças dos pais ultrapassam o limite superior da foto, com cantos arredondados no ambiente e sem texto embutido.
- Imagem aplicada na seção `#jeito-de-viver` da home por `src/components/FamilyScene.astro`. Foto anterior substituída somente nessa seção, com texto e acesso à experiência preservados. Fundo marfim e composição adaptada para uma coluna no celular.
- Original PNG de 1481 × 1062 px preservado no workspace; quatro variantes WebP responsivas com alfa geradas pelo Astro. Ambientação mantida fora do portfólio oficial da Evviva. Origem, ferramenta e prompt completo em `docs/IMAGEM_FAMILIA.md`.
- `npm run build`: 37 arquivos checados, sem erros/avisos/sugestões; 12 páginas. `npm run verify`: aprovado; 725 referências locais, 230 instâncias de imagem e 645 variantes WebP.
- Navegador: 320, 390, 820 e 1440 px sem transbordamento horizontal. Imagem carregada e proporção preservada, sem corte nas cabeças; transparência integrada ao fundo. Rodadas finais sem erros/avisos no navegador.
- Capturas em `docs/preview/familia-recorte-desktop.png` e `docs/preview/familia-recorte-mobile.png`.

## Revisão — coleções em arco e perspectiva (21/10/2026)

- A lista estática da seção “Possibilidades que se encontram” foi substituída por composição editorial com fotografias oficiais de Persona, Stima, Versa e Evvai. Referência WheelCarousel fornecida pelo cliente adaptada à identidade existente em Astro, CSS e TypeScript, sem novas dependências.
- Seletor segue arco vertical com deslocamento em profundidade, rotação e escala. Foto, legenda, descrição, contador e link acompanham a seleção. Fotos oficiais preservadas em `src/assets/collections/`; fontes em `docs/COLECOES_INTERATIVAS.md`.
- Reprodução automática observada no navegador. Clique nas setas e nos nomes, arraste vertical com mouse, setas de teclado e Home/End conferidos; apenas uma coleção/foto ativa por vez. Escolha manual pausa a reprodução. Código contempla pausa por foco, hover, aba oculta, seletor fora da tela e preferência de movimento reduzido.
- Layout conferido em 320, 390, 820 e 1440 px, sem transbordamento horizontal. No celular, foto e seletor ficam empilhados; código usa arraste horizontal para preservar rolagem vertical. Rolagem normal do mouse preservada quando o seletor não está focado.
- `npm run build`: 39 arquivos checados, zero erros/avisos/sugestões, 12 páginas. `npm run verify`: aprovado, 732 referências locais, 234 instâncias de imagem e 660 variantes WebP. Última consulta ao console do navegador sem erros ou avisos.
- Capturas em `docs/preview/colecoes-arco-desktop.png` e `docs/preview/colecoes-arco-mobile.png`. Alteração disponível somente no preview local; deploy externo não realizado.

## Revisão — composição clean das coleções (21/10/2026)

- Removidos textos de apoio, legendas, números, instrução de gesto e dois CTAs textuais. Conteúdo visual reduzido a fotografia, título e nomes. Fotografia agora é o único link para detalhes, com seta discreta e nome acessível atualizado pela seleção. Controles de navegação e pausa preservados.
- Fotografia ampliada e título integrado à coluna do seletor. No celular, título, foto e seletor ficam empilhados. Stima abre a apresentação. Rotação refeita como cilindro vertical, com recuo em profundidade e inclinação no eixo X; suavização ampliada e entrada das imagens com transformação de enquadramento.
- Seleção por seta de teclado e botão conferida com atualização da fotografia, nome e destino do link. Uma foto e um indicador ativos por vez. 320, 390, 820 e 1440 px sem rolagem horizontal; captura móvel mostra toda a seção em uma tela. Console sem erros/avisos na conferência final.
- `npm run build`: 39 arquivos checados, zero erros/avisos/sugestões, 12 páginas. `npm run verify`: aprovado; 731 referências locais, 234 instâncias de imagem e 660 variantes WebP.
- Capturas finais: `docs/preview/colecoes-clean-desktop.png` e `docs/preview/colecoes-clean-mobile.png`. Preview local preservado.

## Revisão — foto contínua, degradê e card integrado (21/10/2026)

- A fotografia agora alcança as bordas esquerda, superior e inferior da seção, com transição horizontal para o fundo chumbo. Área de imagem estendida até 62% para formar o degradê; card na metade direita com superfície translúcida, borda sutil e desfoque. No celular, fotografia superior e sobreposição do card com degradê vertical.
- Barra de navegação, anterior/próxima e indicadores de posição removidos do HTML, CSS e script. Clique nos nomes, arraste e teclado preservados. Pausa/retomada por Espaço e botão acessível que aparece apenas com foco de teclado.
- Navegador confirmou imagem iniciando em x=0 e com altura igual à seção no desktop. Zero elementos da antiga guia de navegação. Seleção via teclado atualizou foto e nome acessível do link. Layouts de 320, 390, 820 e 1440 px sem transbordamento horizontal; console final sem erros/avisos.
- `npm run build`: 39 arquivos checados, zero erros/avisos/sugestões, 12 páginas. `npm run verify`: aprovado; 730 referências locais, 234 instâncias de imagem e 659 variantes WebP. Imagens responsivas ajustadas à nova dimensão, sem ampliar além da largura original.
- Capturas: `docs/preview/colecoes-degrade-desktop.png` e `docs/preview/colecoes-degrade-mobile.png`. Nenhum deploy externo.

## Revisão — retirada da caixa do seletor (21/10/2026)

- Removidos fundo, borda, sombra, arredondamento e desfoque do contêiner do título/seletor, inclusive no CSS móvel. Espaçamento, foto, degradê e animação preservados.
- Conferência visual em desktop e 390 px; navegador confirmou fundo transparente, imagem de fundo/sombra/desfoque ausentes e borda de 0 px. Celular sem transbordamento horizontal.
- Build e verificador aprovados: 12 páginas, 730 referências locais, 234 instâncias de imagem e 659 variantes WebP.
- Capturas: `docs/preview/colecoes-sem-caixa-desktop.png` e `docs/preview/colecoes-sem-caixa-mobile.png`.
