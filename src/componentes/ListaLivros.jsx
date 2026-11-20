import CartaoLivro from './CartaoLivro.jsx'

export default function ListaLivros({ livros }) {
  if (livros.length === 0) {
    return (
      <div className="mensagem-vazia">
        <p>Nenhum livro encontrado com os filtros selecionados.</p>
      </div>
    )
  }

  return (
    <section className="grade-livros" aria-label="Lista de livros">
      {livros.map((livro) => (
        <CartaoLivro key={livro.id} livro={livro} />
      ))}
    </section>
  )
}
