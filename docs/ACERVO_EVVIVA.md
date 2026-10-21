# Acervo oficial e paleta

Importação realizada em **21/10/2026**, a pedido do cliente, a partir das galerias públicas da Evviva. O endereço `/product/` retornou 404 nessa data; a navegação oficial leva diretamente às categorias abaixo.

| Categoria | Quantidade | Origem |
| --- | ---: | --- |
| Cozinhas | 19 | https://evviva.com.br/product/cozinhas/ |
| Dormitórios | 5 | https://evviva.com.br/product/dormitorios/ |
| Living | 11 | https://evviva.com.br/product/living/ |
| Banho | 8 | https://evviva.com.br/product/banho/ |
| Corporativo | 9 | https://evviva.com.br/product/corporativo/ |
| Acessórios | 25 | https://evviva.com.br/product/acessorios/ |
| Acabamentos | 88 | https://evviva.com.br/acabamentos/ |
| **Total** | **165** | **77 fotos + 88 amostras** |

Os 165 arquivos originais estão em `src/assets/evviva/`, totalizando aproximadamente 22,5 MB. O manifesto `src/data/evviva-catalog.json` registra URL da imagem, página de origem, título original, categoria e nome local. Todos os arquivos tiveram metadados de imagem lidos com sucesso. O importador manual `scripts/import-evviva.mjs` usa os HTMLs de pesquisa ignorados pelo Git e não participa do build ou do deploy.

A página `/portfolio/` usa o acervo completo, com filtros, carregamento progressivo em grupos de 12 e visualização ampliada. As imagens servidas são cópias locais otimizadas pelo Astro em WebP; não dependem do servidor da Evviva ao navegar no site. A home apresenta três destaques e links para as categorias. Os três cartões de serviços foram preservados.

As imagens são identificadas como acervo da **Evviva**, sem atribuir execução à unidade local ou à SURFORM. O link no visualizador aponta para a categoria oficial. Não foram inventados nomes de obras, clientes, localidades ou depoimentos. Os títulos técnicos recebidos do site original são preservados no manifesto para rastreabilidade.

As seis ambientações anteriormente produzidas permanecem em `src/assets/inspiration/` e fora do portfólio oficial. A página de privacidade diferencia essas origens.

## Evolução da paleta

- Verde musgo `#252820` substituído por preto chumbo **`#242426`**.
- Token `--olive` renomeado para `--charcoal` em toda a interface.
- Texto principal `#29292c`, hover dos botões `#3b3b3f`, bordas escuras `#515154`.
- Fundos, menus, botões, overlays, balões interativos, rodapés e página SURFORM usam os novos neutros.
- Marfim, areia, bronze, cores naturais das fotografias e cores reais das amostras de materiais preservados.

Os arquivos oficiais do logotipo não foram recoloridos ou redesenhados.
