# Refatoração e validação — 2026-09-07

Refatoração das seis páginas públicas de Essentia Health, NeuroFlash e Obsidian, mantendo HTML/CSS/JavaScript vanilla, publicação estática e aparência final. Não houve publicação nem alteração de domínio, hospedagem, conteúdo comercial ou textos públicos.

## Mudanças realizadas

- Scripts de página encapsulados; eliminados dois helpers não consumidos do header, nove variáveis CSS sem uso, regras repetidas/ineficazes e o alias redundante `media-cover-image`. Os dados institucionais comuns do rodapé agora têm uma única definição.
- Carrossel institucional guarda referências de links/indicadores, preserva `tabindex` original e mede o layout apenas quando o container muda, com agrupamento por quadro. Navegação manual circular e contagem responsiva foram preservadas.
- Hero NeuroFlash possui um único controle de autoplay, pausas por mouse/foco/visibilidade/viewport/redução de movimento, cancelamento de transições e tratamento de falha de imagem. As imagens adicionais são solicitadas ao navegar e precisam carregar e decodificar antes da transição. O intervalo de 8 segundos e as etapas de fade de 1 segundo permanecem.
- Obsidian inicia no topo quando não há hash e restaura a progressão visual de fade da cópia aprovada. A posição dos blocos é medida em cada atualização visual, preservando os limites de opacidade e a ordem de entrada; eventos de rolagem e resize são agrupados por quadro. Redução de movimento apresenta os elementos sem a animação de entrada.
- Imagens de preparo e formatos Obsidian usam lazy loading nativo e decodificação assíncrona. Abertura e hero continuam diretamente disponíveis no HTML.
- FAQ sincroniza a altura do item aberto após resize e carregamento de fontes; conserva apenas um item aberto e desativa a transição com redução de movimento.
- O espaço inicial do cabeçalho NeuroFlash é reservado enquanto o marcador está vazio, reduzindo o salto causado pelo include. Nenhuma altura foi imposta ao cabeçalho já renderizado.
- Reduzido o uso permanente de `will-change`. A reserva do track institucional foi mantida após a comparação identificar diferença de rasterização das imagens sem ela.

## Limpeza de arquivos

Excluído exclusivamente `obsidian/assets/obsidian-nome.jpg`: **3.481 bytes**. A busca não encontrou referência em páginas, CSS, scripts, metadados ou documentação. Foi uma exclusão direta autorizada, sem cópia de recuperação criada para esse arquivo. Não foram encontradas pastas vazias para excluir.

Preservados os 14 originais de `neuroflash/home/legado/`, as imagens atuais, o banner Obsidian antigo com registro histórico, a foto dos fundadores usada em Open Graph/Twitter e os ícones `-64.png` referenciados por nomes construídos no JavaScript. Uma checagem de SHA-256 confirmou 83 arquivos protegidos intactos, incluindo imagens, históricos HTML, CNAME, sitemap, robots, verificação Google e redirecionamento legado.

## Resultados locais

Medição em Chromium/Playwright, servidor HTTP local, contextos novos de navegador e larguras de 1440 e 390 pixels, com altura de 900 pixels. Comparação com cópias do código anterior, sem substituir arquivos do projeto durante os testes. Os bytes abaixo são recursos locais transferidos até o primeiro estado de rede ociosa, sem contar o HTML principal nem as fontes externas. Lazy loading pode produzir resultados diferentes conforme viewport, rede e navegador.

| Página | Largura | Bytes antes | Bytes depois | Variação |
| --- | ---: | ---: | ---: | ---: |
| Essentia Health | 1440 | 142.152 | 141.919 | −0,16% |
| NeuroFlash | 1440 | 1.149.505 | 933.279 | −18,81% |
| Obsidian | 1440 | 270.163 | 134.674 | −50,15% |
| Essentia Health | 390 | 204.686 | 204.453 | −0,11% |
| NeuroFlash | 390 | 394.348 | 394.410 | +0,02% |
| Obsidian | 390 | 270.163 | 271.175 | +0,37% |

O objetivo não foi reduzir todas as linhas de JavaScript: o controle de falhas, pausas e ciclo de vida acrescenta lógica. O ganho principal está em adiar downloads e evitar trabalho repetido. No percurso de rolagem Obsidian, chamadas de leitura de geometria feitas pelo JavaScript caíram de **93 para 6 no desktop** e de **87 para 3 no mobile**. Isso mede chamadas de geometria, não uma porcentagem de aumento da velocidade do site.

A reserva do cabeçalho reduziu o CLS observado no NeuroFlash: home desktop de 0,076 para 0,035; missão desktop de 0,050 para 0,009; FAQ desktop de 0,123 para 0,038. No mobile, home de 0,367 para 0,248, missão de 0,363 para 0,244 e FAQ de 0,662 para 0,519. Ainda existem deslocamentos durante a troca das fontes externas; esta rodada não elimina essa instabilidade preexistente nem altera a tipografia aprovada.

Os tempos absolutos de LCP e de trabalho total oscilaram entre execuções, sem melhora uniforme. Por isso, não se afirma um ganho geral de tempo nem uma pontuação Lighthouse. Foram usados PerformanceObserver e métricas do navegador, não uma execução de Lighthouse ou dados reais de produção.

## Verificações concluídas

- Capturas completas antes/depois das seis rotas em desktop e mobile, com renderização dos blocos adiados habilitada apenas para registrar a captura. Mesmas dimensões de página em todas as comparações; 10 capturas idênticas acima da tolerância de 5 níveis RGB. Nas outras duas, as diferenças ficaram em cerca de 0,002% (NeuroFlash desktop) e 0,033% (Obsidian desktop), localizadas em efeitos/rasterização.
- Texto renderizado, metadados, rótulos acessíveis e destinos dos links iguais antes/depois nas 12 combinações.
- Links internos das seis páginas retornando HTTP 200; redirecionamento de `/neuroflash/home/` funcionando; sem erros JavaScript e sem erros HTTP nas navegações normais.
- Ausência de overflow horizontal das seis páginas em 360, 768, 769, 899, 900, 901 e 1440 pixels. Carrossel institucional validado também em 390, 620, 621, 920, 921 e 1920 pixels, com 1/2/3 cards conforme o breakpoint e links ocultos fora da sequência de foco.
- Hero testada com autoplay real, foco, mouse, saída da viewport, redução de movimento, cliques rápidos, resize durante transição, resposta de imagem atrasada e erro de rede. O estado de aba oculta foi exercitado por simulação de `document.hidden` e `visibilitychange` no navegador sem janela; não equivale a uma verificação manual de troca de abas.
- Acesso inicial mobile ao NeuroFlash sem download das imagens exclusivas do desktop.
- FAQ abrindo/fechando, mantendo um item aberto e conteúdo sem corte em ambos os lados do breakpoint, inclusive após evento de carregamento de fontes.
- Intro, carrossel e redução de movimento Obsidian funcionando. Retorno pelo histórico do navegador restaurando a posição de rolagem real.
- Abertura direta dos seis arquivos HTML por `file://` sem erros de script e fallback Obsidian com JavaScript desabilitado verificados. A navegação por URLs limpas continua preferindo servidor estático.

Os scripts, capturas e relatórios brutos de QA ficam fora da árvore publicada, no diretório de artefatos desta tarefa. Não foram adicionadas dependências, etapa de build ou ferramentas de teste obrigatórias ao site. Os resultados são locais em Chromium; não representam Safari/Firefox, dispositivos físicos, cache/CDN ou métricas de produção.
