Setup do Projeto

```shell
npm init -y
```

Configuração do Package.json

```shell
scripts
    start npx serve src
```

Organização do Projeto:

```plain
projeto/
    src/
        index.html
        style.css
        script.js
    package.json
```

Comandos para Associar CSS e HTML

```html
<link rel="stylesheet" href="style.css" />
<script src="script.js" defer></script>
```

JS DOM para o Exemplo Simples

```js
const input = document.getElementById('textInput');
const button = document.getElementById('validateBtn');
const messageArea = document.getElementById('messageArea');

// Adiciona o evento de clique ao botão
button.addEventListener('click', () => {
const value = input.value.trim();
```
