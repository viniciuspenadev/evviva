# Coleções na home

A seção `#colecoes` adapta a referência WheelCarousel enviada pelo cliente à identidade da Evviva: fundo chumbo, serifada editorial, fotografia oficial dominante e rotação vertical em perspectiva. A foto ocupa toda a altura e alcança a borda esquerda, com extensão até 62% da largura para a transição em degradê. Título e seletor ficam diretamente sobre o degradê; o contêiner serve apenas ao alinhamento, sem fundo, borda, sombra ou desfoque. No celular, a foto fica acima e os textos se sobrepõem à transição vertical. Somente título e nomes ficam visíveis, sem parágrafos, legendas ou chamadas duplicadas. A fotografia é o único acesso aos detalhes; a seta aparece com hover/foco ou em dispositivos de toque. Stima abre a sequência, seguida de Persona, Versa e Evvai. Implementação nativa em Astro, CSS e TypeScript; não exige React, shadcn, next-themes ou framer-motion.

`src/components/CollectionWheel.astro` contém a estrutura e imagens responsivas. `src/scripts/collections.ts` sincroniza seleção, fotografia e destino/nome acessível do link. A rotação segue um cilindro vertical, com deslocamento em Y/Z e rotação no eixo X; as imagens entram com transição de enquadramento. `src/styles/collections.css` contém composição e movimento.

A troca automática ocorre a cada 5,2 segundos enquanto o seletor está visível. Pausa com hover, foco, aba oculta e preferência por movimento reduzido. Uma escolha manual pausa a reprodução. A barra visual de navegação, setas anterior/próxima e indicadores foram removidos a pedido do cliente. Suporta clique nos nomes, setas do teclado, Home/End, arraste vertical com mouse e horizontal no toque. Espaço pausa/retoma; existe também um botão de pausa acessível pelo teclado, visível somente ao receber foco. Rolagem vertical no celular permanece disponível; a roda do mouse só controla as coleções quando o seletor está focado. Sem JavaScript, os nomes permanecem links para a página de coleções.

## Fotografias oficiais

Baixadas em 21/10/2026 a partir dos cartões de cada coleção na [home oficial Evviva](https://evviva.com.br/), preservadas em `src/assets/collections/` e convertidas pelo Astro para WebP responsivo. Não representam obras executadas pela unidade local.

| Coleção | Arquivo original |
| --- | --- |
| [Persona](https://evviva.com.br/collections/persona/) | https://evviva.com.br/wp-content/uploads/2023/10/Rogerio-Maranhao_2023_evv_0-0331-1.jpg |
| [Stima](https://evviva.com.br/collections/stima/) | https://evviva.com.br/wp-content/uploads/2025/03/A7R03222-1.jpg |
| [Versa](https://evviva.com.br/collections/versa/) | https://evviva.com.br/wp-content/uploads/2023/10/Ezequeiele-Panizzi-Studio-_-DSCF7385-HDR-1.jpg |
| [Evvai](https://evviva.com.br/collections/evvai/) | https://evviva.com.br/wp-content/uploads/2025/06/A7R00883-cmyk-scaled-1.webp |
