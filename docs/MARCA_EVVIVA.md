# Marca Evviva

Arquivos obtidos do site oficial em 20/10/2026, sem redesenhar as letras ou alterar as proporções:

- Logo escuro: https://evviva.com.br/wp-content/uploads/2026/02/logo-rodape.svg
- Logo branco: https://evviva.com.br/wp-content/uploads/2026/02/logo-evviva-branco.svg
- Símbolos preservados como referência: https://evviva.com.br/wp-content/uploads/2026/02/evviva-icon-logo.svg e https://evviva.com.br/wp-content/uploads/2026/02/evviva-icon-white-logo.svg
- Favicon: https://evviva.com.br/wp-content/uploads/2023/12/favicon.ico

Os SVGs oficiais contêm imagens PNG incorporadas. Os originais estão em `public/brand/`. O logo escuro possui fundo branco no arquivo de origem; a aplicação usa `mix-blend-mode: multiply` sobre o fundo claro para integrar esse fundo sem modificar o arquivo. A versão branca tem transparência e é utilizada no rodapé.

O componente `src/components/EvvivaLogo.astro` é compartilhado pelo cabeçalho, menu do celular e rodapé. As dimensões intrínsecas e os textos alternativos foram preservados. A identidade da página SURFORM continua independente.
