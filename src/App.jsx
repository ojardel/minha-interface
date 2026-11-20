import { useState, useEffect } from 'react'
import Cabecalho from './componentes/Cabecalho.jsx'
import BarraFiltros from './componentes/BarraFiltros.jsx'
import ListaLivros from './componentes/ListaLivros.jsx'

export default function App() {
  const [livros, setLivros] = useState([])
  const [busca, setBusca] = useState('')
  const [categoria, setCategoria] = useState('Todas')
  const [ordenacao, setOrdenacao] = useState('titulo-asc')

  useEffect(() => {
    fetch('/dados.json')
      .then((resposta) => resposta.json())
      .then((dados) => setLivros(dados))
  }, [])

  const categoriasDisponiveis = [...new Set(livros.map((item) => item.categoria))]

  const livrosFiltrados = livros
    .filter((livro) => {
      const termo = busca.toLowerCase().trim()
      const correspondeBusca =
        livro.titulo.toLowerCase().includes(termo) ||
        livro.autor.toLowerCase().includes(termo)
      const correspondeCategoria =
        categoria === 'Todas' || livro.categoria === categoria
      return correspondeBusca && correspondeCategoria
    })
    .sort((a, b) => {
      if (ordenacao === 'nota-desc') return b.nota - a.nota
      if (ordenacao === 'ano-desc') return b.ano - a.ano
      return a.titulo.localeCompare(b.titulo)
    })

  return (
    <div className="app-container">
      <Cabecalho
        titulo="Estante Tech"
        subtitulo="Catálogo de leituras em tecnologia e ficção científica"
      />

      <BarraFiltros
        busca={busca}
        aoMudarBusca={setBusca}
        categoria={categoria}
        aoMudarCategoria={setCategoria}
        categoriasDisponiveis={categoriasDisponiveis}
        ordenacao={ordenacao}
        aoMudarOrdenacao={setOrdenacao}
      />

      <p className="resumo-resultados">
        Exibindo {livrosFiltrados.length} de {livros.length} livros
      </p>

      <ListaLivros livros={livrosFiltrados} />
    </div>
  )
}
