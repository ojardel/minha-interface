# Requisitos da Interface React — Estante Tech

## Requisitos Funcionais (RF)
- **RF01:** A interface deve carregar e exibir uma coleção de livros a partir do arquivo `public/dados.json` em formato de cartões.
- **RF02:** Cada cartão deve exibir título, autor, ano de publicação, categoria, nota de avaliação e uma breve descrição.
- **RF03:** O usuário deve poder buscar livros em tempo real digitando parte do título ou do nome do autor.
- **RF04:** O usuário deve poder filtrar os livros por categoria através de um menu seletor gerado dinamicamente a partir dos dados.
- **RF05:** O usuário deve poder ordenar os livros exibidos por título (A–Z), maior avaliação ou ano mais recente.
- **RF06:** A tela deve exibir um contador de quantos livros estão visíveis em relação ao total e mostrar uma mensagem amigável caso nenhum livro corresponda aos filtros.

## Requisitos Não Funcionais (RNF)
- **RNF01:** Desenvolvida exclusivamente com React e Vite em JavaScript puro (sem TypeScript, Tailwind ou bibliotecas externas de UI).
- **RNF02:** Arquitetura baseada em árvore de componentes com fluxo unidirecional de dados (props descendo e eventos subindo por funções).
- **RNF03:** Cada componente deve residir em seu próprio arquivo dentro de `src/componentes/`, com nome iniciado em letra maiúscula.
- **RNF04:** Estilização feita em arquivo CSS separado (`src/estilos.css`) utilizando `className`, sem estilos inline no JSX.
- **RNF05:** Layout responsivo que funciona sem quebra horizontal em telas estreitas (smartphones a partir de 360px).
