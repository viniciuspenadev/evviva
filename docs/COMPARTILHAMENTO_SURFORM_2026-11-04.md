# Hero e imagem de compartilhamento SURFORM

O cliente confirmou o uso temporário de `https://evviva.bluedigitalhub.com.br` para apresentar o projeto. Essa URL foi configurada como padrão do Astro. A marca, os títulos e as ofertas continuam exclusivamente SURFORM/SSM.

## Fotografia

A foto escolhida para compartilhar o link é a mesma do hero. A cuba e a torneira da ilha foram orientadas para a área de preparo, mantendo o cooktop no lugar. Na referência devolvida pelo cliente, a alteração final se limita a remover as duas divisões das portas na frente sob a cuba. A quina estrutural, a lateral curta, a perspectiva, o contorno original e a iluminação da referência permanecem preservados.

- Arquivo do hero: `src/assets/surform/cozinha-hero-aprovada-2026-11-04.png`, cópia da última imagem escolhida pelo cliente.
- Imagem de compartilhamento: `src/assets/surform/compartilhamento-surform-hero-2026-11-04.png`.
- Referência exata fornecida pelo cliente: `docs/research/surform-hero-referencia-cuba-2026-11-04.png`.
- Fonte anterior preservada: `src/assets/surform/cozinha-grafite-2026-11.png`.
- Método: edição com a ferramenta integrada Imagegen, sem CLI.
- Marca à esquerda: contornos vetoriais extraídos do mesmo arquivo DM Sans Latin 400 usado pelo site, com espaçamento de 0.23em e cor marfim. A fotografia aprovada é mantida; a marca é composta apenas na imagem de compartilhamento, preservando o título sobreposto do hero.
- A origem das ambientações permanece informada em `/privacidade/#imagens`; não há atribuição de obra executada.

## Metadados

`scripts/render-social-image.mjs` produz a composição PNG de 1200 × 630 px a partir da foto aprovada e da marca SURFORM. Usa as bibliotecas locais já presentes `fontkitten` (contornos do WOFF original) e `sharp` (renderização da composição), sem aproximação tipográfica por IA ou fonte do sistema. Para regenerar: `node scripts/render-social-image.mjs`; também aceita origem e destino como dois argumentos posicionais. Os contornos da marca estão registrados em `docs/research/surform-marca-compartilhamento.svg`.

`src/layouts/Layout.astro` exporta essa composição em JPEG de 1200 × 630 px pelo serviço nativo de imagens do Astro, sem bordas. O arquivo recebe hash no nome para acompanhar as mudanças da arte. Open Graph inclui título, descrição, URL da página e imagem absoluta, tipo, dimensões e texto alternativo. Twitter Cards usa `summary_large_image` com a mesma imagem.

Todas as páginas de conteúdo compartilham essa fotografia; cada página preserva seu próprio título, descrição e canonical. Os metadados estão no HTML estático e não dependem de JavaScript.

`PUBLIC_SITE_URL` aceita o futuro endereço oficial no build do Docker/EasyPanel ou em um arquivo `.env` local. O endereço do Astro (`import.meta.env.SITE`) é a fonte única para canonical e imagem social. Depois da troca de domínio é necessário reconstruir e publicar o site.

## Leitura e indexação

`robots.txt` permite buscar o HTML e a imagem para montar a prévia. A apresentação mantém `noindex, nofollow` em meta e cabeçalhos Nginx. Permitir a leitura também permite que os buscadores encontrem a regra `noindex`; bloquear tudo no robots impediria isso.

O tamanho e o recorte exibidos são definidos por cada aplicativo. O formato horizontal prepara a imagem para cartões amplos, mas não impõe a interface do WhatsApp ou de outra rede. A validação externa depende de publicar esta versão; aplicativos podem manter uma imagem anterior em cache. Nenhuma mensagem ou publicação foi enviada durante a preparação.

## Fontes

- [Open Graph: imagem e propriedades estruturadas](https://ogp.me/).
- [Astro: variáveis de ambiente](https://docs.astro.build/en/guides/environment-variables/).
- [Google Search Central: noindex e acesso pelo robots.txt](https://developers.google.com/search/docs/crawling-indexing/block-indexing).

Prompts de edição e fontes originais: `docs/research/surform-hero-compartilhamento-2026-11-04.json`.
