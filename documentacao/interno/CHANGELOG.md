# Changelog documental

## 2026-09-07 — Restauração do fade de rolagem Obsidian

- Restaurada a lógica visual de fade da cópia aprovada em `D:\Dropbox\NeuroFlash`: início no topo sem hash, cortina/logo, header e blocos usam a mesma progressão de opacidade da referência.
- Removido o cache de coordenadas introduzido na refatoração anterior, pois ele alterava a sequência visual. Eventos de rolagem e resize continuam agrupados por `requestAnimationFrame`.
- Mantidas a preferência de redução de movimento, o carrossel de formatos, as imagens, os textos e o layout atuais.

## 2026-09-07 — Refatoração de execução e limpeza do site

- Encapsulados scripts de página, removidos helpers e variáveis CSS sem consumidores, unificado o alias redundante de imagem e consolidadas regras CSS ineficazes/repetidas e dados comuns do rodapé.
- Otimizadas medições do carrossel institucional e efeitos de rolagem Obsidian; preservados comportamento responsivo e navegação manual circular.
- Corrigidos pausas, cancelamento e carregamento de imagens da hero NeuroFlash. Adicionados sincronização de fontes na FAQ, respeito a redução de movimento e reserva inicial de espaço para o cabeçalho NeuroFlash.
- Adiado carregamento de imagens abaixo da abertura Obsidian. Mantidos arquivos de imagem aprovados, sem recompressão ou mudança visual.
- Excluído `obsidian/assets/obsidian-nome.jpg` (3.481 bytes), sem referências técnicas ou documentais. Exclusão direta autorizada; não foi criada cópia deste arquivo. Nenhuma pasta vazia foi identificada para remoção.
- Preservados legado, históricos HTML, URLs, metadados, textos públicos, verificação Google e configurações de hospedagem. Nenhuma publicação realizada.
- Validação e resultados locais: [08-refatoracao-e-validacao.md](08-refatoracao-e-validacao.md).

## 2026-09-07 — Pacote documental padronizado

- Criados o `README.md` e os documentos internos em Markdown para brief, arquitetura, marca e assets, conteúdo, funil, SEO/QA e backlog.
- Consolidado o estado observado do site Essentia Health, NeuroFlash e Obsidian, preservando os guias HTML históricos existentes.
- Registradas pendências de canais comerciais, licenças de assets, responsáveis, checkout, analytics, pixels e validações especializadas.
- Ampliado o escopo previsto do guia de criativos para as três marcas, sem alterar a copy pública do site.

O histórico técnico anterior permanece em [changelog.html](changelog.html).


---

## Transcrição histórica: `changelog.html`

> Conteúdo transferido do documento HTML histórico em 2026-09-07. A organização foi adequada a Markdown; fatos, datas, prioridades, caminhos, decisões e restrições foram preservados. O arquivo-fonte permanece em `changelog.html`.

# changelog
## Objetivo
Este arquivo registra os marcos relevantes da evolucao do site Neuroflash. Ele deve permanecer curto, legivel e focado em mudancas que alteram estrutura, comportamento, documentacao ou direcao de manutencao.
## Como Registrar Novas Entradas
Use sempre o formato abaixo:
`
## YYYY-MM-DD - Titulo da mudanca
- Mudanca: resumo objetivo do que foi alterado.
- Impacto: efeito da mudanca no projeto, na manutencao ou na experiencia.
`
Regras:
- agrupar microajustes do mesmo dia e do mesmo tema em uma unica entrada
- separar entradas apenas quando a natureza da mudanca for diferente
- usar o `site_architecture.html` para o estado atual e este arquivo para a trilha historica
## Historico Consolidado
## 2026-05-29 - Melhorias Lighthouse sitewide
- Mudanca: as seis rotas publicas passaram a declarar `favicon.ico`, as imagens LCP de Home, NeuroFlash e Obsidian receberam prioridade explicita, o carrossel da Home deixou de manter links focaveis em slides ocultos e os indicadores ganharam area de toque minima; imagens publicas de Home, NeuroFlash, Obsidian e rodape ganharam variantes responsivas menores quando houve reducao real de bytes.
- Impacto: reduz bytes baixados em imagens dimensionadas abaixo do arquivo original e corrige alertas reais de acessibilidade/semantica do Lighthouse sem alterar copy publica, metadados, JSON-LD, URLs canonicas, sitemap, fontes externas, CSS compartilhado de produto alem do necessario ou contratos de navegacao.
## 2026-05-29 - Normalizacao de URLs publicas
- Mudanca: links publicos internos da Home, NeuroFlash, Obsidian, footer compartilhado e fallback tecnico passaram a apontar para URLs limpas com barra final, sem expor `index.html` como URL publica preferencial.
- Impacto: reduz a descoberta de duplicatas tecnicas pelo Google Search Console, preservando canonicals, `og:url`, JSON-LD, `robots.txt`, `sitemap.xml`, copy publica e estrutura estatica sem adicionar redirects servidor-side.
## 2026-05-29 - Pagina Nossa Missao Obsidian
- Mudanca: criado `obsidian/nossa-missao/index.html` como pagina publica indexavel com copy autorizada, metadados proprios, JSON-LD `AboutPage`, header Obsidian estatico, footer compartilhado e inclusao em `sitemap.xml`; em refinamentos posteriores, o marcador visual "Obsidian" foi removido da hero, o titulo foi reduzido e centralizado, o conteudo passou a usar a mesma regua editorial da pagina Nossa Missao NeuroFlash, o fundo da pagina voltou a ser preto plano como a Home Obsidian, o header ganhou atalhos `Home` e `Nossa missao` com estado ativo, a tentativa de alinhar o header Obsidian por gutters compartilhados foi revertida e a escala visual do header passou a seguir a referencia do NeuroFlash sem alterar o produto.
- Impacto: Obsidian deixa de ser somente pagina unica e passa a ter um pequeno conjunto publico com Home e Nossa Missao, preservando a intro, o fade do header, o carrossel, a copy existente da Home e a excecao de header proprio do produto, com navegacao mais clara entre as duas paginas.
## 2026-05-29 - Wordmark no header Obsidian
- Mudanca: o header fixo do Obsidian passou a exibir a marca textual `obsidian-nome.png` ao lado do simbolo `logo-mini.png`, ambos dentro do mesmo link de retorno para `#intro-completa`; o asset transparente tem `320 x 39` e e exibido 30% menor no layout.
- Impacto: reforca a identidade do produto no topo sem alterar intro, fade do header, copy publica, metadados, JSON-LD, carrossel, footer ou rotas.
## 2026-05-29 - Espacamento mobile da secao Missao Home
- Mudanca: a secao `Missao` da Home raiz passou a compensar os gutters tambem no breakpoint mobile, mantendo a mesma margem lateral visual dos demais blocos.
- Impacto: corrige o alinhamento em telas pequenas sem alterar copy publica, estrutura HTML, metadados, JSON-LD, carrossel, header ou footer.
## 2026-05-28 - Nossa Missao Da Home Essentia
- Mudanca: o bloco institucional `#sobre` da Home raiz passou de `Sobre a empresa` para `Nossa missao`, com substituicao da copy publica pelo texto institucional fornecido explicitamente no pedido de implementacao e remocao posterior do titulo intermediario do card.
- Impacto: atualiza o posicionamento editorial da Essentia Health na Home sem alterar rotas, metadados, JSON-LD, carrossel, secao Missao existente, header, footer ou estrutura de navegacao.
## 2026-05-28 - Nossa Missao NeuroFlash
- Mudanca: a pagina publica `neuroflash/quem-somos/` passou a se apresentar como `Nossa Missao` no header, titulo, rodape, metadados e JSON-LD, com substituicao integral da narrativa pelo texto institucional fornecido no pedido de implementacao.
- Impacto: alinha a pagina ao novo posicionamento institucional aprovado no prompt, remove da experiencia publica a foto dos fundadores e o CTA contextual para FAQ, e preserva a URL tecnica existente para nao quebrar links.
## 2026-05-28 - Refino de larguras e mobile
- Mudanca: a Home raiz passou a alinhar carrossel de produtos, bloco `Sobre` e secao `Missao` pela mesma regua visual de `1180px`; o logo fixo do header Obsidian foi alinhado ao container geral; e o carrossel mobile de formatos do Obsidian recebeu ordem imagem-primeiro, copy centralizada, area de imagem ampliada, copy mais compacta e controles aproximados.
- Impacto: reduz inconsistencias de largura entre Home, NeuroFlash e Obsidian, melhora o enquadramento mobile do carrossel de formatos sem alterar copy publica, HTML, metadados, scripts ou comportamento desktop.
## 2026-05-28 - JPGs leves no Obsidian
- Mudanca: `obsidian/index.html` passou a usar as versoes `.jpg` existentes de `logo`, `produto-large`, `produto-small` e `apresentacao-1`, incluindo metadados sociais para `apresentacao-1.jpg` com `image/jpeg`.
- Impacto: reduz peso de carregamento dos assets Obsidian sem alterar copy publica, dimensoes declaradas, layout, scripts, intro, header, footer ou comportamento do carrossel.
## 2026-05-28 - Hero vertical Obsidian
- Mudanca: a secao inicial de produto de `obsidian/index.html` deixou de usar o banner wide `hero-baner.jpg` com copy sobreposta e passou a usar copy lateral ao lado da imagem vertical `hero-baner-2.jpg`, com dimensoes declaradas de `921 x 1152`.
- Impacto: aproxima a hero do comportamento visual das demais secoes do Obsidian, melhora a organizacao responsiva no mobile e preserva copy publica, intro, header, fade por scroll, metadados e carrossel de formatos.
## 2026-05-28 - Carrossel de formatos Obsidian
- Mudanca: a secao `Formatos` de `obsidian/index.html` passou a usar um carrossel manual em que cada slide agrupa copy lateral e imagem como um unico bloco de informacao, com setas, indicadores e controle em `obsidian/script.js`.
- Impacto: permite alternar blocos completos de formato sem alterar metadados, navegacao, intro, fade do header ou copy publica nova; os textos usados no carrossel foram reaproveitados da propria pagina.
## 2026-05-27 - Normalizacao de acentuacao e caixa
- Mudanca: a documentacao interna foi movida para `documentacao/interno/` com nomes de arquivos minusculos, referencias internas foram atualizadas, textos publicos sem acento foram corrigidos e identificadores locais seguros em scripts foram normalizados para ASCII minusculo.
- Impacto: reduz risco operacional em caminhos e nomes tecnicos, melhora a apresentacao publica de copy e metadados e preserva rotas, contratos `data-*`, arquivos tecnicos obrigatorios e sentido editorial da copy.
## 2026-05-27 - Otimizacao de imagens por mockup Full HD
- Mudanca: 22 imagens publicas foram redimensionadas para dimensoes compativeis com o maior uso observado no mockup Full HD, mantendo nomes, caminhos e formatos; 5 arquivos foram preservados porque a versao reduzida ficaria maior em bytes.
- Impacto: reduz aproximadamente 1,15 MB nos assets processados, diminui custo de download, decode e rolagem, e sincroniza atributos tecnicos `width`/`height` e documentacao interna sem alterar textos publicos, rotas ou metadados editoriais.
## 2026-05-27 - Refatoracao conservadora de assets, CSS e rodape
- Mudanca: removidos assets sem uso publico confirmado, duplicatas antigas do rodape dentro de `neuroflash/shared/`, aliases CSS sem consumidores reais e duplicacao interna de copy entre contextos `root` e `obsidian` em `shared/footer.js`.
- Impacto: reduz peso morto e superficie de manutencao sem alterar rotas, SEO tecnico, textos publicos, marcadores `data-*`, aparencia esperada ou compatibilidade estatica do site.
## 2026-05-23 - Remocao temporaria de Product schema
- Mudanca: os schemas `Product` foram removidos temporariamente de `obsidian/index.html`, `neuroflash/index.html` e `neuroflash/faq/index.html`, junto com referencias `#product` associadas.
- Impacto: evita itens de produto invalidos no Google Search Console enquanto nao houver oferta, review ou rating real e aprovado, mantendo as paginas indexaveis como paginas normais.
## 2026-05-23 - Area clicavel do header da Home
- Mudanca: o slot estrutural `shared-header__inner` da Home raiz foi movido para um container neutro, deixando o link apenas ao redor do logo e do nome Essentia Health.
- Impacto: a regua compartilhada do header continua preservada, mas areas vazias do topo deixam de navegar para a Home.
## 2026-05-23 - Infraestrutura compartilhada de header
- Mudanca: criada a camada `shared/header-utils.js` e `shared/header.css` para helpers, tokens e slots estruturais neutros de header; Home raiz e paginas NeuroFlash passaram a usar a ossatura comum sem trocar suas classes visuais.
- Impacto: permite reaproveitar largura, gutters, z-index, altura e alinhamento sem unificar visualmente os headers; Obsidian permanece preservado por depender da intro, de `intro-dismissed` e do fade inicial do logo.
## 2026-05-23 - Correcao do header NeuroFlash apos rodape global
- Mudanca: `shared/footer.js` e `neuroflash/shared/includes.js` foram encapsulados em escopo proprio para evitar colisao global entre helpers de scripts compartilhados.
- Impacto: o include do header NeuroFlash volta a executar junto com o rodape global, preservando a barra superior do produto e deixando registrada a regra de encapsulamento para futuras camadas compartilhadas de header.
## 2026-05-23 - Rodape global em shared raiz
- Mudanca: criada a camada global `shared/` com `footer.js`, `footer.css`, logo institucional e icones de contato; Home, Obsidian e paginas NeuroFlash passaram a renderizar o rodape por `data-shared-footer` com mapa do site por contexto.
- Impacto: reduz duplicacao de HTML/CSS de rodape entre os produtos, mantem `neuroflash/shared/` focado em header, aviso legal, fundo e primitivas do produto, e preserva compatibilidade com `file:///` e GitHub Pages sem `fetch` ou build.
## 2026-05-22 - Integracao publica Obsidian ao site
- Mudanca: `obsidian/index.html` passou de pre-publicacao para pagina publica indexavel, com `robots` indexavel, canonical, `og:url`, JSON-LD de organizacao/site/pagina/produto, inclusao de `/obsidian/` no `sitemap.xml`, marca Obsidian no JSON-LD da Home e link no mapa do site do rodape da Home.
- Impacto: Obsidian fica integrado ao site publico da Essentia Health como produto oficial ao lado de NeuroFlash, mantendo a estrutura estatica, compatibilidade local e documentacao interna sincronizadas.
## 2026-05-22 - Rodape da Home alinhado ao padrao NeuroFlash
- Mudanca: o rodape da Home raiz teve padding, gaps, largura do logo, familia tipografica, escala de texto e estilo normalizado dos contatos ajustados para seguir o enquadramento compacto do rodape NeuroFlash; os titulos de contato foram centralizados pelo mesmo criterio e o texto institucional passou a negrito nos rodapes Home, Obsidian e NeuroFlash.
- Impacto: Home, NeuroFlash e Obsidian ficam mais consistentes no fechamento institucional, com leitura mais equilibrada, menor ocupacao vertical e hierarquia de informacoes padronizada.
## 2026-05-22 - Copy HTML sobre o banner Obsidian
- Mudanca: a frase visual do banner de `obsidian/index.html` foi recriada como texto HTML sobreposto em `figcaption.hero-banner-copy`, com subcopy menor abaixo; as secoes inferiores passaram a centralizar imagens e copy no mobile, as linhas de contorno visiveis foram removidas do corpo da pagina, o espacamento vertical anterior foi restaurado, a sombra da copy `Preparo` foi removida, o banner, `Preparo` e `Formatos` receberam fade progressivo por scroll, o logo clicavel do header passou a usar `logo-mini.png`, ganhou fade de entrada sem deslocamento, teve o enquadramento ajustado para nao cortar a base, o rodape institucional da Home foi incorporado, as linhas superior e inferior do rodape foram habilitadas, o link `Home` do mapa do site passou a apontar para `#intro-completa` e o enquadramento do rodape foi compactado seguindo o padrao NeuroFlash.
- Impacto: prepara o banner para receber futuramente uma versao limpa da imagem sem depender de nova alteracao estrutural, melhora a leitura mobile das secoes inferiores, recupera respiro entre as secoes sem alterar o ponto de entrada do banner apos a intro, faz banner e produtos surgirem gradualmente, deixa o logo fixo aparecer inteiro apenas por opacidade sem alterar o efeito inicial do logo grande e alinha o fechamento institucional com a Home.
## 2026-05-22 - Consolidacao da pagina estatica Obsidian
- Mudanca: a documentacao interna foi sincronizada com o estado da epoca de `obsidian/index.html`, entao usando intro preta logo-only, header reduzido, banner `hero-baner.jpg`, duas secoes de produto espelhadas com `produto-large.png` e `produto-small.png`, manifesto e rodape.
- Impacto: naquele momento, o Obsidian deixou de ser documentado como experiencia cinematografica de scroll ou pagina com situacoes, FAQ, lista VIP e cards de formato; Obsidian permanecia pagina unica, conectada pela Home, `noindex`, fora do sitemap e sem subpaginas.
## 2026-05-22 - Obsidian com conteudo estatico
- Mudanca: `obsidian/index.html` deixou o motor cinematografico de cenas por rolagem e passou a usar apenas a intro preta com logo que some no primeiro scroll, seguida por conteudo estatico em fluxo normal com hero, produto, preparo, situacoes, formatos, manifesto, FAQ e lista VIP.
- Impacto: prioriza previsibilidade, leitura e estabilidade visual, mantendo os assets Obsidian, `file:///`, `noindex`, sitemap e `robots.txt` inalterados.
## 2026-05-22 - Suavizacao UX scroll Obsidian
- Mudanca: a experiencia de rolagem de `obsidian/index.html` foi suavizada com area maior de leitura, cenas com plato, menos blur, menos rotacao, menor deslocamento lateral, parallax discreto e reducao da presenca do produto durante blocos densos.
- Impacto: a pagina mantem a entrada premium e cinematografica, mas prioriza legibilidade e conforto de navegacao, preservando `file:///`, `noindex`, sitemap e `robots.txt` inalterados.
## 2026-05-22 - Ritmo de scroll Obsidian
- Mudanca: o motor de rolagem de `obsidian/index.html` foi recalibrado com area total mais curta, intro mais rapida e cenas em faixas sequenciais para reduzir sobreposicoes entre textos, produto, cards e manifesto.
- Impacto: a experiencia animada responde com menos gestos de scroll e fica mais legivel, mantendo a abertura logo-only, `file:///`, `noindex`, sitemap e `robots.txt` inalterados.
## 2026-05-22 - Intro preta logo-only Obsidian
- Mudanca: a abertura de `obsidian/index.html` passou a carregar primeiro uma tela preta com apenas o logo centralizado, reservando o primeiro trecho de rolagem para revelar menu, fundos, produto, textos, indice e progresso da composicao cinematografica.
- Impacto: reforca a entrada premium da pagina Obsidian e impede que conteudo, menu ou fallback aparecam antes da interacao inicial, mantendo `file:///`, `noindex`, sitemap e `robots.txt` inalterados.
## 2026-05-22 - Rework Obsidian com slider cinematografico
- Mudanca: a experiencia `obsidian/index.html` foi reformulada em uma estrutura unica de scroll-slider com `section.motion-page`, palco sticky, cenas `data-frame`, produto flutuante, backgrounds em crossfade, indice de cena e trilha de progresso controlados por JavaScript leve.
- Impacto: a pagina se afasta de vez do modelo NeuroFlash e passa a se comportar como uma composicao animada inspirada por templates cinematograficos tipo Slider Revolution, mantendo `file:///`, `noindex`, sitemap e `robots.txt` inalterados.
## 2026-05-22 - Obsidian com motor cinematografico de scroll
- Mudanca: a pagina `obsidian/index.html` deixou o modelo de secoes com revelacao pontual e passou a usar uma composicao cinematografica presa na tela, com cenas sobrepostas, fundos em crossfade, produto em movimento, paineis e tipografia dirigidos por progresso global de rolagem.
- Impacto: aproxima a experiencia Obsidian de uma landing filmica controlada pelo scroll, bem diferente da estrutura NeuroFlash, sem adicionar bibliotecas, build step, indexacao publica, sitemap ou mudancas em `robots.txt`.
## 2026-05-22 - Animacoes de montagem no scroll Obsidian
- Mudanca: a pagina `obsidian/index.html` recebeu marcadores de revelacao, montagem progressiva por secao, stagger de cards e itens, parallax leve em imagens, microtransicoes na hero sticky e fallback de movimento reduzido.
- Impacto: a experiencia Obsidian passa a se construir conforme a rolagem sem adicionar bibliotecas ou build step, preservando compatibilidade com `file:///`, `noindex`, sitemap e robots inalterados.
## 2026-05-22 - Pagina unica Obsidian com scroll experimental
- Mudanca: criada `obsidian/index.html` como pagina unica conectada pelo card Obsidian da Home Essentia Health, com CSS e JavaScript proprios, assets locais, scroll sticky experimental, lista VIP por e-mail, metadados sociais e `noindex, follow`.
- Impacto: Obsidian passa a ter uma experiencia navegavel dentro do site sem entrar no `sitemap.xml` e sem alterar `robots.txt`, preservando a publicacao indexavel apenas para Home Essentia Health e NeuroFlash enquanto a indexacao final do novo produto fica pendente.
## 2026-05-22 - Estrutura inicial do produto Obsidian
- Mudanca: criada a pasta `obsidian/` como reserva estrutural vazia para o futuro produto Obsidian, planejado inicialmente como pagina unica, sem subpaginas, arquivos publicos funcionais, copy, metadados, sitemap ou links publicos.
- Impacto: prepara o projeto para a construcao futura do novo produto sem publicar conteudo nao aprovado e sem alterar a Home Essentia Health, `sitemap.xml`, `robots.txt` ou a estrutura publicada do NeuroFlash.
## 2026-05-22 - Ajustes finais da Home Essentia
- Mudanca: a Home Essentia Health recebeu Obsidian no segundo card do carrossel, logo do header apontando para `./index.html`, mapa do site da raiz limitado a `Home`, copyright institucional sem NeuroFlash, remocao das linhas verticais laterais e linha inferior do rodape em largura total.
- Impacto: documenta o estado final dos refinamentos visuais e de navegacao da raiz sem alterar URLs publicas, SEO tecnico ou a estrutura do subsite NeuroFlash.
## 2026-05-22 - Rodape Essentia pelo modelo NeuroFlash
- Mudanca: o rodape da Home Essentia Health passou a reaplicar a mecanica dimensional real do rodape NeuroFlash, incluindo margem superior, padding base e desktop, escala de logo, icones, textos e barra inferior.
- Impacto: aproxima novamente o fechamento da raiz ao produto sem copiar a paleta escura do NeuroFlash, mantendo fundo transparente, copy publica, navegacao e SEO preservados.
## 2026-05-22 - Ajuste fino de margens e rodape
- Mudanca: a Home Essentia Health passou a usar casca externa full-width com regua interna de `1180px`, gutters equivalentes aos do NeuroFlash e rodape com o mesmo grid, tamanho de logo, escala de fontes e padding do rodape do produto.
- Impacto: reduz a discrepancia de margens e enquadramento entre a raiz Essentia Health e `neuroflash/index.html`, mantendo paleta clara, fundo transparente no rodape, SEO, navegacao e copy publica preservados.
## 2026-05-22 - Refatoracao conservadora da Home Essentia Health
- Mudanca: a Home Essentia Health ganhou uma casca clara `site-shell`, largura de referencia de `1180px`, gutters internos compartilhados e linhas laterais sutis, alinhando header, secoes, carrossel, missao e rodape na mesma regua visual.
- Impacto: aproxima a raiz do padrao estrutural do NeuroFlash sem redesenhar a identidade clara da Essentia Health, reduzindo excecoes de largura e mantendo copy, SEO e navegacao publica preservados.
## 2026-05-22 - Rodape transparente na Home Essentia Health
- Mudanca: o rodape completo da Home Essentia Health passou a usar fundo transparente, com cores ajustadas para leitura sobre o fundo claro da pagina.
- Impacto: preserva a composicao espelhada do rodape NeuroFlash, mas reduz o peso visual do bloco na pagina institucional da Essentia Health.
## 2026-05-22 - Rodape completo na Home Essentia Health
- Mudanca: o rodape simples da Home Essentia Health foi substituido por composicao espelhada do rodape NeuroFlash, com logo, mapa do site, suporte/contato, dados institucionais e barra inferior.
- Impacto: a raiz passa a ter fechamento institucional consistente com o subsite NeuroFlash, preservando caminhos locais para assets e navegacao.
## 2026-05-22 - Migracao Essentia Health para raiz
- Mudanca: a landing institucional Essentia Health foi promovida para `index.html`, e a experiencia NeuroFlash foi movida para `neuroflash/`, com Home, FAQ, Quem Somos, assets, includes e estilos do produto dentro do novo subsite.
- Impacto: o dominio `https://essentiahealth.com.br/` passa a representar a empresa, enquanto o produto NeuroFlash passa a responder em `https://essentiahealth.com.br/neuroflash/`; sitemap, canonical, Open Graph, Twitter cards, JSON-LD e documentacao interna foram sincronizados com a nova estrutura.
## 2026-05-21 - Referencia de imagens da pagina Essentia Health
- Mudanca: o `site_image_guide.html` passou a documentar os tamanhos e proporcoes recomendados para `neuroflash.jpg` e `em-breve.jpg` na pagina isolada `essentia-health/`.
- Impacto: futuras trocas de imagens do carrossel passam a ter referencia tecnica de `1500 x 2000 px`, proporcao `3:4` e `aspect-ratio: 3 / 4`, sem alterar arquivos publicos do site.
## 2026-05-21 - Troca do packshot NeuroFlash
- Mudanca: o primeiro card do carrossel da pagina isolada `essentia-health/` passou a usar `essentia-health/assets/images/neuroflash.jpg` como packshot.
- Impacto: substitui a referencia anterior ao asset da Home por uma imagem local da pagina isolada, sem alterar cards restantes, sitemap, navegacao ou logica JavaScript.
## 2026-05-21 - Remocao do zoom do packshot
- Mudanca: o zoom aplicado as imagens do carrossel da pagina isolada `essentia-health/` foi removido para validar o enquadramento natural do packshot em proporcao vertical.
- Impacto: permite revisar a imagem nova sem transformacao de escala, mantendo cards, sitemap, navegacao e logica JavaScript inalterados.
## 2026-05-21 - Alinhamento mobile do rotulo Produtos
- Mudanca: o rotulo `Produtos` da pagina isolada `essentia-health/` passou a usar a mesma largura do carrossel tambem no breakpoint mobile.
- Impacto: corrige o alinhamento responsivo do rotulo sem alterar cards, imagens, sitemap, navegacao ou logica JavaScript.
## 2026-05-21 - Alinhamento do rotulo Produtos
- Mudanca: o rotulo `Produtos` da pagina isolada `essentia-health/` passou a usar a mesma largura e centralizacao do carrossel.
- Impacto: alinha o inicio do rotulo ao mockup do carrossel sem alterar cards, imagens, sitemap, navegacao ou logica JavaScript.
## 2026-05-21 - Cards em breve no carrossel
- Mudanca: os tres cards restantes do carrossel da pagina isolada `essentia-health/` foram convertidos para mockups de imagem usando `essentia-health/assets/images/em-breve.jpg`.
- Impacto: o carrossel passa a ter um packshot no primeiro card e tres cards visuais de produto em breve, mantendo a mesma configuracao visual dos mockups e sem alterar sitemap, navegacao ou logica JavaScript.
## 2026-05-21 - Zoom leve no packshot
- Mudanca: a imagem do primeiro card do carrossel da pagina isolada `essentia-health/` recebeu zoom centralizado reforcado para eliminar as faixas laterais restantes do mockup.
- Impacto: melhora o enquadramento do packshot mantendo o card sem padding interno, sem alterar os demais placeholders, sitemap, navegacao ou logica JavaScript.
## 2026-05-21 - Packshot sem borda interna
- Mudanca: o primeiro card do carrossel da pagina isolada `essentia-health/` recebeu estilo especifico para remover padding e fundo interno, preservando a imagem inteira sem zoom.
- Impacto: elimina a moldura branca interna do packshot sem alterar os demais placeholders, sitemap, navegacao ou logica JavaScript.
## 2026-05-21 - Packshot preenchendo o mockup
- Mudanca: a imagem do primeiro card do carrossel da pagina isolada `essentia-health/` passou a preencher o mockup com recorte centralizado.
- Impacto: remove as faixas vazias ao redor do packshot sem alterar HTML, textos, slides, sitemap, navegacao ou logica JavaScript.
## 2026-05-21 - Packshot no primeiro card do carrossel
- Mudanca: o primeiro placeholder do carrossel de produtos da pagina isolada `essentia-health/` teve o texto substituido pela imagem `home/product-packshot2.jpg`.
- Impacto: aproxima o mockup de uma vitrine visual de produto sem alterar a logica do carrossel, sitemap, navegacao ou demais paginas publicas.
## 2026-05-21 - Proporcao vertical 4:3 nos cards de produto
- Mudanca: os placeholders de produto da pagina isolada `essentia-health/` passaram a usar proporcao visual vertical `4:3`, aplicada aos cards para manter leitura consistente entre desktop e mobile.
- Impacto: reforca a leitura de mockup de produto sem alterar HTML, textos, slides, sitemap, navegacao ou logica JavaScript.
## 2026-05-21 - Compactacao da base da secao Produtos
- Mudanca: o espacamento inferior da secao `Produtos` da pagina isolada `essentia-health/` foi reduzido para terminar mais proximo do mockup do carrossel.
- Impacto: compacta a continuidade visual entre produtos e sobre a empresa sem alterar HTML, textos, cards, sitemap, navegacao ou logica JavaScript.
## 2026-05-21 - Aproximacao da secao Sobre do carrossel
- Mudanca: o espacamento superior da secao `Sobre a empresa` da pagina isolada `essentia-health/` foi reduzido para espelhar a proximidade entre o logo e a secao `Produtos`.
- Impacto: melhora a continuidade visual entre carrossel, texto institucional e missao sem alterar textos, HTML estrutural, sitemap, navegacao ou logica JavaScript.
## 2026-05-21 - Aproximacao da secao Produtos do logo
- Mudanca: o espacamento superior da secao `Produtos` da pagina isolada `essentia-health/` foi reduzido para aproximar o rotulo do corte inferior do logo principal.
- Impacto: melhora a continuidade visual entre a identidade Essentia Health e o carrossel de produtos sem alterar logo, cards, textos, sitemap, navegacao ou logica JavaScript.
## 2026-05-21 - Ajuste do cabecalho do carrossel Essentia Health
- Mudanca: o titulo grande da secao de produtos da pagina isolada `essentia-health/` foi removido, mantendo apenas o rotulo compacto "Produtos" mais proximo do carrossel.
- Impacto: reduz a distancia visual entre o rotulo da secao e o mockup do carrossel sem alterar cards, textos dos placeholders, sitemap, navegacao ou logica JavaScript.
## 2026-05-21 - Rolagem circular no carrossel Essentia Health
- Mudanca: o carrossel de produtos da pagina isolada `essentia-health/` passou a navegar de forma circular pelas setas anterior e proximo, sem autoplay.
- Impacto: o usuario pode continuar clicando em uma unica direcao e voltar ao inicio ou ao ultimo grupo sem encontrar uma seta bloqueada quando houver mais de um grupo disponivel.
## 2026-05-21 - Contornos no carrossel Essentia Health
- Mudanca: o carrossel de produtos da pagina isolada `essentia-health/` recebeu moldura no conjunto, contorno interno na janela visivel e bordas nos placeholders de produto.
- Impacto: reforca visualmente que a area e um carrossel interativo sem alterar textos, links, sitemap, navegacao ou a logica de exibicao dos cards.
## 2026-05-21 - Reordenacao da pagina Essentia Health
- Mudanca: a secao `Sobre a empresa` da pagina isolada `essentia-health/` foi movida para baixo do carrossel de produtos, antes da secao `Missao`.
- Impacto: a pagina passa a apresentar primeiro a identidade visual e o carrossel de linhas de produto, preservando integralmente o texto institucional e mantendo a pagina isolada do restante do site.
## 2026-05-21 - Carrossel manual na pagina Essentia Health
- Mudanca: a secao de produtos da pagina isolada `essentia-health/` foi transformada em carrossel manual com quatro placeholders e exibicao responsiva de tres, dois ou um card por vez.
- Impacto: melhora a apresentacao dos placeholders de produtos sem autoplay e sem conectar a pagina ao menu, rodape compartilhado, sitemap ou demais paginas publicas.
## 2026-05-21 - Importacao isolada da pagina Essentia Health
- Mudanca: a landing institucional do projeto `D:\Documentos\Projetos\EssentiaHealth` foi importada para `essentia-health/`, junto com seu CSS e assets locais.
- Impacto: a pagina fica disponivel como copia operacional isolada dentro do projeto NeuroFlash, temporariamente com `noindex, follow`, fora do sitemap e sem conexao com menu, rodape compartilhado ou demais paginas publicas.
## 2026-05-21 - SEO com dominio oficial
- Mudanca: o dominio publico final foi registrado como `https://essentiahealth.com.br/`, com canonical, `og:url`, imagens sociais absolutas, URLs tecnicas no JSON-LD, `robots.txt` e `sitemap.xml`.
- Impacto: libera os artefatos tecnicos de indexacao que estavam pendentes enquanto o dominio publico nao existia, sem alterar copy publica, CTAs, FAQ, claims ou canais de compra.
## 2026-05-21 - Atualizacao do endereco oficial no rodape
- Mudanca: o endereco ficticio do rodape compartilhado foi substituido pelo endereco oficial `Av. Papa Joao Paulo II, 650, apto. 44 - Urbanova VI, Sao Jose dos Campos - SP`.
- Impacto: o bloco institucional passa a exibir o endereco oficial informado, mantendo telefone, WhatsApp, Instagram, horarios e politicas como pendencias ate confirmacao dos dados reais.
## 2026-05-21 - Atualizacao do CNPJ oficial no rodape
- Mudanca: o CNPJ ficticio do rodape compartilhado foi substituido pelo CNPJ oficial `66.907.199/0001-44`.
- Impacto: o bloco institucional passa a exibir o identificador oficial informado, mantendo telefone, WhatsApp, endereco, horarios e politicas como pendencias ate confirmacao dos dados reais.
## 2026-05-12 - Verificacao do Google Search Console
- Mudanca: adicionado `googlef8f43337a075e3ac.html` na raiz do projeto como arquivo tecnico de verificacao do Google Search Console/Search Engine.
- Impacto: permite validar a propriedade do site no Google sem alterar textos publicos, navegacao, layout ou conteudo editorial.
## 2026-05-12 - Bloqueio de edicao de texto publico
- Mudanca: a documentacao interna passou a registrar que todo texto visivel ao publico depende de curadoria legal externa e nao pode ser alterado em refatoracoes, atualizacoes, otimizacoes, SEO, acessibilidade, performance ou manutencao sem aprovacao previa.
- Impacto: agentes e mantenedores devem limitar trabalhos tecnicos a estrutura, comportamento, estilos e assets quando nao houver aprovacao legal, deixando qualquer mudanca textual publica como pendencia formal.
## 2026-05-12 - Documentacao HTML interna
- Mudanca: a documentacao oficial foi convertida de Markdown para HTML interno em `documentacao/interno/`, com layout proprio de leitura, CSS isolado do site publico e referencias documentais atualizadas para `.html`.
- Impacto: melhora a leitura humana dos registros do projeto sem expor a documentacao na navegacao publica do site e deixa o historico em ordem decrescente, com as atualizacoes mais recentes no topo.
## 2026-05-11 - Logo institucional no rodape compartilhado
- Mudanca: o texto `Essentia Health` do rodape compartilhado foi substituido por imagem institucional em `shared/essentia-health-logo.png`, sem texto descritivo abaixo e com estilos dedicados para controlar proporcao e ocupacao do card.
- Impacto: o rodape de Home, Quem Somos e FAQ passa a exibir a marca institucional com maior fidelidade visual, mantendo o include compartilhado como ponto unico de manutencao.
## 2026-05-11 - Atualizacao de orientacoes de uso e advertencias da FAQ
- Mudanca: a FAQ recebeu textos revisados para modo de uso, consumo das 3 capsulas em dose unica, contraindicações e advertencias do NeuroFlash.
- Impacto: deixou as orientacoes de uso e seguranca mais completas e explicitas para o usuario, mantendo o conteudo dentro da estrutura estatica atual do site.
## 2026-05-11 - Conversao de documentos texto para Markdown
- Mudanca: `coisas_a_fazer.html` e `site_image_guide.html` passaram a substituir os antigos arquivos de texto puro, com referencias internas atualizadas para HTML.
- Impacto: manteve o conteudo tecnico e a fila de pendencias em formato editavel e versionavel, reduzindo duplicidade entre documentos `.txt` e `.html`.
## 2026-05-11 - Guia de uso do Canva para criativos
- Mudanca: criado `canva_criativos_guide.html` com diretrizes para o Codex usar Canva na producao de criativos, imagens de apoio e materiais comerciais alinhados a identidade visual, assets, copy e restricoes do NeuroFlash.
- Impacto: documenta o fluxo recomendado de geracao, revisao e salvamento de pecas no Canva, reduzindo risco de ingles indesejado, acentuacao quebrada, dados inventados ou promessas inadequadas em criativos futuros.
## 2026-05-10 - Ajustes visuais da pagina Quem Somos
- Mudanca: a pagina Quem Somos recebeu ajustes visuais no marcador colorido do titulo em desktop, no alinhamento e espacamento do bloco contextual da FAQ e na ordem editorial, com o CTA de FAQ posicionado abaixo da imagem dos fundadores.
- Impacto: melhorou a hierarquia visual da pagina e deixou o fluxo de leitura narrativa, foto e CTA mais consistente entre desktop e mobile.
## 2026-05-10 - Ajustes finos de SEO on-page sem dependencia de dominio
- Mudanca: FAQ e Quem Somos deixaram de se apresentar como `article` no Open Graph, as paginas com imagem social ganharam metadados de tipo e dimensoes, a Home trocou o CTA hero sem destino por links internos reais e a pagina Quem Somos passou a incluir um link contextual para a FAQ.
- Impacto: melhorou a coerencia semantica dos compartilhamentos, fortaleceu a malha interna de navegacao e removeu placeholders de CTA sem antecipar `canonical`, `og:url`, `robots.txt` ou `sitemap.xml`.
## 2026-05-10 - Otimizacao do caminho critico e da hidratação da Home
- Mudanca: as paginas publicas passaram a pedir apenas os pesos de fonte realmente usados, os icones do rodape receberam dimensoes explicitas para reduzir pequenos saltos de layout e o carrossel desktop da Hero passou a registrar `hero-focus2.jpg` e `hero-focus3.jpg` apenas apos a primeira pintura util, com hidratação adiada e fallback compativel.
- Impacto: reduziu o custo inicial de rede e trabalho imediato de renderizacao sem mexer nos assets nem na arquitetura estatica, preservando a compatibilidade com `file:///` e o comportamento publico do site.
## 2026-05-10 - Consolidacao da camada visual compartilhada
- Mudanca: `shared/styles.css` passou a concentrar primitivas nomeadas de secao, painel, midia e tipografia compartilhada, enquanto Home, FAQ e Quem Somos foram alinhadas para consumir essas classes de forma mais explicita e a hero-card da Home passou a reutilizar a base de painel compartilhado sem alterar o comportamento publico.
- Impacto: reduziu densidade e repeticao residual entre CSS local e compartilhado, deixou a fronteira de ownership mais clara e manteve a arquitetura estatica do site com menor custo de manutencao.
## 2026-05-10 - Carrossel automatico na Hero
- Mudanca: a imagem principal da Hero desktop virou um carrossel com `hero-focus.jpg`, `hero-focus2.jpg` e `hero-focus3.jpg`, com troca automatica, setas laterais, indicadores inferiores e controle dedicado em `home/hero-carousel.js`, respeitando `prefers-reduced-motion`.
- Impacto: ampliou a variacao visual do destaque principal sem mexer no layout mobile da Home, mantendo a arquitetura estatica do site com uma excecao controlada de JavaScript proprio para a Hero.
## 2026-05-10 - Guia geral de imagens do site
- Mudanca: o guia tecnico de imagens da Home foi renomeado para `site_image_guide.html` e expandido para cobrir Home, Quem Somos, FAQ, background compartilhado e icones do rodape, com dimensoes reais, dimensoes declaradas e orientacoes de substituicao.
- Impacto: a documentacao de assets ficou alinhada ao site multi-page atual e evita manter informacoes de mockups limitadas apenas a Home.
## 2026-05-10 - Refinos visuais da Home e rodape
- Mudanca: o titulo principal da Home passou a separar a cor de `Neuro` e `Flash`, o bloco de destaques ganhou respiro superior mais equilibrado, a imagem principal do hero foi substituida preservando `home/hero-focus.jpg` e o rodape compartilhado foi reequilibrado com fonte maior, espacamento controlado, alinhamento de topo no grid, titulo `Essentia Health` todo branco, sem o subgrupo legal e com icones PNG compartilhados nos contatos.
- Impacto: melhorou a leitura visual da Home e a legibilidade do rodape sem voltar ao excesso de area vazia nem alterar a arquitetura estatica ou a navegacao compartilhada.
## 2026-05-10 - Reestruturacao da Home canonica e reforco de SEO
- Mudanca: a Home passou a ser servida pela raiz em `index.html`, `home/index.html` virou fallback tecnico com `noindex`, a navegacao compartilhada passou a apontar para a raiz e as paginas publicas ganharam Open Graph/Twitter mais completos, JSON-LD minimo por tipo de pagina e copy estrutural da Home mais alinhada a `pt-BR`.
- Impacto: fortaleceu a arquitetura de indexacao do site, melhorou a coerencia entre snippet, compartilhamento social e semantica on-page e preparou a base para `canonical`, `og:url`, `robots.txt` e `sitemap.xml` assim que o dominio publico for definido.
## 2026-05-10 - Ajustes de performance em carregamento e navegacao
- Mudanca: a Home passou a evitar o download da hero desktop no mobile, o CSS compartilhado ganhou um perfil de performance mobile com menos efeitos caros e blocos estaticos abaixo da dobra passaram a usar adiamento de renderizacao.
- Impacto: reduziu custo de rede desnecessario no mobile e aliviou pintura/composicao durante a navegacao, preservando o site estatico e a compatibilidade com `file:///`.
## 2026-05-10 - Refatoracao conservadora para limpeza e clareza
- Mudanca: a camada compartilhada ganhou primitivas de secao interna, o `shared/includes.js` foi reorganizado com helpers menores, a Home passou a usar utilitarios locais de midia e o acordeao da FAQ deixou de repetir consultas e indices durante a inicializacao.
- Impacto: reduziu duplicacao real de CSS e JavaScript, deixou a manutencao mais clara e preservou o comportamento publico estatico e compativel com `file:///`.
## 2026-05-10 - Normalizacao do nome institucional
- Mudanca: o nome institucional e os identificadores temporarios exibidos no site foram alinhados para `Essentia Health`, incluindo rodape compartilhado, e-mail, Instagram e referencia historica anterior no changelog.
- Impacto: removeu inconsistencias publicas de naming institucional, deixando a identidade temporaria coerente em todo o projeto.
## 2026-05-09 - Rodape institucional compartilhado
- Mudanca: o rodape simples foi substituido por um componente compartilhado com mini mapa do site, contatos temporarios, dados ficticios da Essentia Health e bloco legal.
- Impacto: melhorou a navegacao inferior e preparou espaco institucional para informacoes reais da empresa sem duplicar HTML nas paginas.
## 2026-05-09 - Pagina Quem Somos
- Mudanca: criada a pagina institucional `quem-somos/`, com narrativa dos fundadores, imagem dedicada, CSS local e link no menu compartilhado.
- Impacto: ampliou o site para tres paginas oficiais mantendo arquitetura estatica, includes compartilhados, visual consistente e compatibilidade com `file:///`.
## 2026-05-09 - Base SEO conservadora
- Mudanca: foram adicionados metadados por pagina, JSON-LD basico sem URLs finais, H1 semantico na FAQ, lista de ingredientes em HTML semantico e textos alternativos mais descritivos nas imagens da Home.
- Impacto: melhorou a leitura do site por buscadores e acessibilidade sem criar promessas comerciais ou dependencias de dominio ainda nao definido.
## 2026-05-09 - Lazy loading nativo de imagens
- Mudanca: as imagens abaixo da dobra da Home passaram a usar `loading="lazy"` e `decoding="async"`, as imagens criticas do topo foram priorizadas e o script proprio da FAQ passou a carregar com `defer`.
- Impacto: melhorou o carregamento percebido em desktop e mobile sem adicionar build step, framework ou JavaScript customizado para imagens.
## 2026-05-09 - Ajuste de transparencia mobile
- Mudanca: a opacidade da `page-shell`, do overlay compartilhado e dos paineis foi reduzida no mobile para revelar mais o background entre os objetos.
- Impacto: melhorou a presenca visual do fundo em telas pequenas sem alterar a camada desktop ja validada.
## 2026-05-09 - Ajuste de visibilidade do background desktop
- Mudanca: a opacidade da `page-shell` e do overlay compartilhado foi reduzida no desktop para revelar o background fixo aplicado ao `body`.
- Impacto: restaurou a presenca visual do fundo em telas largas sem alterar a camada mobile mais escura.
## 2026-05-09 - Fundo fixo com efeito parallax
- Mudanca: o background compartilhado passou a ser aplicado no `body` com `background-attachment: fixed`, enquanto a `page-shell` ficou translucida e rola com o conteudo.
- Impacto: criou o efeito parallax simples em Home e FAQ, mantendo o fundo parado e os elementos de frente em movimento.
## 2026-05-09 - Correcao do contorno superior mobile
- Mudanca: o `border-top` da `page-shell` foi promovido para a regra base de `shared/styles.css`, removendo a dependencia exclusiva do bloco desktop.
- Impacto: restaurou a linha de contorno superior no mobile sem alterar o visual desktop.
## 2026-05-09 - Correcao do menu fixo e CTA da Home
- Mudanca: o comportamento sticky do menu superior foi movido para o wrapper `data-shared-header`, e o CTA `COMPRAR AGORA` da Home foi deixado sem link enquanto a compra nao estiver liberada.
- Impacto: restaurou a navegacao sempre visivel durante a rolagem e evitou abertura indevida de e-mail no CTA principal da Home.
## 2026-05-09 - Centralizacao de arquivos compartilhados
- Mudanca: `shared.css` foi movido para `shared/styles.css` e `background-neuroflash.jpg` foi movido para `shared/background-neuroflash.jpg`, com Home e FAQ atualizadas para os novos caminhos.
- Impacto: deixou a pasta `shared/` como ponto unico para estilos, scripts e assets compartilhados, reduzindo arquivos soltos na raiz do projeto.
## 2026-05-09 - Centralizacao da documentacao
- Mudanca: a pasta `logs/` foi renomeada para `documentacao/`, o guia tecnico de imagens da Home foi movido para a pasta documental e foi criado `coisas_a_fazer.html` para registrar tarefas futuras em Markdown simples.
- Impacto: centralizou a documentacao permanente do projeto, deixou a Home focada em pagina e assets e criou uma fila leve de pendencias legivel por humanos e agentes de IA.
## 2026-05-09 - Refatoracao compartilhada sem build
- Mudanca: header e footer foram extraidos para `shared/includes.js`, CTAs sem destino foram substituidos por contato por e-mail, o acordeao da FAQ ganhou relacao ARIA mais clara, duplicatas do background foram removidas, o asset `game-competicao.jpg` passou a usar nome ASCII e a documentacao foi reescrita em texto UTF-8 limpo.
- Impacto: reduziu duplicacao entre Home e FAQ, preservou compatibilidade com GitHub Pages e `file:///`, diminuiu risco de links mortos e deixou a manutencao de componentes e assets mais previsivel.
## 2026-05-08 - Consolidacao do topo e da navegacao entre Home e FAQ
- Mudanca: unificado o header das paginas, alinhados branding, menu, contornos e linhas estruturais, corrigindo diferencas entre mobile e desktop e removendo elementos duplicados na FAQ.
- Impacto: reduziu inconsistencias visuais entre as paginas oficiais e estabilizou o comportamento do topo em diferentes larguras de tela.
## 2026-05-08 - Refatoracao da base compartilhada de estilo e comportamento
- Mudanca: consolidada a base comum em `shared.css`, padronizados componentes visuais compartilhados, simplificado o JavaScript do acordeao da FAQ e centralizado o background oficial em `background-neuroflash.jpg` na raiz.
- Impacto: reduziu duplicacao entre Home e FAQ, deixou ownership mais claro entre estilos compartilhados e locais e diminuiu o custo de manutencao da interface.
## 2026-05-08 - Compatibilidade local e compartilhamento do aviso legal
- Mudanca: o aviso legal foi extraido para uma estrategia compartilhada via `shared/includes.js`, primeiro como include client-side e depois ajustado para injecao direta compativel com `file:///`.
- Impacto: eliminou duplicacao de markup entre Home e FAQ e garantiu funcionamento consistente tanto no GitHub Pages quanto na abertura local no Windows.
## 2026-05-08 - Enxugamento da documentacao arquitetural
- Mudanca: o `site_architecture.html` foi reescrito em formato operacional curto, com correcao de encoding, remocao de repeticoes e consolidacao das informacoes de estrutura, ownership, comportamento e manutencao.
- Impacto: tornou a documentacao mais estavel, rapida de atualizar e menos propensa a erros de edicao ou ruido de codificacao.
## 2026-05-08 - Enxugamento estrutural do changelog
- Mudanca: o proprio `changelog.html` foi consolidado em blocos tematicos curtos, com agrupamento por dia e assunto, remocao de redundancias e padronizacao em portugues UTF-8.
- Impacto: deixou o historico mais facil de consultar, reduziu ruido de microcorrecoes e estabeleceu um formato mais sustentavel para futuras entradas.
## 2026-05-07 - Criacao da documentacao-base e limpeza estrutural inicial
- Mudanca: criados o `changelog.html` e o mapeamento inicial da arquitetura, removidos arquivos legados da raiz e simplificada a estrutura oficial do projeto em torno de `index.html`, `home/` e `faq/`.
- Impacto: estabeleceu uma base documental para evolucao futura e reduziu o risco de manutencao sobre codigo e arquivos que ja nao participavam das paginas oficiais.
## 2026-05-07 - Ajustes visuais da home, da FAQ e do guia tecnico de imagens
- Mudanca: refinados topo, packshot, galeria e enquadramentos da home, removida a animacao de abertura da FAQ e criado/ajustado o guia tecnico de imagens para orientar manutencao de imagens.
- Impacto: melhorou a consistencia visual entre mobile e desktop, estabilizou a leitura da embalagem do produto e deixou uma referencia tecnica pratica para futuras trocas de assets.
