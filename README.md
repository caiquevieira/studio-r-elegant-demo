# Studio R Elegant — landing page

Clone estático (HTML + Tailwind v4 compilado + JS puro) da página criada no Lovable
(`caiquevieira/studio-elegante-booking`). Mesmo conteúdo e leiaute, com melhorias de
performance, SEO e acessibilidade.

- **Raiz do repositório = raiz do site.** O CSS compilado (`assets/css/styles.css`) está versionado, então não há build no deploy.
- Fonte do CSS: `_src/input.css`. Recompilar: `powershell _src/build.ps1`. Depois de mudar CSS/JS, incremente o `?v=` no `index.html`.
- Imagens originais ficam em `_raw/` (fora do Git); `assets/img/` só tem as versões otimizadas.
- Demo: https://caiquevieira.github.io/studio-r-elegant-demo/ (`noindex` ativo).

## Publicar na Hostinger (Git) depois do domínio
1. hPanel → Avançado → **Git** → repositório `https://github.com/caiquevieira/studio-r-elegant-demo.git`, branch `main`, diretório `public_html` (vazio).
2. Repositório privado: adicione a chave SSH exibida pela Hostinger em Settings → Deploy keys (somente leitura) e use a URL SSH.
3. Ative o deploy automático (webhook) se quiser atualizar a cada push.
4. **Antes de ir ao ar:**
   - remova os blocos `DEMO` do `index.html` e do `.htaccess`;
   - troque a URL da demo pelo domínio em `canonical`, `og:url` e `og:image` (`index.html`);
   - `robots.txt` → `User-agent: *` / `Allow: /` / `Sitemap: https://SEU-DOMINIO/sitemap.xml` e crie o `sitemap.xml`.
