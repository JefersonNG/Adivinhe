# 🎯 Adivinhe a Palavra

Um jogo simples e divertido de adivinhação de palavras, desenvolvido com **React + TypeScript + Vite**. O objetivo é descobrir a palavra secreta sugerida por uma dica, digitando letras até acertar — ou até acabar o número de tentativas.

---

## 🧠 Como funciona

- Uma palavra é escolhida aleatoriamente
- O jogador recebe uma **dica** relacionada à palavra
- A cada rodada, o jogador pode digitar **uma letra por vez**
- Letras corretas revelam partes da palavra
- Letras erradas contam como tentativa
- O jogo termina quando:
  - ✅ Todas as letras da palavra forem descobertas
  - ❌ O limite de tentativas for atingido

---

## 🚀 Tecnologias utilizadas

- **React 19**
- **TypeScript**
- **Vite**
- **CSS Modules**

---

## 📂 Estrutura do projeto

```bash
src/
├── components/       # Componentes reutilizáveis (Header, Button, Input, etc)
├── utils/            # Dados e regras do jogo (palavras, tipagens)
├── App.tsx           # Componente principal
├── main.tsx          # Ponto de entrada da aplicação
└── app.module.css    # Estilos globais do App
```

---

## ▶️ Como rodar o projeto

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd adivinhe
```

### 2. Instale as dependências

```bash
npm install
# ou
pnpm install
# ou
yarn
```

### 3. Rode o projeto em ambiente de desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em:

```
http://localhost:5173
```

---

## 🏗️ Build para produção

```bash
npm run build
```

Para visualizar o build localmente:

```bash
npm run preview
```

---

## ⚙️ Regras do jogo

- Apenas **uma letra por vez** pode ser digitada
- Números e símbolos não são aceitos
- Letras repetidas não são contabilizadas
- O número máximo de tentativas é baseado no tamanho da palavra + margem extra

---

## ✨ Possíveis melhorias

- 🔊 Efeitos sonoros
- 🎨 Animações ao acertar/errar letras
- ⏱️ Modo contra o tempo
- 🏆 Sistema de pontuação acumulativa
- 💾 Persistência de score no `localStorage`
- 📱 Teclado virtual

---

## 📄 Licença

Este projeto é apenas para fins educacionais e aprendizado.

---

Feito com ❤️ usando React e TypeScript

