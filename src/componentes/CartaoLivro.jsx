export default function CartaoLivro({ livro }) {
  return (
    <article className="cartao-livro">
      <div>
        <div className="cartao-topo">
          <span className="etiqueta-categoria">{livro.categoria}</span>
          <span className="cartao-nota">★ {livro.nota.toFixed(1)}</span>
        </div>
        <h2>{livro.titulo}</h2>
        <p className="cartao-autor">
          {livro.autor} • {livro.ano}
        </p>
      </div>
      <p className="cartao-descricao">{livro.descricao}</p>
    </article>
  )
}
