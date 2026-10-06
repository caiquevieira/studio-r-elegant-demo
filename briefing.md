# Briefing — Studio R Elegant by Andréa Morais

Origem: clone da LP do Lovable (`caiquevieira/studio-elegante-booking`, https://studio-elegante-booking.lovable.app).

## Dados do negócio (do conteúdo da LP original)
- Nome: Studio R Elegant by Andréa Morais
- Serviços: cabelo e colorimetria, unhas, sobrancelhas/cílios/facial, maquiagem, depilação/corpo, podologia (Cris Lacerda e Jaqueline Maltaroli)
- Unidades: Jaguaré (Av. General Mac Arthur, 1187 - Jaguaré, São Paulo - SP) e Osasco (Av. Santo Antônio, 1453 - Vila Osasco, Osasco - SP)
- WhatsApp: +55 11 97268-7788 (as duas unidades)
- Agendamento direto Jaguaré: https://sheerme.com/g/studio-r-jaguare-60773
- Instagram: https://www.instagram.com/studior.elegant/

## Identidade visual
Rosa blush, dourado champagne, grafite e branco. Fontes: Italiana (títulos) e Manrope (texto). Tokens em `_src/input.css`.

## Avaliações (Google, coladas pelo operador em 2026-10-06)
Usadas na seção de avaliações, com nome + inicial do sobrenome: Daniele Lacerda, Mariana Curione, Marina Trez,
Rebecca Moreno, Carolina Ortiz, Karina Mea Marcos Botelho. A colagem não traz as notas em estrelas: não exibir nota.

## 7. Plano de design (redesign aprovado pelo operador em 2026-10-06: manter cores e fotos; tipografia livre)

- **Paleta (inalterada) + um tom derivado para contraste:**
  rosa `#b17277` (primary) · rosa profundo `#8d4e53` (mesmo matiz, mais escuro: botões e textos pequenos) ·
  champanhe `#eeceae` (secondary) · grafite `#201917` (foreground) · nude `#f4e7d9` · blush `#ffdede` (accent) · fundo `#fef9f8`.
- **Contraste WCAG AA:** branco/rosa profundo 6,28 · rosa profundo/fundo 6,00 · rosa profundo/nude 5,17 ·
  grafite/champanhe 11,63 · texto suave `#695a57`/fundo 6,31. (Branco sobre o rosa original dava 3,79 — por isso os botões usam o rosa profundo.)
- **Favicon:** o logo (círculo rosa com o nome); em 16×16 vira só a mancha rosa — aceitável até haver um monograma.
- **Tipografia:** Jost (300–600), uma família só, ecoando o "STUDIO R" geométrico do logo. Títulos em 300 (leves e grandes);
  o H1 em caixa alta com espaçamento largo, como o letreiro do logo. Corpo em 400, entrelinha 1,7. A parte manuscrita fica a cargo do próprio logo.
- **Leiaute:** coluna única de conteúdo alinhada à esquerda (unidades e CTA final centralizados).
  ```
  [logo]   Serviços  Andréa  Espaço  Galeria  Avaliações  Unidades   [WA Agendar]
  +---------------------------------+--------------------------------+
  | nude                            |                                |
  | STUDIO R ELEGANT (pequeno)      |   foto do hero, sangrada       |
  | SUA BELEZA,                     |   (altura total da dobra)      |
  | SUA ASSINATURA.  (H1 gigante)   |                                |
  | texto curto                     |                                |
  | [WA Jaguaré] [WA Osasco]        |                                |
  +---------------------------------+--------------------------------+
  Serviços: grade 3×2 de cards (ícone, nome, explicação, "Agendar" com ícone do WhatsApp)
  Andréa (fundo grafite) → Podologia → Espaço → Galeria → Avaliações (colunas) → Unidades → CTA → Rodapé com logo
  ```
- **Princípios:** o elemento ousado é o H1 gigante em Jost leve, em caixa alta, como o letreiro do salão; todo o resto é calmo.
  Sem rótulos em caixa alta acima de cada título, sem numeração 01/02 (os serviços não são uma sequência), sem selos decorativos.
  Todo botão que abre o WhatsApp mostra o ícone do WhatsApp. Movimento só em resposta ao usuário.

## Pendências da contratação
- {{RAZAO_SOCIAL}} / {{CNPJ}}
- {{DOMINIO}} e acesso à Hostinger
- {{PIXEL}} / GA4
- Autorização de uso das imagens
- Política de privacidade + banner de consentimento (necessários ao ativar GA4/Pixel; os links já têm `data-track`)
- CEP das unidades e horário de funcionamento (para o JSON-LD)

## Histórico
- 2026-10-06: `demo-v3` — redesign (seção 7): Jost, cards de serviços com ícones, ícone do WhatsApp em todos os CTAs, avaliações do Google, rodapé com logo e crédito Underline Lab, logos transparentes (preto/branco).
- 2026-10-06: `demo-v2` — imagens em WebP (2,3 MB → 0,9 MB), fontes auto-hospedadas, SEO (OG, JSON-LD, favicons), acessibilidade e mensagens de WhatsApp por origem. Visual inalterado.
- 2026-10-06: clone publicado em https://caiquevieira.github.io/studio-r-elegant-demo/ (tag `demo-v1`). Aprovação do cliente: pendente.
