# SURFORM — foco exclusivo em SSM

Revisão de 04/11/2026. O cliente confirmou atendimento residencial, áreas gourmet, lavanderias, espaços comerciais e clínicas. Também pediu preservar as imagens existentes e desenvolver novas ambientações e cores de superfície.

## Estrutura

- Três soluções na home: bancadas, cubas integradas e detalhes funcionais. Cada cartão abre a explicação correspondente em `/superficies/`.
- Sete aplicações com páginas próprias e fotografias: cozinhas, lavabos, banhos, áreas gourmet, lavanderias, comerciais e clínicas. Seletor 3D e filtros da galeria usam os mesmos dados.
- Roteiro para a primeira conversa em `/contato/#preparar`, com versão técnica em `/arquitetos/#preparar`.
- Galeria ampliada para 16 imagens, preservando o acervo anterior de SSM. Marcas e produtos comerciais específicos continuam sujeitos à confirmação da empresa.
- Fontes, imagens, componentes, importadores e logos sem uso da versão anterior retirados da árvore ativa. Histórico local em `docs/archive/ssm-exclusivo-2026-11-04/`, fora do build e do Docker. Verificador também examina HTML, CSS, JavaScript, SVG, JSON e nomes dos arquivos publicados para impedir referências à marca retirada.

## Novas imagens

Produzidas pela ferramenta integrada `image_gen.imagegen`, sem CLI/API externa. Todas as sete imagens têm 1672 × 941 px e foram copiadas para o projeto; originais preservados. Foram revisados apoios, cubas, torneiras e comandos, válvulas, proporções, textura e iluminação. As ambientações não são apresentadas como registros de obras executadas.

| Aplicação | Arquivo no projeto | Original gerado |
| --- | --- | --- |
| Área gourmet | `src/assets/surform/gourmet-2026-11-04.png` | `exec-748cb7c1-4d86-4d5a-95af-8c3c0400c66d.png` |
| Lavanderia | `src/assets/surform/lavanderia-2026-11-04.png` | `exec-59fbec5c-0800-43b0-9d50-82758bee6ef9.png` |
| Recepção | `src/assets/surform/comercial-2026-11-04.png` | `exec-aca1f796-7ae6-4f09-9ef1-08777e1d18f1.png` |
| Clínica | `src/assets/surform/clinicas-2026-11-04.png` | `exec-afe32c90-b86d-4304-8b7b-1f1f11c1b517.png` |
| Cozinha, SSM grafite | `src/assets/surform/cozinha-ssm-grafite-2026-11-04.png` | `exec-b737f050-18d8-4780-a7e2-e6915e6a681b.png` |
| Lavabo, SSM areia | `src/assets/surform/lavabo-ssm-areia-2026-11-04.png` | `exec-a69e4b92-7436-4807-86f8-9e6923b8fd41.png` |
| Recepção, SSM cinza | `src/assets/surform/recepcao-ssm-cinza-2026-11-04.png` | `exec-4f96e503-ff37-46df-b0c1-8674d7d96f94.png` |

Originais em `C:/Users/Acer Predator/.codex/generated_images/01a15a0d-2505-7e00-87f9-b221e000c21f/`. Prompts completos em `docs/research/surform-aplicacoes-2026-11-04.json` e `docs/research/surform-cores-2026-11-04.json`.

## Cores e especificação

As novas tonalidades são referências de ambientação; não correspondem a códigos de produto ou estoque informado pela SURFORM. A escolha deve acompanhar a linha fornecida, amostra física e orientação de uso. A FAQ explica que SSM não se limita ao branco.

Referências oficiais consultadas em 04/11/2026: [opções de cor Corian](https://www.corian.com/IMG/pdf/k-26836_corian_solid_surface_sheet_color_options.pdf) e [variedade de cores e padrões Durasein](https://www.durasein.com.br/durasein). Esses links são referências da categoria, não declarações de revenda ou parceria.

Em clínicas, a apresentação se concentra em bancadas de apoio e cubas. Não há alegação de certificação sanitária, aplicação cirúrgica ou propriedade antibacteriana. O texto orienta avaliação do produto e dos requisitos de uso pelo responsável técnico. Na área gourmet, calor e localização dos equipamentos fazem parte das condições de especificação.
