# SURFORM — A matéria encontra a sua forma.

Site de apresentação em Astro, Tailwind CSS e TypeScript, dedicado exclusivamente à SURFORM e às superfícies sólidas minerais. Identidade em chumbo e marfim, fontes locais Playfair Display e DM Sans e fotografias de ambientação produzidas para o projeto.

## Desenvolvimento

Node >= 22.12.0.

```sh
npm ci
npm run dev
npm run build
npm run verify
npm run preview
```

O preview usa `http://127.0.0.1:4321/`. O resultado estático fica em `dist/`. O build verifica os tipos e gera imagens responsivas em WebP.

## Experiência

- Home: bancadas, cubas integradas e detalhes funcionais, com fotos alternadas e bolinhas de seleção; foto full width com detalhes em balões ao clicar; sete aplicações em rotação 3D, detalhe de cuba grafite com torneira ultrapassando o recorte, processo de escolha e atendimento.
- `/superficies/`: categoria SSM, bancadas, cubas, detalhes funcionais, cores e cuidados de uso.
- `/aplicacoes/`: páginas de cozinhas, lavabos, banhos, áreas gourmet, lavanderias, espaços comerciais e clínicas.
- `/portfolio/`: galeria de aplicações com filtros e visualizador por teclado. O nome da rota foi mantido para compatibilidade; as imagens não são apresentadas como obras executadas.
- `/sobre/` e `/arquitetos/`: posicionamento da SURFORM e conversa sobre especificação.
- `/contato/` e `/arquitetos/`: roteiro de preparação do projeto, com referências, medidas, instalações e condições de uso; canal de atendimento atual.
- `/privacidade/`: origem das imagens e uso dos canais externos.
- Publicações históricas do perfil oficial @surform_ssm em `/sobre/` e na galeria. Incorporações carregadas somente ao abrir cada publicação.
- Menu e visualizador com diálogo nativo, Escape e retorno do foco. Movimento reduzido respeitado.
- Endereços antigos redirecionam para a nova experiência SURFORM.

## Configuração comercial

`src/data/site.ts` centraliza identidade, WhatsApp e Instagram. Enquanto o WhatsApp não é informado, o contato leva ao Instagram oficial. Não há envio de formulário, armazenamento de dados pessoais ou confirmação de agendamento.

O domínio SURFORM ainda precisa ser definido. Configure `PUBLIC_SITE_URL` no build quando o endereço estiver confirmado; até lá o site não publica canonical com o domínio anterior. A apresentação mantém `noindex, nofollow` e `robots.txt` bloqueando indexação.

## Imagens

Dezesseis imagens na galeria: ambientações residenciais, comerciais e clínicas, detalhes de bancada/cuba e superfícies em branco, grafite, areia e cinza. A seção de detalhes da home tem uma imagem própria de cuba integrada com escorredor removível. Em “O seu jeito de viver”, a cuba grafite tem recorte transparente, torneira ultrapassando a moldura e água chegando ao ralo. A fotografia anterior da família e as imagens anteriores de SSM foram preservadas. São ambientações produzidas por IA, sem clientes, locais ou obras fictícias atribuídas à empresa. A origem é explicada em `/privacidade/#imagens`.

Originais, briefs e critérios de revisão estão em `docs/IMAGENS_SURFORM_2026.md`, `docs/IMAGENS_SURFORM_ESTILOS_2026-11-03.md`, `docs/IMAGEM_SURFORM_DETALHE_ESCORREDOR_2026-11-03.md` e `docs/IMAGEM_SURFORM_GRAFITE_AGUA_2026-11-04.md`. Dados, alternativas e recortes em `src/data/surform-media.ts`; o detalhe interativo da home é definido em `src/components/SurfaceDetail.astro` e o recorte grafite em `src/components/SurfaceCloseup.astro`. Os registros reais do Instagram permanecem separados, com autoria e data.

## Histórico preservado

O material de versões anteriores foi retirado de `src/`, `public/` e dos importadores ativos. O arquivo local está em `docs/archive/ssm-exclusivo-2026-11-04/`, ignorado pelo Git, pela checagem de tipos e pelo Docker. O pacote publicado é verificado para impedir referências à marca retirada e ofertas fora do escopo de SSM.

## Docker e EasyPanel

A base de deploy foi preservada: Node 24 no build, Nginx na porta interna 3000 e `/healthz`. Veja `docs/DEPLOY_EASYPANEL.md`. Nenhum push, alteração de DNS ou deploy externo é executado pelo build.
