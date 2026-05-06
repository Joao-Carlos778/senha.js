# 🔐 Verificador de Força de Senha

Um script simples em JavaScript (Node.js) que analisa a força de uma senha diretamente pelo terminal.

---

## 📋 Como funciona

O script recebe uma senha como argumento e verifica se ela atende aos seguintes critérios:

| Critério | Requisito |
|---|---|
| ✅ Comprimento | Mínimo de 10 caracteres |README
| ✅ Símbolos | Deve conter `@` ou `$` |
| ✅ Misto | Deve ter letras maiúsculas e minúsculas |

---

## 🚀 Como usar

**Pré-requisito:** ter o [Node.js](https://nodejs.org/) instalado.

**Execute no terminal:**

```bash
node senha.js SuaSenha@123
```

**Exemplos de saída:**

```bash
# Senha muito curta
node senha.js abc
# → A sua senha é muito curta!

# Sem símbolos
node senha.js MinhasenhaLonga
# → Precisa incluir símbolos!

# Senha forte
node senha.js MinhaSenha@Segura
# → ok, senha forte!
```

---

## 🛠️ Tecnologias

- JavaScript (Node.js)
- `process.argv` para leitura de argumentos do terminal

---

## 💡 Aprendizados

Este projeto pratica:
- Leitura de argumentos via linha de comando com `process.argv`
- Manipulação de strings com `.length`, `.includes()`, `.toLowerCase()` e `.toUpperCase()`
- Estruturas condicionais com `if / else if`
