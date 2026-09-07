# Arquitetura do site

## Stack e execução

O projeto usa HTML5, CSS3 e JavaScript vanilla. As fontes remotas são Barlow Condensed e Inter, carregadas via Google Fonts. Não se aplica: framework, Node.js, build, backend, banco de dados, variáveis de ambiente e CI/CD.

A hospedagem-alvo é GitHub Pages, com publicação manual e o domínio configurado por `CNAME`. As páginas devem continuar compatíveis com hospedagem estática e abertura local.

## Rotas públicas

| Área | Rota | Função |
| --- | --- | --- |
| Essentia Health | `/` | Institucional e entrada para as marcas |
| NeuroFlash | `/neuroflash/` | Apresentação do produto |
| NeuroFlash | `/neuroflash/quem-somos/` | Missão e história |
| NeuroFlash | `/neuroflash/faq/` | Ingredientes, uso e segurança |
| Obsidian | `/obsidian/` | Apresentação do produto |
| Obsidian | `/obsidian/nossa-missao/` | Missão da marca |

`neuroflash/home/` é uma rota legada que redireciona para `/neuroflash/`.

## Organização e comportamento

- `shared/` centraliza header, rodapé, logo e ícones institucionais.
- `neuroflash/shared/` concentra estilos, header e aviso legal específicos do NeuroFlash.
- Carrosséis são implementados em `carousel.js`, `neuroflash/home/hero-carousel.js` e `obsidian/script.js`; a FAQ usa `neuroflash/faq/script.js`.
- Os scripts compartilhados devem manter escopo isolado para evitar colisões globais.
- `robots.txt`, `sitemap.xml` e metadados por página sustentam a descoberta orgânica.

## Refatoração de execução — 2026-09-07

- Os scripts de página e compartilhados executam em escopo isolado. `shared/header-utils.js` mantém apenas normalização do caminho e renderização de includes, com consumidores reais no NeuroFlash.
- O carrossel institucional mede o layout quando seu container muda de tamanho, agrupa atualizações em `requestAnimationFrame` e preserva o `tabindex` original dos itens.
- A hero NeuroFlash cria os slides adicionais no desktop, mas só atribui a URL da imagem quando o slide é solicitado. Aguarda carregamento e decodificação antes da transição. Autoplay pausa por mouse, foco, aba oculta, imagem fora da viewport, mobile e redução de movimento; mudanças de contexto cancelam transições pendentes.
- O Obsidian inicia no topo quando não há hash, usa a mesma progressão de fade da cópia visual aprovada e mede a posição atual dos blocos em cada atualização visual. Eventos de rolagem e resize são agrupados por quadro; a preferência por redução de movimento apresenta o conteúdo sem animação.
- Imagens de preparo e formatos Obsidian usam carregamento adiado nativo. Imagens de abertura continuam descobertas no HTML.
- A FAQ recalcula a altura do item aberto após resize e carregamento de fontes. Os marcadores vazios de cabeçalho NeuroFlash reservam espaço até o include ser inserido, sem impor altura ao cabeçalho pronto.
- A pasta `neuroflash/home/legado/`, os HTMLs históricos e os assets com finalidade documental ou social permanecem preservados. A limpeza desta rodada removeu apenas `obsidian/assets/obsidian-nome.jpg`, sem consumidores encontrados.
- Evidências, critérios e limites estão em [Refatoração e validação](08-refatoracao-e-validacao.md). As transcrições abaixo descrevem estados históricos; este resumo registra a execução atual.

## Integrações e dados atuais

Há links para e-mail, Instagram e WhatsApp no rodapé. O e-mail e Instagram estão presentes no código; o telefone/WhatsApp exibido é placeholder e não deve ser divulgado como dado oficial. Não há integrações de checkout, analytics, pixels, formulários com processamento ou APIs.


---

## Transcrição histórica: `site_architecture.html`

> Conteúdo transferido do documento HTML histórico em 2026-09-07. A organização foi adequada a Markdown; fatos, datas, prioridades, caminhos, decisões e restrições foram preservados. O arquivo-fonte permanece em `site_architecture.html`.

# Arquitetura do Site Neuroflash
## Visao Geral
O projeto e um site estatico multi-page da Essentia Health, sem backend, sem build e sem pipeline automatizado. NeuroFlash e Obsidian agora sao produtos publicados dentro desse site. O fluxo publico e:
- `index.html` funciona como Home canonica da Essentia Health e pagina principal indexavel
- `neuroflash/index.html` funciona como Home canonica do produto NeuroFlash
- `neuroflash/quem-somos/index.html` apresenta a pagina Nossa Missao do NeuroFlash, servida publicamente como `/neuroflash/quem-somos/`
- `neuroflash/faq/index.html` cobre duvidas, protocolos e alertas complementares do NeuroFlash
- `obsidian/index.html` apresenta a Home estatica do produto Obsidian, conectada pelo card e pelo rodape da Home Essentia Health, indexavel e incluida no sitemap
- `obsidian/nossa-missao/index.html` apresenta a pagina Nossa Missao do Obsidian, indexavel e incluida no sitemap
Regras centrais:
- hospedagem-alvo: GitHub Pages
- dominio publico oficial: `https://essentiahealth.com.br/`
- compatibilidade local: as paginas devem funcionar preferencialmente por servidor local; URLs publicas devem usar caminhos limpos com barra final em vez de expor `index.html`
- curadoria legal externa: todo texto visivel ao publico e bloqueado para edicao interna; nenhuma refatoracao, atualizacao, otimizacao, ajuste de SEO, acessibilidade, performance ou manutencao pode alterar copy, labels, CTAs, metadados textuais visiveis em compartilhamento, avisos, FAQ, conteudo institucional ou qualquer texto exibido ao usuario sem aprovacao legal externa previa
- padrao operacional de escrita: nomes de arquivos, pastas, referencias tecnicas e identificadores internos devem usar ASCII minusculo sempre que a plataforma permitir; textos publicos devem renderizar com acentuacao correta e caixa da copy preservada
- base visual da Home Essentia Health: `styles.css`
- logica interativa da Home Essentia Health: `carousel.js`
- infraestrutura global de header: `shared/header-utils.js` e `shared/header.css`, sem unificar visualmente os headers dos produtos
- rodape global do site: `shared/footer.js`, `shared/footer.css`, `shared/essentia-health-logo.png` e `shared/icons/`
- base visual compartilhada do NeuroFlash: `neuroflash/shared/styles.css`
- componentes compartilhados do NeuroFlash: `neuroflash/shared/includes.js` para header e aviso legal do produto
- logicas interativas do NeuroFlash: `neuroflash/faq/script.js` e `neuroflash/home/hero-carousel.js`
- fundo canonico compartilhado do NeuroFlash: `neuroflash/shared/background-neuroflash.jpg`, aplicado no `body` com comportamento fixo
- estrategia SEO atual: Home Essentia Health na raiz, NeuroFlash em `/neuroflash/`, Obsidian em `/obsidian/`, metadados por pagina, canonical, Open Graph/Twitter completos com URLs absolutas, headings semanticos, alt text descritivo, JSON-LD conservador e arquivos `robots.txt`/`sitemap.xml`
- trilha oficial de mudancas: `changelog.html`
- fila simples de tarefas futuras: `coisas_a_fazer.html`
Stack real:
- HTML5
- CSS3
- JavaScript vanilla
- Google Fonts (`Barlow Condensed` e `Inter`, carregadas com pesos realmente usados e `display=swap`)
O projeto nao usa Node.js, framework frontend, backend, build step, CI/CD, banco de dados ou variaveis de ambiente.
## Estrutura Atual
- `index.html`: Home canonica da Essentia Health, indexavel e servida a partir da raiz.
- `googlef8f43337a075e3ac.html`: arquivo tecnico de verificacao do Google Search Console/Search Engine, mantido na raiz para validacao de propriedade; nao faz parte da navegacao publica nem do conteudo editorial do site.
- `robots.txt`: arquivo tecnico de orientacao para crawlers, com referencia para o sitemap absoluto.
- `sitemap.xml`: mapa XML com Home Essentia Health, paginas oficiais do NeuroFlash sob `/neuroflash/` e paginas oficiais Obsidian sob `/obsidian/`.
- `assets/`: imagens da Home Essentia Health, incluindo logo, marca e cards de produtos.
- `shared/`: camada compartilhada de site inteiro, com infraestrutura neutra de header, rodape global, logo institucional do rodape e icones de contato.
- `styles.css`: estilos da Home Essentia Health.
- `carousel.js`: carrossel manual de produtos da Home Essentia Health.
- `neuroflash/`: subsite do produto NeuroFlash, com Home, Nossa Missao, FAQ, assets, estilos compartilhados e scripts do produto.
- `obsidian/`: conjunto publico do produto Obsidian, com Home, Nossa Missao, CSS, JavaScript e assets proprios; conectado pela Home Essentia Health, indexavel e incluido no `sitemap.xml`.
- `documentacao/interno/`: documentacao permanente, historico, arquitetura, guia tecnico de imagens e lista de tarefas futuras.
Ownership por area:
- `index.html` + `styles.css` + `carousel.js` + `assets/images/`: Home Essentia Health, logo institucional, carrossel manual de produtos, entrada visual para `/neuroflash/` e `/obsidian/` e casca clara `site-shell` alinhada ao padrao estrutural do NeuroFlash.
- `shared/header-utils.js` + `shared/header.css`: infraestrutura global de header para helpers de caminho, contexto, renderizacao segura e tokens estruturais neutros; nao define um header visual unico.
- `shared/footer.js` + `shared/footer.css`: rodape global usado por Home, Obsidian e paginas NeuroFlash via `data-shared-footer`, com contexto por produto para variar apenas o mapa do site.
- `shared/essentia-health-logo.png` e `shared/icons/`: assets globais do rodape institucional e contatos.
- `neuroflash/shared/styles.css`: tokens, shell translucida, background fixo, header, superficies, CTA base, warning box e primitivas compartilhadas nomeadas como `section-title`, `surface-section`, `surface-panel` e `media-block`.
- `neuroflash/shared/includes.js`: injeta header e aviso legal em marcadores `data-shared-*`, com helpers para links internos do subsite NeuroFlash.
- `neuroflash/shared/background-neuroflash.jpg`: fundo visual canonico compartilhado por Home, Nossa Missao e FAQ do NeuroFlash, fixo no viewport para efeito parallax.
- `neuroflash/index.html` + `neuroflash/home/styles.css` + `neuroflash/home/hero-carousel.js`: hero, carrossel desktop, grids especificos da Home do NeuroFlash, ajustes de layout da Home e CTA principal.
- `neuroflash/home/index.html`: fallback tecnico interno do produto para a Home canonica do NeuroFlash.
- `neuroflash/quem-somos/index.html` + `neuroflash/quem-somos/styles.css`: narrativa institucional da pagina Nossa Missao e layout editorial do NeuroFlash.
- `neuroflash/faq/index.html` + `neuroflash/faq/styles.css` + `neuroflash/faq/script.js`: acordeao, protocolos e suporte complementar do NeuroFlash.
- `obsidian/index.html` + `obsidian/nossa-missao/index.html` + `obsidian/styles.css` + `obsidian/script.js` + `obsidian/assets/`: conjunto estatico do Obsidian, com Home de abertura logo-only, header proprio com simbolo, wordmark, atalhos Home/Nossa Missao com estado ativo, pagina institucional, hero vertical com copy lateral, secao de preparo, carrossel manual de formatos, manifesto e rodape; nao possui FAQ, lista VIP ou checkout.
- `changelog.html`: historico tecnico.
- `site_architecture.html`: fotografia arquitetural atual e guia de manutencao.
- `site_image_guide.html`: guia tecnico de imagens do site.
- `coisas_a_fazer.html`: lista simples de tarefas futuras para humanos e agentes de IA.
## Componentes E Comportamento
### Includes Compartilhados
`shared/header-utils.js` expõe `window.EssentiaShared.header` com helpers neutros de header:
- normalizacao de prefixos e caminhos
- deteccao simples de contexto da pagina
- renderizacao segura de includes sem vazar helpers para o escopo global
`shared/header.css` concentra tokens e classes estruturais neutras como largura, gutters, z-index, altura base, alinhamento interno, area de marca e area de navegacao. O visual continua dividido entre `styles.css`, `neuroflash/shared/styles.css` e `obsidian/styles.css`; slots sem uso, como uma area global de acoes, devem ficar fora da camada compartilhada ate existir uso real.
Home raiz e NeuroFlash usam a estrutura comum de header, com conteudo interno limitado a `1180px` e gutters compartilhados. Obsidian permanece em CSS proprio porque seu header interage com a intro, `intro-dismissed` e o fade inicial do logo; quando houver comparacao visual entre headers, a referencia deve ser a escala real do NeuroFlash, sem alterar o produto.
Slots estruturais largos como `shared-header__inner` devem ficar em containers neutros, nao diretamente em links, para evitar que areas vazias do header virem clicaveis.
`shared/footer.js` centraliza o rodape global do site:
- renderiza `data-shared-footer` sem `fetch`, build step ou servidor local
- usa `data-footer-context` para escolher o mapa do site de Home, NeuroFlash ou Obsidian
- usa `data-footer-root-prefix` para resolver caminhos em raiz, subpastas e paginas aninhadas
Scripts compartilhados do site devem permanecer encapsulados em escopo proprio, por exemplo via IIFE, para evitar colisao de nomes globais entre includes carregados na mesma pagina.
`neuroflash/shared/includes.js` centraliza os componentes compartilhados exclusivos do produto:
- header compartilhado via `data-shared-header`
- aviso legal via `data-shared-legal-warning`
O script calcula caminhos relativos para `neuroflash/`, `neuroflash/quem-somos/` e `neuroflash/faq/`, preserva `aria-current` na pagina ativa e evita `fetch`, mantendo compatibilidade com GitHub Pages e abertura local no Windows.
### CSS Compartilhado
`neuroflash/shared/styles.css` deve receber apenas regras literalmente compartilhadas entre Home, Nossa Missao e FAQ do NeuroFlash:
- tokens de cor
- shell da pagina
- navegacao e marca
- superficies reutilizaveis (`surface-panel`)
- botoes e links de acao (`cta-button` e `ghost-link`)
- titulos de secao (`section-title`)
- casca compartilhada de secoes internas (`surface-section`)
- blocos de midia reutilizaveis com crop opcional (`media-block`)
- aviso legal
Aliases antigos ou sem chamada, como `content-section`, `content-section-title`, `heading-accent`, `media-frame` e estados desativados sem uso, nao devem voltar para a camada compartilhada sem uma pagina consumidora real.
Regras especificas de layout permanecem em `neuroflash/home/styles.css`, `neuroflash/faq/styles.css` ou `neuroflash/quem-somos/styles.css`. Em especial, `neuroflash/home/styles.css` deve ficar restrito ao hero, carrossel, grids e ajustes que so existem na Home do produto.
### Home NeuroFlash
A Home do produto em `neuroflash/index.html` segue majoritariamente estatica, mas possui JavaScript proprio e pequeno para hidratar o carrossel desktop da hero. O CSS local da Home concentra hero, carrossel, grids e ajustes de layout exclusivos da Home, enquanto `neuroflash/shared/styles.css` fornece as primitivas visuais base e `neuroflash/home/hero-carousel.js` controla troca automatica, setas laterais, indicadores inferiores e pausa por hover/focus apenas na imagem principal da hero.
Assets da Home:
- `clarity-rush.jpg`
- `estudo.jpg`
- `focus-lock.jpg`
- `game-competicao.jpg`
- `hero-focus.jpg`
- `hero-focus2.jpg`
- `hero-focus3.jpg`
- `homem-terno.jpg`
- `mental-ignition.jpg`
- `motocross.jpg`
- `mulher-ufc.jpg`
- `pressure-mode.jpg`
- `product-packshot2.jpg`
- `treino.jpg`
`site_image_guide.html` orienta enquadramento, dimensoes reais, dimensoes recomendadas, proporcoes e convencao de nomes para assets da Home, Nossa Missao, FAQ, background compartilhado e icones do rodape. Novos assets devem usar nomes ASCII, sem acentos, cedilha ou espacos.
Politica de performance de imagens:
- a hero desktop usa `hero-focus.jpg`, `hero-focus2.jpg` e `hero-focus3.jpg` em carrossel com fade; a primeira imagem permanece prioritaria e os slides adicionais entram via JavaScript somente depois da primeira pintura util, com hidratação adiada e carregamento sob demanda.
- `hero-focus.jpg` e `product-packshot2.jpg` carregam de forma imediata por participarem do primeiro impacto visual.
- imagens abaixo da dobra usam lazy loading nativo com `decoding="async"` e dimensoes declaradas no HTML.
- a imagem principal da hero e seu carrossel devem permanecer desktop-only em tempo de rede, evitando download desnecessario no mobile.
- o background compartilhado permanece em CSS no `body`, sem lazy loading, porque faz parte da identidade visual global.
- assets rastericos em uso publico devem ser dimensionados para o maior mockup Full HD confirmado; nomes, caminhos e formatos permanecem estaveis, e arquivos sociais ou reducoes que aumentem bytes ficam no tamanho original.
- Home Essentia Health, NeuroFlash, Obsidian e rodape global usam variantes menores em `srcset`/`sizes` quando a versao reduzida realmente diminui bytes; os arquivos originais permanecem como fallback e como referencia de maior tamanho.
- imagens candidatas a LCP devem permanecer descobertas diretamente no HTML, sem `loading="lazy"` e com `fetchpriority="high"` quando forem o primeiro impacto visual da rota.
- `favicon.ico` fica na raiz e deve ser declarado nas paginas publicas com caminho absoluto `/favicon.ico`.
- o rodape compartilhado usa titulos visuais como `h2.footer-heading` para preservar ordem semantica de headings nas paginas publicas; a aparencia continua controlada por `shared/footer.css`.
- o alerta de cache curto do Lighthouse deve ser tratado em hospedagem/CDN quando houver controle de headers; em GitHub Pages puro, nao criar churn de nomes versionados apenas para contornar TTL de asset.
### Nossa Missao NeuroFlash
A pagina `quem-somos/` permanece na mesma URL tecnica por compatibilidade, mas se apresenta publicamente como `Nossa Missao`. Ela nao possui JavaScript proprio e reutiliza header, footer, shell, fundo fixo e superficies compartilhadas, com CSS local para a narrativa institucional e a proporcao do titulo de pagina no desktop. A foto dos fundadores e o CTA contextual da FAQ nao fazem mais parte da experiencia publica.
### Essentia Health Isolada
A Home Essentia Health vive na raiz em `index.html`. A ordem visual e logo, produtos, bloco institucional Nossa Missao, secao Missao e footer. O layout usa uma casca clara `site-shell` full-width e uma regua interna de `1180px`, com gutters de `18px` no desktop e `14px` no mobile, sem linhas verticais laterais de contorno. O logo do header aponta para `./`, sem ancora `#inicio`, para recarregar no topo real em servidor local e URL publica limpa. As secoes Produtos, Nossa Missao e Missao devem permanecer alinhadas pela mesma largura util do container; no mobile, a secao Missao tambem compensa os gutters laterais para manter o mesmo respiro dos demais blocos. A secao de produtos usa apenas o rotulo compacto "Produtos" alinhado ao inicio do carrossel acima de `carousel.js`, com carrossel manual circular, sem autoplay, primeiro card com `assets/images/neuroflash.jpg` apontando operacionalmente para `./neuroflash/`, segundo card com `assets/images/obsidian.jpg` apontando para `./obsidian/` e dois placeholders `assets/images/em-breve.jpg`; esses cards possuem variantes `-360` e `-540` via `srcset`, e o primeiro card pode receber prioridade quando for LCP em mobile. Slides com `aria-hidden="true"` nao devem manter links focaveis, e os indicadores precisam ter area clicavel minima de `24px` mesmo com ponto visual compacto. O carrossel mantem contornos no conjunto e nos cards, proporcao vertical `4:3` e exibicao responsiva de tres cards no desktop, dois no tablet e um no mobile. O rodape da raiz reutiliza a mecanica dimensional real do rodape NeuroFlash, preserva fundo transparente e paleta clara, mantem mapa do site com `Home`, `NeuroFlash` e `Obsidian`, copyright `© 2026 Essentia Health.` e barra inferior com linha horizontal em largura total. As dimensoes recomendadas desses assets estao registradas em `site_image_guide.html`.
### FAQ
O acordeao em `faq/script.js`:
- normaliza cada item uma vez antes de ligar os eventos
- controla abertura e fechamento de cada item
- fecha os demais itens ao abrir um novo
- sincroniza `aria-expanded`
- associa botoes e respostas com `aria-controls`
- recalcula altura em `load` e agrupa o `resize` em `requestAnimationFrame`
### Navegacao E Renderizacao
- o mobile usa um perfil de performance mais leve, sem `background-attachment: fixed` e sem `backdrop-filter` nos blocos compartilhados mais caros.
- blocos estaticos abaixo da dobra podem usar `content-visibility: auto` via utilitario compartilhado, sem aplicar essa tecnica ao acordeao da FAQ.
- blocos estaticos abaixo da dobra em `quem-somos/` e o rodape compartilhado podem participar desse adiamento de renderizacao.
- `obsidian/index.html` usa uma abertura logo-only em tela preta, seguida por uma pagina estatica em fluxo normal de leitura: faixa preta inicial, header com `logo-mini.png`, `obsidian-nome.png` clicaveis para `#intro-completa`, escala de componentes reduzida em relacao ao header NeuroFlash e atalhos `Home`/`Nossa Missao` com estado ativo, hero com copy lateral e imagem vertical `hero-baner-2.jpg`, secao `Preparo` com `produto-large.jpg` a esquerda e copy a direita, secao `Formatos` como carrossel manual de blocos completos de copy e imagem, manifesto e rodape. As imagens de intro, header, hero, preparo e formatos podem usar variantes responsivas menores em `srcset`, mantendo os originais como fallback. `obsidian/nossa-missao/index.html` reutiliza o mesmo header visual em modo estatico, com fundo preto plano, logo e atalho Home apontando para a Home Obsidian, titulo centralizado em escala editorial e bloco narrativo alinhado a regua de largura, padding e paragrafo da pagina Nossa Missao NeuroFlash, preservando a estetica escura do Obsidian. No mobile, a hero e os slides de formatos priorizam imagem antes da copy; o carrossel de formatos compacta copy e controles para preservar o maior enquadramento possivel da imagem. Quando houver paridade visual, a pagina Obsidian deve preferir as versoes `.jpg` mais leves dos assets rastericos locais.
- `obsidian/script.js` usa a posicao de rolagem para esconder a intro preta, revelar o header e aplicar fades de entrada no banner e imagens de produto; tambem controla o carrossel manual de formatos com setas e indicadores, sem bibliotecas, build step, `fetch` ou servidor local.
- A pagina Obsidian preserva compatibilidade com `noscript`, exibindo diretamente o conteudo estatico e o header quando JavaScript estiver indisponivel.
### SEO
A estrategia SEO usa o dominio publico oficial `https://essentiahealth.com.br/` para artefatos tecnicos de indexacao:
- `index.html` e a Home canonica da Essentia Health.
- `neuroflash/index.html` e a Home canonica do produto NeuroFlash; `neuroflash/home/index.html` funciona apenas como fallback tecnico interno com `noindex, follow`.
- `obsidian/index.html` e `obsidian/nossa-missao/index.html` usam `index, follow, max-image-preview:large`, possuem canonical, `og:url`, imagem social absoluta, JSON-LD conservador de pagina e aparecem no `sitemap.xml`.
- `googlef8f43337a075e3ac.html` deve permanecer na raiz enquanto a propriedade do site depender dessa verificacao no Google Search Console/Search Engine.
- Home Essentia Health, Home NeuroFlash, Nossa Missao, FAQ, fallback de `neuroflash/home/` e Obsidian devem ter `title`, `description` e `robots` unicos.
- Home Essentia Health, paginas oficiais do NeuroFlash e Obsidian usam `canonical`, `og:url` e imagens sociais absolutas com o dominio oficial.
- A Home Essentia Health usa JSON-LD basico para `Organization`, `WebSite` e `WebPage`.
- A Home NeuroFlash usa JSON-LD basico para `Organization`, `Brand`, `WebSite` e `WebPage`, com URLs tecnicas absolutas sob `/neuroflash/`; `Product` fica suspenso enquanto nao houver oferta, avaliacao ou review real e aprovado.
- Obsidian usa JSON-LD basico para `Organization`, `WebSite`, `WebPage` e `AboutPage`, com URLs tecnicas absolutas sob `/obsidian/`; `Product` fica suspenso enquanto nao houver oferta, avaliacao ou review real e aprovado.
- FAQ usa JSON-LD minimo de `WebPage` sobre o produto, e Nossa Missao usa `AboutPage`, ambos com URLs tecnicas absolutas sob `/neuroflash/`.
- Home Essentia Health, Home NeuroFlash, Nossa Missao, FAQ e Obsidian devem manter Open Graph e Twitter cards com imagem e texto alternativo coerentes.
- Sempre que a imagem social for conhecida, manter tambem `og:image:type`, `og:image:width` e `og:image:height`.
- `robots.txt` e `sitemap.xml` ficam na raiz do projeto e apontam para o dominio oficial.
- Links publicos internos devem preferir URLs limpas com barra final, como `/neuroflash/`, `/neuroflash/faq/` e `/obsidian/`; `index.html` permanece como arquivo fisico e compatibilidade tecnica, nao como URL publica preferencial.
- O aviso "Pagina alternativa com tag canonica adequada" pode permanecer temporariamente no Google Search Console para URLs antigas com `index.html` ate novo rastreamento.
- A antiga pagina isolada `essentia-health/` foi promovida para a raiz; nao manter pasta publica duplicada com esse nome.
- `FAQPage` schema deve ser avaliado com cautela, porque rich results de FAQ sao restritos e nao devem ser tratados como ganho garantido.
- Imagens editoriais devem manter `alt` descritivo, natural e sem excesso de palavras-chave.
- CTAs editoriais principais devem apontar para paginas reais do site ou destinos reais de contato, evitando botoes sem destino util.
## Manutencao
### Bloqueio De Texto Publico
Todo texto visivel ao publico agora passa por curadoria legal externa. Por isso, agentes e mantenedores nao devem alterar, reescrever, corrigir, otimizar ou localizar nenhum texto publico do site durante qualquer procedimento tecnico.
Esse bloqueio vale para refatoracao, atualizacao visual, melhoria de performance, SEO, acessibilidade, correcao de bugs, limpeza de codigo, revisao de encoding, troca de assets, ajustes de componentes compartilhados e qualquer outro tipo de manutencao. Se uma tarefa tecnica exigir mudanca textual publica para ser concluida, a parte textual deve ficar pendente ate existir aprovacao legal externa explicita.
Entram no bloqueio: titulos, paragrafos, labels, CTAs, textos de botoes, FAQ, avisos legais, alt text, aria-label, metadados com copy publica, Open Graph/Twitter text, JSON-LD textual, dados institucionais exibidos, mensagens de suporte e qualquer string que possa aparecer para usuarios, buscadores ou previews sociais.
Regras de atualizacao:
- registrar mudancas relevantes em `changelog.html`
- registrar pendencias futuras em `coisas_a_fazer.html`
- atualizar este arquivo quando mudar estrutura, ownership, fluxo de entrada, assets canonicos ou estrategia compartilhada
- nao alterar texto visivel ao publico sem aprovacao legal externa previa, mesmo quando a alteracao parecer pequena, corretiva ou benefica
- tratar Home, Nossa Missao e FAQ como um unico sistema visual
- preferir `shared/styles.css` para regras realmente identicas entre paginas
- manter includes sem `fetch` enquanto `file:///` for requisito
- encapsular scripts compartilhados para nao declarar `const`, `let` ou helpers reutilizaveis no escopo global da pagina
- considerar boas praticas do Lighthouse em novas paginas, modificacoes e refatoracoes, cobrindo Performance, Acessibilidade, Boas praticas e SEO sem perseguir pontuacao artificial quando o alerta vier de ambiente local, extensoes, antivirus, HTTP local, cache de hospedagem sem controle de headers ou requisito externo ao codigo
- substituir os dados ficticios do footer antes da publicacao publica
Checklist rapido pos-alteracao:
- validar `index.html -> neuroflash/`
- validar `neuroflash/index.html -> neuroflash/quem-somos/ -> neuroflash/faq/`
- validar `neuroflash/home/index.html -> neuroflash/`
- validar navegacao entre Home NeuroFlash, Nossa Missao e FAQ
- validar retorno da FAQ para a Home
- revisar visual em mobile e desktop
- conferir hero, galeria e CTAs da Home
- revisar autoplay, setas e indicadores da hero no desktop
- revisar funcionamento do acordeao da FAQ
- confirmar que nao ha referencias quebradas de assets
- confirmar que `googlef8f43337a075e3ac.html` permanece na raiz se a verificacao do Google ainda estiver ativa
- confirmar que CTAs nao usam `href="#"`
- confirmar que nenhum texto publico foi alterado sem aprovacao legal externa registrada
- em novas paginas ou refatoracoes com impacto visual, rodar Lighthouse localmente nas rotas afetadas e separar achados reais do projeto de ruido de ambiente antes de alterar codigo
- atualizar `changelog.html` se a mudanca for estrutural, visual relevante ou comportamental
## Notas De Evolucao
A evolucao recomendada continua leve. Introduzir Node.js, build, framework, CI/CD ou backend apenas quando houver necessidade real de conteudo dinamico, automacao de publicacao, testes automatizados robustos ou multiplos fluxos de distribuicao.
