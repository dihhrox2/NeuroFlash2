# Conteúdo e copy

## Mapa editorial

| Área | Mensagem predominante | CTA atual |
| --- | --- | --- |
| Essentia Health | Soluções inteligentes com clareza, cuidado e responsabilidade | Navegação para NeuroFlash e Obsidian |
| NeuroFlash | Foco, clareza e energia cognitiva em rotinas de alta demanda | FAQ, missão e contato por e-mail |
| Obsidian | Higiene, presença e preparo | Navegação para missão e contato no rodapé |

## Tom de voz

Essentia Health: institucional, cuidadoso e responsável. NeuroFlash: direto, energético e disciplinado. Obsidian: sóbrio, premium e orientado a presença. O conteúdo público deve permanecer em pt-BR, com acentuação correta e sem dados, preços ou promessas inventadas.

## Governança obrigatória

Nova copy pública, inclusive labels, CTAs, metadados sociais, FAQ, ingredientes, protocolos, avisos, benefícios e alegações, exige aprovação especializada antes da publicação. Não usar promessas de cura, tratamento, diagnóstico, resultado garantido, desempenho assegurado ou dados comerciais não confirmados.

O guia de criativos em [canva_criativos_guide.html](canva_criativos_guide.html) complementa estas regras para materiais visuais.


---

## Transcrição histórica: `canva_criativos_guide.html`

> Conteúdo transferido do documento HTML histórico em 2026-09-07. A organização foi adequada a Markdown; fatos, datas, prioridades, caminhos, decisões e restrições foram preservados. O arquivo-fonte permanece em `canva_criativos_guide.html`.

# Diretrizes Canva Para Criativos Essentia Health
## Objetivo
Este documento orienta o uso do Canva pelo Codex na criacao de criativos, imagens de apoio, posts sociais, kits comerciais e materiais visuais relacionados ao site Essentia Health, incluindo NeuroFlash e Obsidian.
O guia nao substitui `site_architecture.html`, `site_image_guide.html` nem o conteudo real do site. Ele consolida regras praticas para transformar a identidade atual do projeto em pecas editaveis no Canva, mantendo consistencia visual, linguagem responsavel e revisao humana antes de salvar ou publicar.
## Estado Atual Do Projeto
- Essentia Health e a marca institucional; NeuroFlash e Obsidian sao marcas distintas dentro do site.
- Antes de criar uma peca, identificar explicitamente qual marca ela representa e seguir a identidade correspondente.
- O projeto e uma landing page estatica multi-page, sem backend, sem build e sem pipeline automatizado.
- A Home canonica da Essentia Health fica em `index.html`; o produto NeuroFlash fica em `neuroflash/`.
- A base visual compartilhada do NeuroFlash vive em `neuroflash/shared/styles.css`.
- Os componentes compartilhados do NeuroFlash vivem em `neuroflash/shared/includes.js`.
- Os assets principais do NeuroFlash ficam em `neuroflash/home/`.
- A documentacao oficial fica em `documentacao/interno/`.
- O site deve continuar compativel com GitHub Pages e abertura local via `file:///`.
- O dominio publico final e `https://essentiahealth.com.br/`; nao inventar outros dominios, URLs de campanha, telefones ou canais de compra.
## Identidade Visual NeuroFlash
### Paleta De Cores
Usar a paleta real do site como referencia principal:
- Preto base: `#020406`
- Grafite/azul escuro: `#040b12`
- Branco texto: `#f7fbff`
- Verde-limao principal: `#cfff18`
- Verde-limao claro: `#e9ff59`
- Ciano principal: `#20b7ff`
- Ciano claro: `#78f4ff`
Uso recomendado:
- Fundo escuro ou grafite em quase todas as pecas.
- Verde-limao para chamadas principais, marca, selos e CTAs de maior impacto.
- Ciano para subtitulos, marcadores, linhas de energia e apoio visual.
- Branco para texto de leitura.
- Evitar paletas que substituam a identidade por vermelho/laranja dominante, bege, roxo ou azul generico.
### Tipografia
Fontes do site:
- Display: `Barlow Condensed`
- Texto: `Inter`
### Identidades Das Marcas
- Essentia Health: usar tom institucional, claro e cuidadoso; referencia visual em verdes suaves, superfícies claras e mensagens de saude e bem-estar sem promessas.
- NeuroFlash: manter fundo escuro, branco, verde-limao e ciano; linguagem de foco, clareza, rotina intensa e uso responsavel.
- Obsidian: manter preto/grafite, cinza-claro e dourado; linguagem sobria de higiene, presenca e preparo. Nao reutilizar a paleta energetica do NeuroFlash no Obsidian.
No Canva, quando essas fontes estiverem disponiveis, usar:
- `Barlow Condensed` ou equivalente condensada forte para titulos.
- `Inter` ou sans-serif limpa equivalente para apoio, avisos e blocos menores.
Se o Canva trocar a fonte automaticamente, revisar legibilidade e manter a sensacao de marca: forte, estreita, esportiva, premium e objetiva.
### Linguagem Visual
Direcao visual atual:
- Escura, premium e energetica.
- Alto contraste.
- Atmosfera de foco, pressao, energia mental e rotina intensa.
- Superficies translucidas, brilho ciano/verde e sombras controladas.
- Imagens com assunto central seguro, pois muitas pecas usam crop.
Evitar:
- Visual clinico/hospitalar.
- Estetica infantil.
- Banco de imagens generico sem relacao com foco, treino, estudo, jogo, trabalho ou produto.
- Texto importante dentro de imagens que depois serao recortadas.
## Assets Do Projeto
### Assets Compartilhados
- `assets/images/` e `shared/essentia-health-logo.png`: referencias institucionais da Essentia Health; usar somente em pecas da marca institucional ou coassinadas.
- `neuroflash/shared/background-neuroflash.jpg`: fundo canonico compartilhado do produto. Usar como referencia de atmosfera escura, vertical e premium. Evitar inserir texto por cima sem overlay escuro e contraste alto.
- `obsidian/assets/`: logos, packshots e imagens de apresentacao do Obsidian; usar somente com paleta preto/grafite, cinza-claro e dourado e sem claims de higiene nao aprovados.
- `shared/icons/email.png`, `shared/icons/instagram.png`, `shared/icons/whatsapp.png`: icones de contato do rodape. Usar apenas quando o criativo tiver funcao de contato ou material comercial.
### Assets Da Home
- `neuroflash/home/product-packshot2.jpg`: packshot principal do produto. Prioridade maxima para criativos de produto, kits comerciais e anuncios. Manter a embalagem inteira, centralizada e sem cortes agressivos.
- `neuroflash/home/treino.jpg`: uso em treino intenso. Boa referencia para posts de academia, pre-treino e esforco fisico.
- `neuroflash/home/estudo.jpg`: uso em estudos, provas e concentracao.
- `neuroflash/home/game-competicao.jpg`: uso em jogos, competicao e alta pressao.
- `neuroflash/home/homem-terno.jpg`: uso em trabalho, rotina profissional e dias de alta demanda.
- `neuroflash/home/mental-ignition.jpg`, `neuroflash/home/focus-lock.jpg`, `neuroflash/home/pressure-mode.jpg`, `neuroflash/home/clarity-rush.jpg`: conceitos visuais de energia mental, foco, pressao e clareza.
- `neuroflash/home/hero-focus.jpg`, `neuroflash/home/hero-focus2.jpg`, `neuroflash/home/hero-focus3.jpg`: conjunto visual da hero desktop.
- `neuroflash/home/motocross.jpg`, `neuroflash/home/mulher-ufc.jpg`: usos de alta intensidade e acao.
### Regras De Assets
- Manter nomes ASCII, sem acentos, cedilha ou espacos.
- Usar JPG para fotos e PNG para icones ou elementos com transparencia.
- Manter assunto principal longe das bordas.
- Para packshot, priorizar `contain` visual: embalagem inteira deve aparecer.
- Para imagens de estilo/cenario, aceitar crop, desde que rosto, produto ou acao principal fiquem em area segura.
- Assets locais nao sao URLs publicas. O Codex deve usa-los como referencia local e inserir no Canva apenas quando houver upload, asset_id ou URL publica disponivel.
## Metodologia Codex + Canva
### Antes De Gerar
- Ler o pedido do usuario e identificar objetivo, publico, formato e CTA.
- Consultar este guia, `site_architecture.html`, `site_image_guide.html`, `03-brand-and-assets.md` e o conteudo do site quando a peca depender de produto, marca ou copy.
- Definir o tipo de design do Canva com cuidado:
- Instagram feed: `instagram_post` - Story/Reels: usar formato vertical quando disponivel ou orientar 1080 x 1920 px - Kit comercial visual: preferir `report` quando forem paginas fixas - Documento textual: usar `doc`
- Montar prompt completo, com formato, tema, texto, paleta, estilo, restricoes e o que nao deve aparecer.
### Prompt Recomendado
Todo prompt para Canva deve conter:
- Marca e produto: `NeuroFlash Instant`.
- Objetivo da peca.
- Formato e dimensao esperada.
- Paleta com hex codes.
- Direcao visual.
- Texto principal, apoio, selo e CTA.
- Regras de seguranca e copy.
- Proibicoes explicitas: ingles indesejado, metricas inventadas, preco, desconto, telefone, dominios alternativos, CNPJ, resultado garantido, promessa medica.
- Orientacao de deixar area para packshot quando a imagem real ainda nao estiver no Canva.
Exemplo base:
`
Crie um criativo em portugues do Brasil para NeuroFlash Instant, formato Instagram Feed 4:5, 1080x1350. Identidade visual: fundo preto/grafite, texto branco, verde-limao #cfff18, ciano #78f4ff e #20b7ff, estetica premium e energetica. Tema: [TEMA]. Texto principal: [TITULO]. Apoio: [APOIO]. CTA: Conheca o NeuroFlash. Nao usar termos em ingles, nao inventar preco, desconto, metricas, certificacoes, telefone, dominio alternativo ou promessa de resultado. Evitar claims medicos. Incluir espaco para packshot do produto.
`
### Depois De Gerar
- Salvar a melhor candidata como design editavel no Canva.
- Ler o conteudo textual do design sempre que possivel.
- Abrir transacao de edicao para corrigir:
- ingles indesejado - acentuacao quebrada - promessas fortes demais - datas ou horarios aleatorios - preco, desconto, numeros, metricas ou dados comerciais inventados - CTA sem destino claro
- Mostrar previa quando a ferramenta retornar miniatura.
- Salvar a transacao apenas depois de aprovacao explicita do usuario, quando a ferramenta exigir.
- Entregar links finais de edicao no Canva.
## Criativos Para Instagram
### Formatos
Referencias atuais do Canva para Instagram:
- Feed retrato: 1080 x 1350 px
- Feed quadrado: 1080 x 1080 px
- Stories: 1080 x 1920 px
Padrao recomendado do projeto:
- Criativos de campanha: Feed 4:5, 1080 x 1350 px.
- Stories/Reels: usar 9:16 somente quando o usuario pedir tela cheia vertical.
- Carrosseis: manter todos os slides no mesmo formato.
### Area Segura
- Manter texto principal e produto no centro visual.
- Evitar informacoes importantes muito proximas do topo e do rodape.
- Considerar que a grade do Instagram pode recortar posts 4:5 em preview quadrado.
- Evitar texto pequeno em rodapes, principalmente avisos legais.
### Temas Padrao
- Treino intenso
- Titulo possivel: `FOCO SOB PRESSAO` - Apoio: `NeuroFlash Instant para rotinas de alta demanda.` - Asset de referencia: `neuroflash/home/treino.jpg`
- Estudos e provas
- Titulo possivel: `CLAREZA PARA ESTUDAR` - Apoio: `Foco mental para momentos que pedem concentracao.` - Asset de referencia: `neuroflash/home/estudo.jpg`
- Jogos e competicao
- Titulo possivel: `RESPOSTA RAPIDA. FOCO TOTAL.` - Apoio: `Clareza mental para momentos de alta pressao.` - Asset de referencia: `neuroflash/home/game-competicao.jpg`
- Trabalho e rotina intensa
- Titulo possivel: `FOCO PARA DIAS INTENSOS` - Apoio: `Energia cognitiva para rotinas de alta demanda.` - Asset de referencia: `neuroflash/home/homem-terno.jpg`
CTA padrao enquanto nao houver canal de compra final:
- `Conheca o NeuroFlash`
## Copy E Seguranca
### Curadoria Legal Externa
Todo texto visivel ao publico deve passar por curadoria legal externa antes de ser publicado ou alterado. O Codex pode preparar propostas, layouts e placeholders, mas nao deve tratar nenhuma copy como aprovada para uso publico sem validacao externa explicita.
Essa regra vale tambem para criativos, kits, posts, PDFs, legendas, CTAs, avisos, claims, textos de embalagem simulada, promessas de beneficio e qualquer material que possa ser visto por clientes, parceiros, buscadores ou redes sociais.
### Pode Usar
- `NeuroFlash Instant`
- `Foco sob pressao`
- `Foco mental`
- `Clareza mental`
- `Energia cognitiva`
- `Rotinas de alta demanda`
- `Uso responsavel`
- `Produto para maiores de 18 anos`
- `Este produto nao e medicamento`
### Evitar Ou Remover
- Promessa de cura, tratamento, diagnostico ou efeito medico.
- Garantia de resultado, aprovacao, vitoria, produtividade ou desempenho.
- Frases como `resultado garantido`, `aumenta comprovadamente`, `vence partidas`, `aprova em provas`, `maximiza seu desempenho` sem base regulatoria.
- Preco, desconto, oferta, porcentagem, ranking, numero de vendas ou metricas inventadas.
- Telefone, canal de compra, URL de campanha ou URL publica nao confirmados.
- Termos em ingles quando a peca for para o mercado brasileiro.
- Linguagem agressiva demais sobre estimulantes ou cafeina.
### Aviso Curto
Usar quando houver espaco:
`
Uso responsavel. Produto para maiores de 18 anos. Este produto nao e medicamento.
`
Em materiais comerciais maiores, usar aviso ampliado:
`
Uso restrito a maiores de 18 anos. Pessoas com sensibilidade a cafeina, historico cardiaco, gestantes, lactantes ou pessoas em tratamento medico devem buscar orientacao profissional antes do uso. Nao exceder a dose recomendada. Este produto nao e medicamento.
`
## Materiais Comerciais E Kits
Para kits de midia, propostas de parceria e documentos comerciais:
- Preferir designs com paginas fixas quando o destino for PDF.
- Usar `report` antes de `document` quando o usuario pedir paginas visuais.
- Evitar modelos de fatura, recibo, nota, boleto, orcamento ou cobranca.
- Usar placeholders claros para dados ausentes:
- `[INSERIR NOME]` - `[INSERIR WHATSAPP OFICIAL]` - `https://essentiahealth.com.br/` - `[INSERIR CONDICAO COMERCIAL]`
- Revisar todo o texto apos gerar, pois o Canva pode inserir conteudo financeiro generico, ingles ou numeros ficticios.
## Acessibilidade E Legibilidade
Boas praticas:
- Priorizar contraste alto entre texto e fundo.
- Usar texto branco, verde-limao ou ciano sobre fundos escuros.
- Nao depender apenas de cor para transmitir informacao importante.
- Evitar textos longos em imagem social.
- Usar fonte grande para titulos e subtitulos.
- Manter aviso legal legivel ou mover detalhes para legenda/post quando a arte ficar poluida.
- Ao publicar, incluir legenda com informacoes essenciais que aparecem na imagem.
- Quando exportar PDFs ou materiais longos, revisar legibilidade e acessibilidade manualmente.
## Checklist De Qualidade
Antes de entregar qualquer criativo Canva:
- [ ] O formato esta correto para o canal pedido.
- [ ] O texto esta em portugues do Brasil.
- [ ] Nao ha ingles indesejado.
- [ ] A acentuacao esta correta no Canva.
- [ ] A marca aparece como `NeuroFlash` ou `NeuroFlash Instant`.
- [ ] A peca usa a paleta escura com verde-limao e ciano.
- [ ] O CTA e claro e nao inventa destino.
- [ ] Nao ha preco, desconto, metricas, certificacoes ou resultados inventados.
- [ ] Nao ha promessa medica ou garantia de desempenho.
- [ ] O produto, rosto ou assunto principal nao esta cortado de forma ruim.
- [ ] O texto principal continua legivel em mobile.
- [ ] Placeholders estao entre colchetes quando dados oficiais faltarem.
- [ ] O usuario aprovou antes de salvar edicoes, quando a ferramenta exigir.
- [ ] A curadoria legal externa aprovou qualquer texto destinado a exibicao publica.
## Modelo De Registro Para Criativos Gerados
Quando uma campanha for criada, registrar em resposta ao usuario:
`
- Tema:
- Formato:
- Link Canva:
- CTA:
- Observacoes:
`
Nao registrar links temporarios de preview como documentacao permanente; usar apenas links finais do Canva quando forem relevantes.
## Referencias Externas
- Canva Brand Kit: https://www.canva.com/learn/how-to-build-a-brand-kit/
- Canva Style Guide: https://www.canva.com/learn/your-brand-needs-a-visual-style-guide/
- Canva AI Connector: https://www.canva.com/ai-connector/
- Canva Instagram Sizes: https://www.canva.com/sizes/instagram/
- Canva Accessibility: https://www.canva.com/accessibility/
