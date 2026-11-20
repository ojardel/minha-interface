# Insumos do Projeto

## 1. Dados (`public/dados.json`)
- **Origem:** Elaborados manualmente para compor um catálogo de 6 livros de engenharia de software e ficção científica.
- **Campos utilizados:** `id` (numérico), `titulo` (texto), `autor` (texto), `categoria` (texto), `ano` (numérico), `nota` (numérico) e `descricao` (texto).

## 2. Referências Visuais e Paleta de Cores
- **Inspiração:** Estrutura de cartões e cabeçalho limpo inspirada no projeto de exemplo da disciplina (Zênite em React).
- **Paleta de cores definida:**
  - Fundo da página: `#f4f6f9` (cinza claro neutro)
  - Superfície dos cartões: `#ffffff` (branco)
  - Destaque principal (cabeçalho e etiquetas): `#1e3a8a` (azul escuro)
  - Texto principal: `#1f2937` e texto secundário: `#6b7280`
- **Tipografia:** Pilha de fontes nativas do sistema (`system-ui, -apple-system, sans-serif`) para carregamento imediato sem dependências externas.

## 3. Restrições Técnicas Impostas à IA
- Uso estrito de React + Vite em JavaScript.
- Proibição de TypeScript, Tailwind CSS, roteadores ou bibliotecas de componentes prontos.
- Proibição de inventar campos não existentes no `dados.json`.
