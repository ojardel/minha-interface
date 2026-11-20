# Registro do Processo e Prompts (8 Passos)

## Passo 1 e 2 — Requisitos e Divisão de Componentes (antes do código)
Definidos os requisitos RF01 a RF06 e RNF01 a RNF05, dividindo a tela em 4 componentes:
- `Cabecalho` (1 uso)
- `BarraFiltros` (1 uso)
- `ListaLivros` (1 uso)
- `CartaoLivro` (reaproveitado N vezes via `.map()` com `key` e `props` distintas)

## Passo 3 e 4 — Insumos e Inicialização do Projeto
Criado o projeto base com `npm create vite@latest`, instalado com `npm install` e validado no navegador com `npm run dev` antes de gerar código com IA.

## Passo 5 — Geração em Pedaços
**Prompt utilizado:**
> Contexto: Projeto React + Vite recém-criado com `public/dados.json` contendo array de livros (`id`, `titulo`, `autor`, `categoria`, `ano`, `nota`, `descricao`).
> Tarefa: Crie os componentes `Cabecalho.jsx`, `BarraFiltros.jsx`, `CartaoLivro.jsx`, `ListaLivros.jsx`, o `App.jsx` e o `estilos.css` para listar, buscar, filtrar e ordenar os livros.
> Regras: Só React e Vite, em JavaScript. Nada de TypeScript, Tailwind, router, gerenciador de estado ou biblioteca de componentes. Estilo arquitetural: árvore de componentes, dados descendo por props em uma direção só. Um componente por arquivo, dentro de `src/componentes/`. CSS em arquivo separado, com `className`. Não invente campo de dado.

## Passo 6 — Ajustes e Correções
**Ajuste realizado:** Garantir que a lista de categorias no `<select>` não ficasse fixa no código, sendo extraída dinamicamente dos itens carregados do `dados.json` usando `new Set()`.

## Passo 7 — Revisão Cruzada
**Prompt de revisão enviado em nova conversa:**
> Você vai revisar uma interface React que OUTRA PESSOA escreveu. Confira requisito por requisito (RF01 a RF06 e RNF01 a RNF05) e diga, para cada um, se foi cumprido, não cumprido ou cumprido pela metade, apontando o arquivo e a linha. Depois liste os problemas que achou fora dos requisitos. Não reescreva a interface. Não elogie.

**Resultado da revisão:** Todos os requisitos foram cumpridos; verificado o uso correto de `key={livro.id}` em `ListaLivros.jsx` e ausência de erros no console.

## Passo 8 — Conferência Final
Testado localmente com `npm run dev` em janela normal e modo responsivo (375px de largura) no navegador, sem erros ou avisos vermelhos no console.
