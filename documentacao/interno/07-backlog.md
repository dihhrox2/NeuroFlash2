# Backlog

## Prioridade alta

- [ ] Confirmar a propriedade no Google Search Console usando `googlef8f43337a075e3ac.html`.
- [ ] Validar indexação e novo rastreamento das URLs limpas após publicação.
- [ ] Substituir ou remover WhatsApp, telefone, Instagram, horários e demais dados de contato não confirmados.
- [ ] Confirmar direitos de uso, licenças e titularidade dos assets.
- [ ] Obter aprovação especializada antes de qualquer mudança de copy pública, ingredientes, segurança ou alegações.
- [ ] Validar requisitos regulatórios do Obsidian antes de venda, incluindo composição, rotulagem, descarte e claims.

## Prioridade média

- [ ] Investigar métricas das fontes de fallback para reduzir os deslocamentos remanescentes durante o carregamento das fontes externas, preservando a tipografia final. Ver medições em `08-refatoracao-e-validacao.md`.
- [ ] Definir venda, checkout, analytics e pixels para NeuroFlash e Obsidian.
- [ ] Avaliar Product schema apenas depois de haver dados reais e aprovados de oferta.
- [ ] Expandir e revisar o guia de criativos para manter as três marcas consistentes.
- [ ] Limpar metadados embutidos dos assets antes da publicação, quando aplicável.

## Prioridade baixa

- [ ] Avaliar FAQPage schema conforme critérios atuais dos buscadores.
- [ ] Estudar estratégia leve para renderização de conteúdo fora da viewport.
- [ ] Unificar visualmente headers apenas mediante aprovação específica.

O backlog histórico detalhado continua em [coisas_a_fazer.html](coisas_a_fazer.html).


---

## Transcrição histórica: `coisas_a_fazer.html`

> Conteúdo transferido do documento HTML histórico em 2026-09-07. A organização foi adequada a Markdown; fatos, datas, prioridades, caminhos, decisões e restrições foram preservados. O arquivo-fonte permanece em `coisas_a_fazer.html`.

# Coisas A Fazer - NeuroFlash
Use este arquivo para registrar ideias, pendencias e melhorias futuras. Mantenha cada item curto, objetivo e acionavel.
## Formato Sugerido
`
- [ ] Categoria: descricao da tarefa | contexto: detalhe opcional | prioridade: baixa/media/alta
`
## Tarefas
- [ ] Governanca legal: registrar aprovacao externa antes de qualquer alteracao de texto publico | contexto: todo texto visivel ao publico esta bloqueado para edicao interna em refatoracoes, atualizacoes, otimizacoes, SEO, acessibilidade, performance ou manutencao | prioridade: alta
- [x] Integracao: promover a pagina Essentia Health para a raiz e conectar NeuroFlash como produto | contexto: Home institucional agora vive em `index.html`, e NeuroFlash foi movido para `neuroflash/` com entrada pelo card de produto | prioridade: media
- [x] SEO: definir URL publica final do projeto | contexto: dominio oficial definido como `https://essentiahealth.com.br/` | prioridade: alta
- [ ] SEO: validar propriedade no Google Search Console/Search Engine usando `googlef8f43337a075e3ac.html` | contexto: arquivo tecnico ja esta na raiz do projeto e deve ser mantido enquanto a verificacao depender dele | prioridade: alta
- [x] SEO: criar sitemap.xml e robots.txt para o dominio oficial | contexto: arquivos criados na raiz com sitemap absoluto em `https://essentiahealth.com.br/sitemap.xml` | prioridade: alta
- [x] SEO: adicionar canonical e og:url nas paginas oficiais | contexto: Home Essentia Health usa a raiz; Home, Nossa Missao e FAQ do NeuroFlash usam URLs absolutas sob `/neuroflash/`; Obsidian usa URL absoluta sob `/obsidian/` | prioridade: alta
- [x] SEO: normalizar links publicos para URLs limpas | contexto: links internos expostos passaram a preferir caminhos com barra final em vez de `index.html`, reduzindo duplicatas canonicas no Google Search Console | prioridade: alta
- [x] Performance: aplicar melhorias Lighthouse nas rotas publicas | contexto: favicon raiz, prioridade de LCP, variantes responsivas de imagens, headings do rodape e acessibilidade do carrossel foram tratados sem alterar copy publica ou metadados textuais | prioridade: alta
- [ ] SEO: validar indexacao apos migracao estrutural | contexto: conferir sitemap, canonical, Open Graph, JSON-LD e recrawl das URLs limpas da raiz, de `/neuroflash/` e de `/obsidian/` apos publicacao | prioridade: alta
- [ ] SEO: reintroduzir Product schema somente quando houver dados reais de oferta, review ou rating | contexto: evitar itens de produto invalidos no Google Search Console enquanto venda e avaliacoes nao estiverem aprovadas | prioridade: media
- [ ] SEO: avaliar FAQPage schema somente se a marca/site atender aos criterios atuais do Google | contexto: rich results de FAQ sao restritos e nao garantidos | prioridade: baixa
- [ ] SEO: avaliar referencias externas confiaveis para ingredientes | contexto: adicionar apenas fontes tecnicas reais, sem links decorativos | prioridade: media
- [ ] Conteudo: submeter copy publica a curadoria legal externa antes de qualquer publicacao ou alteracao | contexto: agentes internos nao devem editar textos visiveis ao publico sem aprovacao externa previa | prioridade: alta
- [x] Conteudo: substituir texto institucional da pagina Nossa Missao | contexto: copy publica fornecida explicitamente no pedido de implementacao de 2026-05-28; manter novos ajustes sujeitos a curadoria legal externa | prioridade: alta
- [x] Conteudo: substituir texto institucional do bloco Nossa Missao da Home raiz | contexto: copy publica fornecida explicitamente no pedido de implementacao de 2026-05-28; secao Missao existente foi preservada sem alteracao | prioridade: alta
- [x] Obsidian: consolidar a pagina unica estatica do novo produto | contexto: `obsidian/index.html` usa intro preta logo-only, banner visual, secoes de produto espelhadas, manifesto, assets proprios, metadados publicos, canonical e inclusao em sitemap | prioridade: alta
- [x] Obsidian: criar pagina Nossa Missao | contexto: `obsidian/nossa-missao/index.html` criada com copy autorizada, link no header, footer compartilhado, metadados proprios e inclusao no sitemap | prioridade: alta
- [x] Obsidian: liberar indexacao publica | contexto: `noindex` removido, canonical avaliado, `/obsidian/` incluido no sitemap e metadados finais revisados para publicacao | prioridade: alta
- [ ] Obsidian: definir venda, checkout, analytics e pixels | contexto: a pagina atual nao possui backend, checkout, carrinho, Meta/TikTok Pixel ou Google Analytics | prioridade: media
- [ ] Obsidian: validar regulatorio final | contexto: antes de venda, confirmar composicao, rotulagem, descarte, advertencias e claims como antibacteriano, dermatologicamente testado, hipoalergenico ou flushable | prioridade: alta
- [ ] Empresa: substituir dados ficticios restantes do rodape por informacoes reais | contexto: CNPJ e endereco oficiais ja atualizados; telefone, WhatsApp, Instagram, horarios e politicas seguem pendentes antes da publicacao | prioridade: alta
- [x] Estrutura: centralizar rodape global em `shared/` | contexto: `shared/footer.js`, `shared/footer.css`, logo institucional e icones de contato agora atendem Home, Obsidian e NeuroFlash com mapa do site por contexto | prioridade: alta
- [x] Estrutura: encapsular scripts compartilhados para restaurar header NeuroFlash | contexto: `shared/footer.js` e `neuroflash/shared/includes.js` usam escopo proprio para evitar colisao global de helpers como `build_anchor` | prioridade: alta
- [x] Estrutura: aplicar ossatura compartilhada nos headers de Home e NeuroFlash | contexto: `shared/header.css` define slots estruturais comuns, enquanto Obsidian permanece fora por depender do fade inicial do logo e da intro | prioridade: media
- [x] UX: limitar area clicavel do header da Home ao logo e nome | contexto: `shared-header__inner` fica em container neutro e o link permanece apenas na marca Essentia Health | prioridade: alta
- [x] Estrutura: remover assets e CSS sem uso confirmado | contexto: limpeza conservadora excluiu imagens duplicadas ou sem referencia publica, removeu aliases CSS sem consumidores reais e manteve rotas, copy publica, SEO tecnico e contratos `data-*` preservados | prioridade: media
- [x] Encoding: normalizar acentuacao e caixa operacional | contexto: documentacao interna movida para `documentacao/interno/` com nomes minusculos, referencias internas atualizadas, strings publicas corrigidas com acentuacao e identificadores locais seguros padronizados em scripts | prioridade: media
- [ ] Estrutura: avaliar unificacao visual futura dos headers somente com aprovacao especifica | contexto: hoje Home, NeuroFlash e Obsidian preservam headers proprios por diferenca de identidade e comportamento | prioridade: baixa
- [ ] Visual: tornar constante a transparencia dos elementos no mobile em todas as paginas | contexto: corrigir a percepcao de escurecimento gradual durante a rolagem | prioridade: alta
- [ ] Assets: limpar os metadados embutidos de todas as imagens do projeto | contexto: padronizar os arquivos antes da publicacao e evitar carregar informacoes desnecessarias | prioridade: media
- [x] Visual: compactar o rodape para reduzir espacos em branco | contexto: rodape da raiz refinado com mecanica dimensional do NeuroFlash, mapa simplificado, copyright institucional e linha inferior em largura total sem perder legibilidade | prioridade: media
- [ ] Performance: estudar uma estrategia para aliviar a renderizacao de elementos fora da viewport | contexto: avaliar recursos nativos ou abordagem leve compativel com site estatico e `file:///` | prioridade: baixa
