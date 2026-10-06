# Recompila o CSS (rode depois de mudar classes em index.html/main.js ou tokens em _src/input.css).
$raiz = Split-Path $PSScriptRoot -Parent
& "$raiz\..\_tools\tailwindcss.exe" -i "$raiz\_src\input.css" -o "$raiz\assets\css\styles.css" --minify
