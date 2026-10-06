# Studio R Elegant — landing page

Clone estático (HTML + Tailwind v4 compilado + JS puro) da página criada no Lovable
(`caiquevieira/studio-elegante-booking`). Mesmo conteúdo, imagens e leiaute.

- **Raiz do repositório = raiz do site.** O CSS compilado (`assets/css/styles.css`) já está versionado, então não há build no deploy.
- Fonte do CSS: `_src/input.css`. Para recompilar: `powershell _src/build.ps1`.
- Demo: GitHub Pages (`noindex` ativo).

## Publicar na Hostinger (Git) depois do domínio
1. hPanel → Avançado → **Git** → repositório `https://github.com/caiquevieira/studio-r-elegant-demo.git`, branch `main`, diretório `public_html` (vazio).
2. Repositório privado: adicione a chave SSH exibida pela Hostinger em Settings → Deploy keys (somente leitura) e use a URL SSH.
3. Ative o deploy automático (webhook) se quiser atualizar a cada push.
4. **Antes de ir ao ar**, remova o bloco `DEMO` (`<!-- DEMO:INICIO -->…FIM`) do `index.html` e do `.htaccess`, e troque o `robots.txt` por `User-agent: *` / `Allow: /` + `Sitemap: https://SEU-DOMINIO/sitemap.xml`.
