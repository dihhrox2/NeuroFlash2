# Marca e assets

## Arquitetura de marca

Essentia Health é a marca institucional. NeuroFlash e Obsidian são marcas distintas sob esse guarda-chuva, com propostas e identidades visuais próprias.

| Marca | Direção visual observada | Tipografia |
| --- | --- | --- |
| Essentia Health | Verdes suaves, superfícies claras e tom institucional | Inter e Barlow Condensed |
| NeuroFlash | Fundo escuro, verde-limão e ciano; energia e foco | Inter e Barlow Condensed |
| Obsidian | Preto/grafite, cinza-claro e dourado; acabamento premium | Inter e Barlow Condensed |

## Inventário de referência

- Essentia Health: `assets/images/` e `shared/essentia-health-logo.png`.
- NeuroFlash: `neuroflash/shared/background-neuroflash.jpg`, `neuroflash/home/` e `neuroflash/quem-somos/fundadores.jpg`.
- Obsidian: `obsidian/assets/`.
- Contatos: `shared/icons/`.

As variantes responsivas existentes devem acompanhar o asset principal quando ele for substituído. Manter nomes ASCII e caminhos exatos para preservar links locais e publicação estática.

## Direitos e produção

Titularidade, licenças e autorização de uso de todos os logos e imagens: **a confirmar pelo responsável**. Não assumir propriedade, licença de banco de imagens ou autorização de pessoas retratadas.

Evitar assets pesados, textos pequenos em imagens e alegações regulatórias inseridas na arte. Conferir corte, contraste, texto alternativo e desktop/mobile após cada troca. O guia detalhado de imagens permanece em [site_image_guide.html](site_image_guide.html).


---

## Transcrição histórica: `site_image_guide.html`

> Conteúdo transferido do documento HTML histórico em 2026-09-07. A organização foi adequada a Markdown; fatos, datas, prioridades, caminhos, decisões e restrições foram preservados. O arquivo-fonte permanece em `site_image_guide.html`.

# Guia Tecnico De Imagens Do Site
Este documento mapeia as imagens usadas no site NeuroFlash e define orientacoes para substituicao, proporcao, crop e nomenclatura.
## Indice
- Visao Geral (#1-visao-geral)
- Imagens Essentia Health (#2-imagens-essentia-health)
- Imagens Compartilhadas NeuroFlash (#3-imagens-compartilhadas-neuroflash)
- Home NeuroFlash (#4-home-neuroflash)
- Nossa Missao (#4-nossa-missao)
- FAQ (#5-faq)
- Obsidian (#6-obsidian)
- Regras Gerais De Producao (#7-regras-gerais-de-producao)
## 1. Visao Geral
- O site e estatico e nao usa pipeline de otimizacao automatica.
- Todas as imagens devem ser salvas ja otimizadas antes de entrar no projeto.
- Nomes de arquivos devem ser ASCII, sem acentos, cedilha ou espacos.
- Preferir JPG para fotos e PNG apenas para icones, transparencias ou artefatos especificos.
- Sempre declarar `width` e `height` no HTML quando a imagem aparecer como `<img>`.
- Imagens abaixo da dobra devem usar `loading="lazy"` e `decoding="async"`.
- Imagens criticas do primeiro impacto visual nao devem usar lazy loading.
- A dimensao do arquivo deve acompanhar o maior uso previsto no mockup Full HD; se o redimensionamento gerar arquivo maior, manter o original.
## 2. Imagens Essentia Health
- Arquivo: `assets/images/essentia-health-logo.png`
- Uso: logo principal da Home Essentia Health.
- Dimensao real: 779 x 540 px
- Dimensao HTML: 779 x 540 px
- Prioridade: imagem LCP da Home raiz, carregada sem lazy loading e com `fetchpriority="high"`.
- Observacao: manter arquivo original enquanto reducoes rastericas gerarem arquivo maior que o original.
- Arquivo: `assets/images/essentia-health-logo-mark.png`
- Uso: simbolo compacto no topo da Home Essentia Health.
- Dimensao real: 359 x 196 px
- Dimensao HTML: 359 x 196 px
- Variante responsiva: `assets/images/essentia-health-logo-mark-112.png` para uso reduzido no header.
- Arquivo: `favicon.ico`
- Uso: icone do site declarado nas paginas publicas com `/favicon.ico`.
- Origem: derivado do simbolo compacto da Essentia Health.
- Observacao: manter na raiz para evitar 404 em navegadores, Lighthouse e rastreadores.
- Arquivo: `assets/images/neuroflash.jpg`
- Uso: packshot do primeiro card do carrossel de produtos da Home Essentia Health, com link operacional para `./neuroflash/`.
- Dimensao real: 600 x 800 px
- Dimensao HTML: 600 x 800 px
- Variantes responsivas: `assets/images/neuroflash-360.jpg` e `assets/images/neuroflash-540.jpg` para cards exibidos em largura reduzida/intermediaria.
- Proporcao recomendada: 3:4 vertical
- Arquivo: `assets/images/obsidian.jpg`
- Uso: imagem do segundo card do carrossel de produtos da Home Essentia Health.
- Dimensao real: 600 x 800 px
- Dimensao HTML: 600 x 800 px
- Variantes responsivas: `assets/images/obsidian-360.jpg` e `assets/images/obsidian-540.jpg` para cards exibidos em largura reduzida/intermediaria.
- Proporcao recomendada: 3:4 vertical
- Arquivo: `assets/images/em-breve.jpg`
- Uso: imagem dos dois placeholders restantes do carrossel de produtos da Home Essentia Health.
- Dimensao real: 600 x 800 px
- Dimensao HTML: 600 x 800 px
- Variantes responsivas: `assets/images/em-breve-360.jpg` e `assets/images/em-breve-540.jpg` para cards exibidos em largura reduzida/intermediaria.
- Proporcao recomendada: 3:4 vertical
## 3. Imagens Compartilhadas NeuroFlash
### 2.1 Background Global
- Arquivo: `neuroflash/shared/background-neuroflash.jpg`
- Uso: fundo canonico compartilhado aplicado no `body` de Home, Nossa Missao e FAQ.
- Dimensao real: 843 x 1264 px
- Orientacao: vertical
- Crop: usado como `background-size: cover`; deve manter o ponto de interesse no centro.
- Observacao: por ser imagem de identidade global, evitar substituicoes que mudem drasticamente a atmosfera escura, energetica e premium.
### 2.2 Icones De Suporte E Contato
- Arquivo: `shared/essentia-health-logo.png`
- Uso: logo institucional da Essentia Health no rodape global.
- Dimensao real: 779 x 540 px
- Dimensao HTML: 779 x 540 px
- Variante responsiva: `shared/essentia-health-logo-240.png` para o rodape.
Orientacoes:
- Preservar legibilidade do nome e do subtitulo em tamanho reduzido.
- Se trocar o arquivo, manter nome estavel ou atualizar `shared/footer.js`.
- Revisar Home, Obsidian, Nossa Missao e FAQ, porque o rodape e global.
- Arquivo: `shared/icons/email.png`
- Uso: icone de e-mail no rodape.
- Dimensao real: 96 x 96 px
- Dimensao HTML: 96 x 96 px
- Variantes responsivas: `shared/icons/email-32.png` e `shared/icons/email-64.png`.
- Arquivo: `shared/icons/instagram.png`
- Uso: icone de Instagram no rodape.
- Dimensao real: 96 x 96 px
- Dimensao HTML: 96 x 96 px
- Variantes responsivas: `shared/icons/instagram-32.png` e `shared/icons/instagram-64.png`.
- Arquivo: `shared/icons/whatsapp.png`
- Uso: icone de WhatsApp no rodape.
- Dimensao real: 96 x 96 px
- Dimensao HTML: 96 x 96 px
- Variantes responsivas: `shared/icons/whatsapp-32.png` e `shared/icons/whatsapp-64.png`.
Orientacoes:
- Manter icones simples, legiveis em tamanho pequeno e com contraste adequado.
- Se trocar arquivos, preservar nomes e dimensoes visuais equivalentes.
## 4. Home NeuroFlash
### 3.1 Hero Principal
- Arquivo: `neuroflash/home/hero-focus.jpg`
- Uso: primeira imagem do carrossel desktop da hero.
- Dimensao real: 1439 x 916 px
- Dimensao HTML: 1439 x 916 px
- Proporcao: 11:7
- Prioridade: imagem critica, carregamento imediato.
- Arquivo: `neuroflash/home/hero-focus2.jpg`
- Uso: slide adicional do carrossel desktop da hero.
- Dimensao real: 1439 x 916 px
- Dimensao HTML: 1439 x 916 px
- Proporcao: 11:7
- Prioridade: carregamento sob demanda via JavaScript.
- Arquivo: `neuroflash/home/hero-focus3.jpg`
- Uso: slide adicional do carrossel desktop da hero.
- Dimensao real: 1439 x 916 px
- Dimensao HTML: 1439 x 916 px
- Proporcao: 11:7
- Prioridade: carregamento sob demanda via JavaScript.
Orientacoes:
- O carrossel e desktop-only em tempo de rede.
- As tres imagens devem manter enquadramento compativel, com assunto principal seguro no centro.
- Evitar texto embutido nas imagens.
- A primeira imagem deve continuar sendo a mais forte para o primeiro impacto visual.
### 3.2 Packshot Do Produto
- Arquivo: `neuroflash/home/product-packshot2.jpg`
- Uso: imagem principal do produto na Home.
- Dimensao real: 600 x 1000 px
- Dimensao HTML: 600 x 1000 px
- Orientacao: vertical
- Prioridade: imagem critica, carregamento imediato.
- Variante responsiva: `neuroflash/home/product-packshot2-420.jpg` para exibicoes reduzidas.
Orientacoes:
- Manter a embalagem inteira visivel.
- Evitar crop agressivo nas bordas.
- Fundo pode ser transparente visualmente ou escuro, mas precisa preservar contraste com o layout.
- Esta imagem tambem serve como referencia principal para criativos, kits comerciais e posts sociais.
### 3.3 Cards De Destaques
- Arquivo: `neuroflash/home/mental-ignition.jpg`
- Uso: card de conceito visual.
- Dimensao real: 600 x 450 px
- Dimensao HTML: 600 x 450 px
- Proporcao HTML: 4:3
- Arquivo: `neuroflash/home/focus-lock.jpg`
- Uso: card de conceito visual.
- Dimensao real: 600 x 600 px
- Dimensao HTML: 600 x 600 px
- Proporcao HTML: 1:1
- Arquivo: `neuroflash/home/pressure-mode.jpg`
- Uso: card de conceito visual.
- Dimensao real: 600 x 400 px
- Dimensao HTML: 600 x 400 px
- Proporcao HTML: 3:2
- Arquivo: `neuroflash/home/clarity-rush.jpg`
- Uso: card de conceito visual.
- Dimensao real: 600 x 338 px
- Dimensao HTML: 600 x 338 px
- Proporcao HTML: 16:9 aproximada
Orientacoes:
- As imagens sao exibidas em cards com crop controlado.
- Manter assunto principal em area central.
- Evitar detalhes importantes muito proximos das bordas.
### 3.4 Cards De Modos De Uso
- Arquivo: `neuroflash/home/treino.jpg`
- Uso: contexto de treino intenso.
- Dimensao real: 799 x 450 px
- Dimensao HTML: 799 x 450 px
- Proporcao HTML: 16:9 aproximada
- Variante responsiva: `neuroflash/home/treino-576.jpg`.
- Arquivo: `neuroflash/home/estudo.jpg`
- Uso: contexto de estudos, provas e concentracao.
- Dimensao real: 800 x 450 px
- Dimensao HTML: 800 x 450 px
- Proporcao HTML: 16:9
- Variante responsiva: `neuroflash/home/estudo-576.jpg`.
- Arquivo: `neuroflash/home/game-competicao.jpg`
- Uso: contexto de jogos, competicao e alta pressao.
- Dimensao real: 800 x 533 px
- Dimensao HTML: 800 x 533 px
- Proporcao HTML: 3:2 aproximada
- Variante responsiva: `neuroflash/home/game-competicao-576.jpg`.
Orientacoes:
- Imagens devem comunicar uso sem sugerir promessa medica ou resultado garantido.
- Usar cenas de rotina intensa, foco e pressao de forma comercialmente cuidadosa.
- Manter compatibilidade com textos sobrepostos quando necessario.
### 3.5 Galeria Visual
- Arquivo: `neuroflash/home/motocross.jpg`
- Uso: galeria de intensidade e acao.
- Dimensao real: 800 x 600 px
- Dimensao HTML: 800 x 600 px
- Proporcao: 4:3
- Arquivo: `neuroflash/home/homem-terno.jpg`
- Uso: galeria de rotina profissional e alta demanda.
- Dimensao real: 800 x 600 px
- Dimensao HTML: 800 x 600 px
- Proporcao: 4:3
- Arquivo: `neuroflash/home/mulher-ufc.jpg`
- Uso: galeria de intensidade e esporte.
- Dimensao real: 800 x 600 px
- Dimensao HTML: 800 x 600 px
- Proporcao: 4:3
Orientacoes:
- Preservar proporcao 4:3 quando substituir.
- Manter diversidade visual entre esporte, trabalho e acao.
- Evitar imagens genericas sem relacao clara com alta demanda, foco ou energia.
## 4. Nossa Missao
### 4.1 Imagem Social
- Arquivo: `neuroflash/quem-somos/fundadores.jpg`
- Uso: imagem social nos metadados Open Graph/Twitter da pagina Nossa Missao. A imagem nao aparece mais no corpo da pagina.
- Dimensao real: 944 x 1124 px
- Orientacao: vertical
Orientacoes:
- Manter metadados de tipo, largura e altura alinhados ao arquivo real enquanto este asset for usado como imagem social.
- Ao substituir, revisar previews sociais e a pagina em desktop e mobile.
## 5. FAQ
### 5.1 Imagem Social Da FAQ
- Arquivo de referencia: `neuroflash/shared/background-neuroflash.jpg`
- Uso: imagem social nos metadados Open Graph/Twitter da FAQ.
- Dimensao real: 843 x 1264 px
- Observacao: manter metadados de tipo, largura e altura alinhados ao arquivo real.
Orientacoes do carrossel Essentia Health:
- Os cards do carrossel usam `aspect-ratio: 3 / 4`; imagens de produto devem ser exportadas nessa proporcao para evitar zoom, bordas laterais ou cortes.
- Manter o produto ou mensagem principal centralizados, com margem segura nas bordas superior e inferior.
- Revisar o carrossel em desktop, tablet e mobile apos qualquer troca, porque ele exibe tres, dois ou um card por vez.
- Manter os arquivos dentro de `assets/images/` enquanto a Home Essentia Health permanecer na raiz.
## 6. Obsidian
- Arquivo: `obsidian/assets/logo.jpg`
- Uso: logo principal na intro preta logo-only da pagina Obsidian.
- Dimensao real: 1024 x 1024 px
- Prioridade: carregamento imediato na intro.
- Variante responsiva: `obsidian/assets/logo-320.jpg` para a intro.
- Arquivo: `obsidian/assets/logo-mini.png`
- Uso: logo clicavel reduzido do header fixo da pagina Obsidian.
- Dimensao real: 128 x 128 px
- Dimensao HTML: 128 x 128 px
- Prioridade: carregamento imediato no header.
- Variante responsiva: `obsidian/assets/logo-mini-64.png`.
- Arquivo: `obsidian/assets/obsidian-nome.png`
- Uso: wordmark clicavel ao lado do simbolo no header fixo da pagina Obsidian.
- Dimensao real: 320 x 39 px
- Dimensao HTML: 320 x 39 px
- Dimensao visual: 224 px de largura no desktop, com limite menor no mobile.
- Prioridade: carregamento imediato no header.
- Variante responsiva: `obsidian/assets/obsidian-nome-192.png`.
- Arquivo: `obsidian/assets/hero-baner-2.jpg`
- Uso: imagem vertical da hero de conteudo apos a faixa preta inicial.
- Dimensao real: 921 x 1152 px
- Orientacao: vertical
- Variante responsiva: `obsidian/assets/hero-baner-2-640.jpg`.
- Arquivo: `obsidian/assets/apresentacao-1.jpg`
- Uso: imagem do carrossel de formatos e imagem social Open Graph/Twitter.
- Dimensao real: 921 x 1152 px
- Orientacao: vertical
- Variante responsiva: `obsidian/assets/apresentacao-1-640.jpg`.
- Arquivo: `obsidian/assets/produto-large.jpg`
- Uso: imagem da secao `Preparo`, posicionada a esquerda da copy em desktop.
- Dimensao real: 921 x 1152 px
- Orientacao: vertical
- Variante responsiva: `obsidian/assets/produto-large-640.jpg`.
- Arquivo: `obsidian/assets/produto-small.jpg`
- Uso: imagem da secao `Formatos`, posicionada a direita da copy em desktop e com o mesmo limite visual de largura de `produto-large.jpg`.
- Dimensao real: 921 x 1152 px
- Orientacao: vertical
- Variante responsiva: `obsidian/assets/produto-small-640.jpg`.
Orientacoes:
- O conjunto Obsidian possui Home em `obsidian/index.html` e pagina Nossa Missao em `obsidian/nossa-missao/index.html`.
- Manter os nomes ASCII atuais para preservar links locais e compatibilidade com GitHub Pages.
- Revisar cortes em desktop e mobile principalmente no banner horizontal e nas imagens verticais de produto.
- Evitar inserir claims regulatorios nas imagens sem validacao tecnica.
## 7. Regras Gerais De Producao
- Exportar fotos em JPG com compressao visualmente limpa.
- Evitar arquivos pesados sem necessidade.
- Remover metadados embutidos antes da publicacao publica quando possivel.
- Confirmar que o nome do arquivo no HTML corresponde exatamente ao arquivo real.
- Usar nomes descritivos, curtos e estaveis.
- Nao trocar extensoes sem atualizar HTML, CSS, metadados e documentacao.
- Revisar crop em mobile e desktop apos qualquer troca.
- Nao inserir promessas comerciais ou medicas dentro das imagens.
- Para criativos externos ao site, usar este guia como referencia de assets, nao como lista obrigatoria de layout.
