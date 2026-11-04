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

## Reposicionamento — SURFORM exclusiva (01/11/2026)

- Marca principal, cabeçalho, rodapé, favicon, títulos e metadados alterados para SURFORM. A Evviva aparece em um único encaminhamento externo no rodapé de cada página de conteúdo.
- Home refeita com superfície em destaque, detalhe de cuba/borda com linha e balão, três aplicações em rotação 3D, galeria, processo e acesso ao atendimento. Título e rotação permanecem sobre o degradê, sem caixa de fundo ou guia de navegação.
- Quatro ambientações novas geradas com Imagegen e preservadas em `src/assets/surform/`: cozinha, lavabo, banho e detalhe. Revisão de proporções, apoios, cubas, torneiras, válvulas, iluminação e acabamento. Fonte e briefs em `docs/IMAGENS_SURFORM_2026.md`; origem comunicada em `/privacidade/#imagens`. Nenhum cliente, obra entregue, depoimento, número de projetos ou certificação inventado.
- Páginas próprias de superfície sólida, cozinhas, lavabos, banhos, galeria, sobre, arquitetos, contato e privacidade. As publicações reais do perfil SURFORM ficam separadas das ambientações e carregam por solicitação.
- Versão anterior copiada para `docs/archive/evviva-2026-11-01/`, ignorada pelo Git e pela checagem de tipos. O acervo anterior não é importado nas páginas atuais. Sete endereços antigos usam redirecionamentos estáticos para o novo conteúdo.
- Atendimento pelo Instagram oficial enquanto o WhatsApp não é confirmado. Marcas e produtos oferecidos ainda precisam ser definidos. Nenhum formulário sem envio foi mantido na experiência ativa. Nenhuma mensagem enviada, nenhum DNS alterado e nenhum deploy externo realizado.
- Domínio anterior retirado dos canonicals. Novo endereço configurável por `PUBLIC_SITE_URL`, inclusive como argumento de build Docker. Nginx e porta interna 3000 preservados; imagem Docker não executada no ambiente.
- Build: 51 arquivos checados, zero erros/avisos/sugestões. 18 páginas, incluindo sete redirecionamentos. Verificador: 310 referências locais, 19 instâncias de imagem, 56 variantes WebP, status OK.
- Navegador: 320, 390, 820 e 1440 px sem transbordamento horizontal. Páginas internas conferidas em 390 px. Menu abre, fecha por Escape, restaura foco e libera rolagem. Galeria filtra as quatro categorias, amplia imagens, muda com setas e fecha com Escape. Aplicações sincronizam nome, foto e destino.
- Hotspots: uma abertura por vez, troca fecha o anterior, linha desenhada, Escape funcional. Balão reposicionado conforme a área visível da foto e o cabeçalho; em 1440 px ficou integralmente dentro da tela e abaixo do cabeçalho. Console final sem erros ou avisos locais.
- Capturas: `surform-nova-home-desktop.png`, `surform-nova-home-mobile.png`, `surform-aplicacoes-desktop.png`, `surform-galeria-desktop.png` e `surform-detalhe-desktop.png`, em `docs/preview/`.

## Revisão — serviços e família restaurados (01/11/2026)

- Retomados os três cartões de “SSM, planejados e móveis” logo após o hero, com o layout, arredondamento, degradês e movimento de imagem do componente original. A categoria SSM usa a nova cozinha SURFORM; planejados e móveis identificam a Evviva e abrem seus destinos externos em nova aba.
- A grade “O desenho muda. O cuidado permanece.” foi substituída pelo bloco “O seu jeito de viver é o ponto de partida.”, com a família ultrapassando o recorte arredondado. Mesmo ativo transparente da referência do usuário; textos e acesso à experiência adaptados para SURFORM.
- Origem das ambientações atualizada na página de privacidade, incluindo família e cartões reaproveitados. As imagens desses cartões não são atribuídas ao catálogo oficial da Evviva.
- Build: 51 arquivos checados, zero erros/avisos/sugestões, 18 páginas. Verificador: 309 referências locais, 20 instâncias de imagem e 61 variantes WebP, status OK.
- Navegador: 1363, 820, 390 e 320 px sem transbordamento horizontal. Três cartões, destinos e carregamento das imagens confirmados; família em uma coluna no celular e transparência preservada. Console sem erros ou avisos na conferência final.
- Capturas em `docs/preview/`: `surform-servicos-restaurados-desktop.png`, `surform-servicos-restaurados-mobile.png`, `surform-familia-restaurada-desktop.png` e `surform-familia-restaurada-mobile.png`. Prévia local mantida, sem publicação externa.

## Revisão — mistura de estilos e superfícies em destaque (03/11/2026)

- Quatro imagens novas geradas com a ferramenta integrada Imagegen a partir das referências enviadas pelo cliente: cozinha grafite, cozinha greige, lavabo com revestimento mineral e banho em tons de areia. Bancadas e cubas mantêm acabamento homogêneo e acetinado; as texturas minerais ficam nos elementos ao redor. Comando da torneira de parede acrescentado por edição localizada do lavabo.
- Abertura e cartão SSM usam a cozinha grafite; planejados usam a cozinha greige. Móveis e família preservados. Aplicações, páginas internas e textos alternativos atualizados. O detalhe interativo de superfície não foi alterado.
- Galeria ampliada de quatro para oito imagens, com três cozinhas, dois lavabos, dois banhos e um detalhe. Ambientes anteriores com madeira preservados. Filtro de cozinhas exibiu três resultados; a nova imagem greige abriu no ampliador como 02/03. Todas voltou a apresentar oito imagens. Contagem inicial usa o tamanho dos dados, sem número fixo.
- Ajustadas as resoluções responsivas para os recortes verticais da abertura e dos cartões. Em 390 px, a abertura final selecionou o arquivo de 1672 px; seletor usa recortes definidos por aplicação. Conferência visual dos três ambientes no desktop e do lavabo no celular, com cuba, bancada e metais legíveis.
- Build final: 51 arquivos checados, zero erros/avisos/sugestões, 18 páginas. Verificador: 317 referências locais, 24 instâncias de imagem e 76 variantes WebP, status OK. `git diff --check` sem ocorrências.
- Navegador: home em 1280, 820, 390 e 320 px sem transbordamento horizontal; galeria em 1280 e 390 px sem transbordamento. Console final sem erros/avisos locais. Prévia local respondeu HTTP 200. Nenhuma publicação externa, mensagem ou alteração de DNS.
- Originais e prompts em `docs/IMAGENS_SURFORM_ESTILOS_2026-11-03.md` e `docs/research/surform-estilos-prompts-2026-11-03.json`. Capturas `surform-estilos-hero-desktop.png`, `surform-estilos-hero-mobile.png`, `surform-estilos-servicos-desktop.png`, `surform-estilos-aplicacoes-desktop.png`, `surform-estilos-aplicacoes-mobile.png`, `surform-estilos-lavabo-desktop.png` e `surform-estilos-banho-desktop.png`, em `docs/preview/`.

## Revisão — riqueza dos detalhes da cuba e escorredor (03/11/2026)

- Substituída somente a foto da seção “O detalhe faz parte do todo” por uma ambientação nova de cuba integrada, rebaixo e escorredor removível com recortes. Gerada com Imagegen a partir da referência do usuário, em 1672 × 941 px; arquivo `src/assets/surform/detalhe-cuba-escorredor-2026-11.png`. Imagem anterior preservada nas demais páginas e na galeria.
- Três pontos: cuba, escorredor e borda. Posicionamento próprio no celular. Balão à esquerda no desktop e no alto da foto no celular, preservando acesso aos três pontos enquanto um detalhe está aberto. Textos curtos, leitura de SSM acetinada e nova imagem responsiva em qualidade 94.
- Conferidos no navegador: foto carregada, três pontos sobre os detalhes, linha com trajeto SVG, troca fecha o balão anterior e mantém somente um aberto, Escape fecha. Os três centros dos botões permaneceram acessíveis com o balão aberto em 1280, 390 e 320 px. Sem transbordamento horizontal; console final sem erros/avisos.
- Build final: 51 arquivos checados, zero erros/avisos/sugestões e 18 páginas. Verificador: 317 referências locais, 24 instâncias de imagem e 78 variantes WebP, status OK. `git diff --check` sem ocorrências. Sem publicação externa.
- Fonte, revisão e prompt em `docs/IMAGEM_SURFORM_DETALHE_ESCORREDOR_2026-11-03.md`. Capturas em `docs/preview/surform-detalhe-escorredor-desktop.png` e `docs/preview/surform-detalhe-escorredor-mobile.png`.

## Revisão — foto full width e apresentação dos detalhes (03/11/2026)

- Seção “O detalhe faz parte do todo” integrada ao fundo chumbo. Fotografia ocupa toda a largura útil da página, fora do contêiner e sem margens ou cantos arredondados. Título e introdução preservados acima; informações em faixa abaixo da foto.
- Três pontos numerados conectados à faixa por linha animada. Um detalhe aberto por vez, com título, texto curto e ampliação da mesma imagem. Controles Cuba/Escorredor/Borda, setas, Home/End, botão de fechar e Escape; estados ARIA e região de atualização acessível. Sem novas dependências ou imagens geradas.
- No celular, conteúdo empilhado e seleção trazendo a faixa para a área visível. Movimento reduzido respeitado. Foto conferida iniciando em x=0 e ocupando a largura útil em 1280, 1440, 820 e 390 px; largura de 320 px também conferida, sem transbordamento além de `innerWidth`.
- Navegador: seleção de escorredor e borda atualiza título, contador, ampliação e trajeto; somente um painel e uma linha ativos. End seleciona Borda; Escape fecha e mostra a apresentação geral. Console final sem erros/avisos.
- Build: 52 arquivos checados, zero erros/avisos/sugestões, 18 páginas. Verificador: 317 referências locais, 24 instâncias de imagem, 78 variantes WebP, status OK. Log em `docs/research/build-surface-study.log`. Nenhuma publicação externa.
- Capturas finais: `docs/preview/surform-detalhes-full-width-desktop.png` e `docs/preview/surform-detalhes-full-width-mobile.png`.

## Revisão — detalhes somente ao clicar (03/11/2026)

- Removida a faixa inferior inteira, incluindo ampliação, seletores e rodapé. Título, introdução e foto full width preservados. As três bolinhas iniciam fechadas; clicar abre um balão sobre a foto, conectado por linha animada, com um único detalhe visível.
- Navegador: estado inicial sem painel aberto; troca Cuba/Escorredor/Borda mantém somente um painel e uma linha ativos. Fechamento por Escape, botão de fechar e novo clique no ponto conferidos. Foto iniciando em x=0; três pontos acessíveis com o balão aberto em 1280, 390 e 320 px. Sem transbordamento horizontal; console sem erros ou avisos.
- Build: 52 arquivos checados, zero erros/avisos/sugestões e 18 páginas. Verificador: 317 referências locais, 24 instâncias de imagem, 78 variantes WebP, status OK. Nenhuma nova imagem ou dependência. Prévia local atualizada, sem publicação externa.
- Capturas: `docs/preview/surform-detalhes-baloes-desktop.png` e `docs/preview/surform-detalhes-baloes-mobile.png`.

## Revisão — balões ancorados nos pontos (03/11/2026)

- Cada balão abre acima da bolinha selecionada, centralizado quando há espaço, com conexão curta na borda inferior e entrada suave a partir dessa conexão. Ajustes laterais priorizam a posição mais próxima do ponto e evitam cobrir os outros controles. Quando necessário no celular, o balão sobe para liberar as demais bolinhas. Foto full width e um único detalhe aberto preservados.
- Balão de 300 px no desktop e 272 px no celular, limitado à largura disponível; foto móvel com altura mínima de 420 px. Posição vinculada à foto durante a rolagem. Rótulo de hover oculto no ponto ativo para não duplicar a informação.
- Conferidos Cuba, Escorredor e Borda no desktop e em 390 px: informações acima dos pontos, um painel aberto e três controles acessíveis. Escorredor conferido em 320 px e Borda em 820 px; balões dentro da largura da foto, sem bloquear controles. Escape e botão de fechar funcionais. Console final sem erros ou avisos.
- Build: 52 arquivos checados, zero erros/avisos/sugestões e 18 páginas. Verificador de referências e imagens: status OK. Sem novas imagens, dependências ou publicação externa. Capturas em `docs/preview/surform-balao-ancorado-desktop.png` e `docs/preview/surform-balao-ancorado-mobile.png`.

## Revisão — marcas e fotos nos cartões de serviços (03/11/2026)

- Cartão SSM com a marca tipográfica SURFORM já usada no cabeçalho e quatro fotos: cozinha grafite, detalhe da cuba/escorredor, lavabo mineral e banho em areia. Planejados com o arquivo branco oficial da Evviva e três fotografias do acervo da marca: cozinha, closet e living. Móveis preservado. Descrições e introdução da seção atualizadas.
- Troca por transição de opacidade e movimento discreto, em intervalos de 6 e 7,5 segundos. Pausa individual, suspensão ao passar o ponteiro ou focar o link, fora da área visível e com a aba oculta. Preferência de movimento reduzido desativa a rotação. Sem indicadores, setas, bibliotecas novas ou novos arquivos de imagem.
- Navegador: fotografias e logo carregados; somente um slide exposto por cartão. Alternância observada nos dois cartões, pausa mantém o slide e retomada volta à rotação. Desktop e celular de 390 px conferidos visualmente, com marcas, descrições, destinos e controles legíveis. Privacidade atualizada para a nova origem das imagens de planejados.
- Build: 53 arquivos checados, zero erros/avisos/sugestões e 18 páginas. Verificador: 323 referências locais, 30 instâncias de imagem e 100 variantes WebP, status OK. Log em `docs/research/build-service-galleries.log`. Nenhuma publicação externa.
- Capturas: `surform-servicos-logos-desktop.png`, `surform-servicos-logos-mobile.png` e `surform-planejados-logo-mobile.png`, em `docs/preview/`.

## Revisão — bolinhas, textos sem numeração e fonte de móveis (03/11/2026)

- Removidos os controles visuais de play/pausa dos cartões. Quatro bolinhas em SSM e três em planejados indicam a fotografia atual e permitem escolher outra, mantendo a rotação automática. Pausa durante interação com ponteiro ou teclado, fora da área visível e com aba oculta; movimento reduzido continua respeitado. Setas, Home e End permitem navegar entre as bolinhas.
- Retirados os prefixos numéricos dos cartões de serviços, das etapas da home, das etapas para arquitetos e dos links do menu móvel. Os textos correspondentes foram preservados. “Móveis” usa a mesma classe tipográfica da marca SURFORM: DM Sans, peso 400, tamanho e espaçamento de letras iguais, em maiúsculas.
- Navegador: seleção manual dos dois cartões sincronizou foto e bolinha ativa. Seta para a esquerda selecionou a foto anterior em planejados. Fonte, tamanho e espaçamento de SURFORM e Móveis conferidos iguais no estilo calculado. Em 390 px, bolinhas e rótulos legíveis, menu sem numeração, abertura e fechamento funcionais. Sem controle de play nos cartões.
- Build: 53 arquivos checados, zero erros/avisos/sugestões e 18 páginas; verificador com status OK. Capturas em `docs/preview/surform-servicos-bolinhas-desktop.png` e `docs/preview/surform-servicos-bolinhas-mobile.png`. Sem novas dependências ou publicação externa.

## Revisão — SURFORM exclusivamente em SSM e ampliação de aplicações (04/11/2026)

- Retiradas a marca anterior, as ofertas de planejados e móveis, seus links e logos. Trinta e cinco itens de código, dados, importadores e acervos legados movidos para o arquivo local ignorado em `docs/archive/ssm-exclusivo-2026-11-04/`. Nenhum arquivo histórico foi apagado; o arquivo não entra no Docker ou no build. `public/brand/` mantém somente o favicon SURFORM.
- Home reorganizada em bancadas, cubas integradas e detalhes funcionais, com imagens alternadas e bolinhas preservadas. Os três cartões abrem suas explicações em `/superficies/`. Página de superfícies ganhou três blocos ilustrados e FAQ sobre cores. Contato e arquitetos ganharam roteiro de preparação do projeto.
- Sete aplicações confirmadas pelo cliente: cozinhas, lavabos, banhos, áreas gourmet, lavanderias, comerciais e clínicas, com páginas próprias e integração ao seletor 3D e à galeria. Nomes longos recebem tamanho tipográfico adequado no seletor.
- Sete novas imagens criadas pela ferramenta integrada Imagegen: gourmet, lavanderia, recepção clara, consultório, cozinha com SSM grafite, lavabo com SSM areia e recepção com SSM cinza. Imagens anteriores de SSM preservadas, incluindo as ambientações claras; galeria com 16 imagens. Fontes, arquivos, critérios e prompts em `docs/EVOLUCAO_SSM_2026-11-04.md` e nos dois JSONs de prompts relacionados.
- Build: 36 arquivos checados, zero erros/avisos/sugestões; 20 páginas, incluindo cinco redirecionamentos. Verificador: 462 referências locais, 48 instâncias de imagem, 163 variantes WebP, status OK. Nova barreira verifica nomes e conteúdo de HTML/CSS/JS/SVG/JSON publicados para impedir referências à marca retirada e verifica a ausência das ofertas excluídas no HTML. Log em `docs/research/build-ssm-exclusivo-2026-11-04.log`.
- Navegador em 1280 e 390 px: sem transbordamento horizontal, cartões com grafite/areia/claro e destinos internos corretos. Cubas abriu a âncora correspondente; roteiro abriu as orientações de medidas. Seletor 3D com sete opções; End selecionou Clínicas, seta anterior selecionou Comerciais e seu link abriu a página correta. Menu móvel levou à galeria; filtro Clínicas exibiu uma imagem, Comerciais exibiu duas e Todas exibiu as 16. A imagem cinza abriu no ampliador com carregamento confirmado. Console final sem erros ou avisos.
- Prévia local atualizada em `http://127.0.0.1:4321/`. Sem novas dependências, mensagens, alterações de DNS ou publicação externa. Capturas em `docs/preview/`: `surform-ssm-exclusivo-desktop.png`, `surform-ssm-exclusivo-mobile.png`, `surform-comerciais-cores-desktop.png`, `surform-guia-projeto-desktop.png`, `surform-sete-aplicacoes-desktop.png` e `surform-sete-aplicacoes-mobile.png`.

## Revisão — detalhe grafite com água fora da moldura (04/11/2026)

- Aplicada a composição aprovada em `#jeito-de-viver`: bancada e cuba integrada grafite, torneira ultrapassando a moldura arredondada e fio de água até o ralo. Base da fotografia horizontal, sem prolongamento inferior. Texto e link da seção preservados.
- Imagem de produção em `src/assets/surform/detalhe-grafite-agua-popout-2026-11-04.png`, preparada com a ferramenta integrada Imagegen e transparência real. Novo componente `SurfaceCloseup.astro` no lugar de `FamilyScene.astro`. A imagem anterior da família permanece preservada; origem das imagens atualizada na privacidade. Brief, fontes e prompts em `docs/IMAGEM_SURFORM_GRAFITE_AGUA_2026-11-04.md` e JSON relacionado.
- Build: 36 arquivos checados, zero erros/avisos/sugestões; 20 páginas, incluindo cinco redirecionamentos. Verificação do pacote: status OK, 462 referências locais, 48 instâncias de imagem e 163 variantes WebP.
- Navegador em 320, 390, 820 e 1280 px: imagem carregada, proporções mantidas e sem transbordamento horizontal. Conferência visual do recorte no fundo marfim, moldura, torneira, água e ralo. Uma coluna no celular e duas no desktop/tablet. Texto e destino `/sobre/` preservados, console sem erros/avisos; tamanho temporário do navegador restaurado.
- Capturas: `docs/preview/surform-close-grafite-agua-desktop.jpg` e `docs/preview/surform-close-grafite-agua-mobile.jpg`. Prévia local em `http://127.0.0.1:4321/#jeito-de-viver`. Sem novas dependências ou publicação externa.

## Revisão — hero aprovado e compartilhamento com marca (04/11/2026)

- Hero atualizado com a última foto escolhida pelo cliente: cuba voltada para o lado de preparo, cooktop preservado e frente sob a cuba contínua. Arquivo `src/assets/surform/cozinha-hero-aprovada-2026-11-04.png`, copiado da referência enviada pelo cliente. Enquadramento móvel em 78% para manter a torneira visível.
- Imagem de compartilhamento com SURFORM à esquerda sobre a foto aprovada. Contornos do WOFF DM Sans Latin 400, a mesma fonte do site, com espaçamento de 0.23em; composição vetorial nativa, sem fontes substitutas. PNG final em `src/assets/surform/compartilhamento-surform-hero-2026-11-04.png`; renderer em `scripts/render-social-image.mjs`. Origem, prompts e método em `docs/COMPARTILHAMENTO_SURFORM_2026-11-04.md` e JSON relacionado.
- Layout global com Open Graph e Twitter Card grande: título/descrição por página, URL, JPEG social HTTPS absoluto, tipo, dimensões 1200 × 630 e alternativa textual. Endereço temporário confirmado pelo cliente em `astro.config.mjs`; `PUBLIC_SITE_URL` substitui o padrão e `import.meta.env.SITE` centraliza os endereços. O domínio temporário é a única exceção técnica à verificação da marca retirada.
- `robots.txt` permite ler os metadados e as regras noindex. A apresentação continua com noindex/nofollow no HTML e no Nginx. Domínio oficial pode ser configurado no argumento de build do Docker, seguido de novo build/publicação.
- Build: 37 arquivos, zero erros/avisos/sugestões; 20 páginas, incluindo cinco redirecionamentos. Verificador aprovado: 462 referências locais, 48 instâncias de imagem, 163 WebP e uma imagem social. JPEG social validado com 1200 × 630 px, sem alfa e 68.217 bytes; nome com hash.
- Navegador: hero carregado em 1280 e 390 px, sem transbordamento horizontal; enquadramento da torneira e texto legível no celular. Head da página confirmou o JPEG com marca e a URL temporária correta. Arquivo social aberto no navegador, com carregamento e dimensões naturais/exibidas de 1200 × 630; marca à esquerda, sem margens no arquivo. Console sem erros ou avisos. Viewport temporário restaurado e abas auxiliares fechadas.
- Capturas em `docs/preview/surform-hero-aprovado-desktop.jpg`, `surform-hero-aprovado-mobile.jpg` e `surform-compartilhamento-com-marca.jpg`; JPEG exportado em `surform-compartilhamento-hero-1200x630.jpg`. Sem novas dependências, envio de mensagens, alteração de DNS ou publicação externa. A validação da prévia no WhatsApp depende de publicar esta versão.
