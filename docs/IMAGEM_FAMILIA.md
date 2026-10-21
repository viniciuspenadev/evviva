# Família no living — recorte com profundidade

Criada em 21/10/2026 com a ferramenta integrada **image_gen**, a partir da prévia aprovada na conversa. Não foi utilizada CLI/API externa.

- Arquivo aplicado: [family-living-popout.png](../src/assets/inspiration/family-living-popout.png), em `C:/Users/Acer Predator/Documents/ChatGPT/Evviva SSM/src/assets/inspiration/family-living-popout.png`.
- Dimensões: 1481 × 1062 px. PNG com transparência real, valores alfa de 0 a 255.
- Original preservado: `C:/Users/Acer Predator/.codex/generated_images/01a15a0d-2505-7e00-87f9-b221e000c21f/exec-8d24db28-84a4-46ad-a26f-cd3535b175ac.png`.
- Referência aprovada: `C:/Users/Acer Predator/.codex/generated_images/01a15a0d-2505-7e00-87f9-b221e000c21f/exec-643ce9a5-1af9-42bf-a0e9-898a1e61df77.png`.
- Aplicação: `src/components/FamilyScene.astro`, na seção `#jeito-de-viver` da home. O Astro gera versões WebP responsivas mantendo o alfa.

Trata-se de uma ambientação com pessoas geradas, fora do portfólio oficial da Evviva. Não é apresentada como depoimento, fotografia de clientes ou registro de uma obra executada.

## Prompt final

```text
Use case: compositing / background-extraction. Create the final production website image asset from the LEFT photographic composition in this reference. Preserve this same family of three, their identities, joyful candid interaction, anatomy, outfits, pose, cream sofa, walnut living room, daylight, photographic realism and color treatment. Output ONLY the left family-and-living-room composition as a standalone high-resolution PNG asset with REAL TRANSPARENT ALPHA around its outer silhouette. Remove ALL text, the entire right-side column, and the surrounding ivory webpage background completely. Do not put the illustration onto another solid background.

The asset must retain the approved out-of-frame visual: a living-room photograph inside a rounded rectangle with approximately 32px-radius rounded corners; the parents' heads and hair extend naturally ABOVE the rectangle's straight upper boundary into transparent space, around 12% of the asset height. The room background remains clipped inside the rounded rectangle. Show the upper boundary on both sides of the heads. Keep the full parents' heads with clean detailed natural hair edges, no clipping or white halo. Keep the original intact lower scene, sofa, child and foreground wooden coffee table inside the bottom rounded frame. Precisely preserve the photorealistic seamless connection between family in foreground and the environment. No separate smaller floating portrait. No additional people or limbs. No new furniture, labels, logos, decorative shapes, typography, border strokes or captions. No fake checkerboard. No large margins. Approximate square/portrait-slightly-wide image composition tightly surrounding the entire left visual with a small safe transparent margin around head and frame. The image will sit over an ivory website background; all pixels outside the rounded photograph and extending family must be genuinely transparent. Subtle natural edge shadow may remain, but no opaque ivory rectangle.
```

Parâmetros: `transparent_background: true`, referência local indicada acima. O texto da seção permanece em HTML, independente da imagem e legível em todas as telas.
