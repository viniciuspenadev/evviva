# SURFORM — A matéria encontra a sua forma.

Site de apresentação em Astro, Tailwind CSS e TypeScript, dedicado às superfícies sólidas. Identidade em chumbo e marfim, fontes locais Playfair Display e DM Sans, fotografias de ambientação produzidas para o projeto e um encaminhamento externo discreto para a Evviva no rodapé.

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

- Home: superfície em destaque, três categorias (SSM, planejados e móveis), marcas SURFORM e Evviva com fotos alternadas nos dois primeiros cartões, foto full width com detalhes de cuba/escorredor/borda em balões ao clicar e linha animada, aplicações em rotação 3D, seção da família, processo de escolha e atendimento. Planejados e móveis encaminham para a Evviva.
- `/superficies/`: categoria SSM, possibilidades e cuidados de uso.
- `/aplicacoes/cozinhas/`, `/aplicacoes/lavabos/`, `/aplicacoes/banhos/`: referências por ambiente.
- `/portfolio/`: galeria de aplicações com filtros e visualizador por teclado. O nome da rota foi mantido para compatibilidade; as imagens não são apresentadas como obras executadas.
- `/sobre/` e `/arquitetos/`: posicionamento da SURFORM e conversa sobre especificação.
- `/contato/` e `/privacidade/`: canal de atendimento e origem das imagens.
- Publicações históricas do perfil oficial @surform_ssm em `/sobre/` e na galeria. Incorporações carregadas somente ao abrir cada publicação.
- Menu e visualizador com diálogo nativo, Escape e retorno do foco. Movimento reduzido respeitado.
- Endereços antigos redirecionam para a nova experiência SURFORM.

## Configuração comercial

`src/data/site.ts` centraliza identidade, WhatsApp, Instagram e link externo da Evviva. Enquanto o WhatsApp não é informado, o contato leva ao Instagram oficial. Não há envio de formulário, armazenamento de dados pessoais ou confirmação de agendamento.

O domínio SURFORM ainda precisa ser definido. Configure `PUBLIC_SITE_URL` no build quando o endereço estiver confirmado; até lá o site não publica canonical com o domínio anterior. A apresentação mantém `noindex, nofollow` e `robots.txt` bloqueando indexação.

## Imagens

Oito ambientações na galeria: cozinha grafite, cozinha greige, lavabo mineral, banho em tons de areia, três ambientes com madeira e detalhe de bancada/cuba. A seção de detalhes da home tem uma imagem própria de cuba integrada com escorredor removível. As imagens combinam estilos diferentes mantendo a superfície sólida em destaque. São ambientações produzidas por IA, sem clientes, locais ou obras fictícias atribuídas à empresa. A origem é explicada em `/privacidade/#imagens`.

Originais, briefs e critérios de revisão estão em `docs/IMAGENS_SURFORM_2026.md`, `docs/IMAGENS_SURFORM_ESTILOS_2026-11-03.md` e `docs/IMAGEM_SURFORM_DETALHE_ESCORREDOR_2026-11-03.md`. Dados, alternativas e recortes em `src/data/surform-media.ts`; o detalhe exclusivo da home é definido em `src/components/SurfaceDetail.astro`. Os registros reais do Instagram permanecem separados, com autoria e data.

## Histórico preservado

A versão anterior foi copiada para `docs/archive/evviva-2026-11-01/` antes da reformulação. O arquivo é local, ignorado pelo Git e pela checagem de tipos. Os cartões de serviços e a seção da família foram reaproveitados na home SURFORM, com textos e destinos adaptados. O acervo Evviva não integra a galeria SURFORM.

## Docker e EasyPanel

A base de deploy foi preservada: Node 24 no build, Nginx na porta interna 3000 e `/healthz`. Veja `docs/DEPLOY_EASYPANEL.md`. Nenhum push, alteração de DNS ou deploy externo é executado pelo build.
