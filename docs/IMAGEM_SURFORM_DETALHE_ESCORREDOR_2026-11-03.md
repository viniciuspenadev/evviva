# SURFORM — detalhe da cuba e escorredor, 03/11/2026

Imagem nova para a seção “O detalhe faz parte do todo”, produzida com a ferramenta integrada `image_gen.imagegen`. A fotografia enviada pelo cliente orientou o enquadramento, a cuba integrada, o rebaixo e o escorredor removível. Foi criada uma ambientação nova em SSM acetinada clara, com base em chumbo e luz lateral.

## Arquivo final

- Projeto: `src/assets/surform/detalhe-cuba-escorredor-2026-11.png`.
- Dimensões: 1672 × 941 px.
- Original: `C:/Users/Acer Predator/.codex/generated_images/01a15a0d-2505-7e00-87f9-b221e000c21f/exec-f789af12-801c-4847-850e-9b2d520bcc65.png`.
- Geração pela ferramenta integrada, sem CLI ou chave de API. O original e a imagem anterior permanecem preservados.

## Revisão e aplicação

Cuba com cantos internos suaves, uma válvula metálica, um misturador com comando visível e bica sobre a área aberta. Escorredor apoiado no rebaixo, com recortes paralelos e perfurações; iluminação rasante permite ler as bordas e a textura acetinada. Sem veios de pedra, texto ou marca de fabricante.

Uso restrito ao componente `SurfaceDetail.astro` da home. Galeria e páginas que usam o detalhe anterior mantidas. Três pontos interativos sobre cuba, escorredor e borda, com posições específicas para celular; linha animada, exclusividade de abertura e fechamento por Escape preservados. A foto usa WebP responsivo em qualidade 94, com arquivo maior no recorte vertical móvel.

A imagem não é um registro de obra executada ou produto de fabricante específico. Medidas, apoios, usinagem e viabilidade exigem desenho técnico e validação do material real. A origem das ambientações continua informada em `/privacidade/#imagens`.

### Evolução da apresentação

A seção usa fundo chumbo e fotografia em toda a largura da página, fora do contêiner de texto e sem margens laterais. A foto começa com os três pontos numerados e as informações fechadas. Ao clicar, uma linha animada conecta o ponto a um balão acima da própria bolinha, com título e texto curto. O balão fica centralizado no ponto e ajusta sua posição nas bordas ou quando precisa liberar os outros controles. A entrada tem origem na conexão inferior. No celular, o balão é compacto e a foto tem altura mínima de 420 px para acomodar as informações. Apenas um detalhe aberto por vez; clicar novamente, usar o botão de fechar, pressionar Escape ou clicar fora fecha o balão. Setas e Home/End permitem trocar pelo teclado. Sem faixa inferior, ampliação ou rolagem automática. Implementação própria em `src/styles/surface-study.css` e `src/scripts/surface-study.ts`.

## Prompt utilizado

```text
Use case: photorealistic-natural. Asset: a single extremely detailed close architectural photograph for the SURFORM solid-surface website section 'O detalhe faz parte do todo', wide 16:9 landscape, ideally at least 1920 pixels wide if available. Create a realistic new photograph closely inspired by the user's reference of a white integrated SSM kitchen sink and matching removable slotted draining board. Main subject: a warm-white ACRYLIC SOLID SURFACE (SSM) countertop and deep integrated rectangular sink, softly radiused internal corners, believable satin homogeneous material with subtle grazing-light microtexture, no marble veins, a single round brushed-steel drain at the low point. A narrow accurately machined recessed perimeter ledge along the basin supports ONE removable matching white solid-surface draining board over the right-hand third of the sink. This board is physically supported on the front and back rebates, sits slightly below the main counter surface, and has a precise orderly group of straight parallel elongated slots with rounded ends and a small regular area of drainage perforations; dark gaps show the actual sink below. The left two-thirds of the bowl remain open and readable. All machining is straight, consistent, physically plausible, no melted edges, not an impossible suspended sculptural slab. The low backsplash is the same homogeneous white material with a soft clean coved internal junction to the counter. Subtle charcoal satin base cabinets visible only along lower right, light greige wall and a hint of window light in the background, no wood grain. One polished-chrome kitchen mixer faucet with one visible single-lever control and a spout genuinely reaching over the open bowl, toward the upper-left edge of the frame, natural metallic reflections without distortion. Photograph from a high three-quarter angle like the reference, bowl occupying lower center-left and draining board upper center-right; keep the informative junction between bowl, rebated lip and board around the central 35–70 percent of frame width so a vertical mobile crop still shows both bowl and slotted board. Strong emphasis on softly radiused sink transitions, crisp machined accessory edges, counter edge and fine satin light. Use a professional 60mm architectural detail lens, controlled deep focus so both bowl and board are sharp, soft natural side lighting and believable tiny tonal variations rather than sterile CGI. It should look like a carefully photographed practical fabrication in a real Brazilian residential kitchen. Composition is minimal and clean, matching a high-end charcoal and ivory website. No plates, utensils, plants, people, labels, electrical outlets, blind chains, text, logos or watermark. No copied writing or invented manufacturer logo. This is one new ambient photograph, not a collage or diagram.
```
