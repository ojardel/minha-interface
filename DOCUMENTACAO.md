# Documentação da Interface React — Estante Tech

## 1. O que é a interface React
Uma aplicação web de catálogo de livros ("Estante Tech") que exibe uma coleção de obras de tecnologia e ficção científica em cartões com busca, filtro por categoria e ordenação, servindo para leitores organizarem e consultarem recomendações de leitura.

## 2. Como instalar e rodar
No terminal, dentro da pasta raiz do projeto:
1. Instalar as dependências: `npm install`
2. Iniciar o servidor de desenvolvimento: `npm run dev`
3. Acessar no navegador o endereço: `http://localhost:5173/`
4. (Opcional para publicação) Gerar versão final: `npm run build`

## 3. Tecnologias e versões instaladas
- **Node.js:** v26.1.0
- **npm:** 11.13.0
- **Pacotes do projeto (`npm list --depth=0`):**
  - `react`: 19.3.1 — biblioteca principal para criação da interface e gerenciamento de estado (`useState`, `useEffect`).
  - `react-dom`: 19.3.1 — renderiza os componentes React no DOM do navegador.
  - `vite`: 6.4.6 — servidor de desenvolvimento local e empacotador que traduz JSX para JavaScript padrão.
  - `@vitejs/plugin-react`: 4.7.0 — plugin oficial do Vite para suporte a React e atualização rápida (Fast Refresh).

## 4. Estilo arquitetural e padrões declarados
- **Frase declarada no prompt:** *"Estilo arquitetural: árvore de componentes, dados descendo por props em uma direção só. Nada de componente mexendo direto em outro."*
- **O que isso evitou:** Evitou acoplamento direto entre componentes irmãos (como `BarraFiltros` tentando alterar `ListaLivros` diretamente) e garantiu que todo o estado permanecesse centralizado no `App.jsx`.
- **Padrões aplicados:** Lista com `key` (`ListaLivros.jsx`), separação entre componente contêiner com estado (`App.jsx`) e componentes de apresentação (`CartaoLivro.jsx`, `Cabecalho.jsx`, `BarraFiltros.jsx`).

## 5. Lista de componentes
- `Cabecalho.jsx`: exibe o título e o subtítulo da aplicação no topo da página.
- `BarraFiltros.jsx`: renderiza os campos controlados de busca por texto, seleção de categoria e ordenação, enviando eventos para o componente pai.
- `ListaLivros.jsx`: recebe a lista filtrada de livros e renderiza a grade de cartões ou uma mensagem de lista vazia.
- `CartaoLivro.jsx`: **componente usado mais de uma vez** (uma instância para cada livro da lista, recebendo `props` diferentes a cada uso) para exibir os detalhes individuais de cada obra.

## 6. Ambiente de desenvolvimento
- **Sistema Operacional:** Windows 11
- **Editor de Código:** Visual Studio Code
- **Navegador:** Google Chrome
- **Versão do Node:** v26.1.0

## 7. Ferramenta de IA utilizada
- **Ferramenta:** Gemini (Google)
- **Data de uso:** Novembro de 2026
