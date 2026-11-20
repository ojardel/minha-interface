export default function BarraFiltros({
  busca,
  aoMudarBusca,
  categoria,
  aoMudarCategoria,
  categoriasDisponiveis,
  ordenacao,
  aoMudarOrdenacao,
}) {
  return (
    <section className="barra-controles" aria-label="Controles de busca e filtro">
      <div className="campo-controle">
        <label htmlFor="campo-busca">Buscar por título ou autor</label>
        <input
          id="campo-busca"
          type="text"
          placeholder="Ex: Duna, Robert Martin..."
          value={busca}
          onChange={(evento) => aoMudarBusca(evento.target.value)}
        />
      </div>

      <div className="campo-controle">
        <label htmlFor="select-categoria">Filtrar por categoria</label>
        <select
          id="select-categoria"
          value={categoria}
          onChange={(evento) => aoMudarCategoria(evento.target.value)}
        >
          <option value="Todas">Todas as categorias</option>
          {categoriasDisponiveis.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="campo-controle">
        <label htmlFor="select-ordenacao">Ordenar por</label>
        <select
          id="select-ordenacao"
          value={ordenacao}
          onChange={(evento) => aoMudarOrdenacao(evento.target.value)}
        >
          <option value="titulo-asc">Título (A–Z)</option>
          <option value="nota-desc">Maior avaliação</option>
          <option value="ano-desc">Mais recentes</option>
        </select>
      </div>
    </section>
  )
}
