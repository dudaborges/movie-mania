import MovieCard from '../components/MovieCard'
import '../styles/sections/catalog.css'

function Catalog() {
  return (
    <section className='padding-50'>
        <div className='container-catalog'>
            <MovieCard
            srcImg='https://www.vitrinefilmes.com.br/wp-content/uploads/2021/09/ArthurRambo_PtBr-2-1.jpg'
            title='Titulo'
            />
            <MovieCard
            srcImg='https://www.vitrinefilmes.com.br/wp-content/uploads/2021/09/ArthurRambo_PtBr-2-1.jpg'
            title='Titulo'
            />
            <MovieCard
            srcImg='https://www.vitrinefilmes.com.br/wp-content/uploads/2021/09/ArthurRambo_PtBr-2-1.jpg'
            title='Titulo'
            />
            <MovieCard
            srcImg='https://www.vitrinefilmes.com.br/wp-content/uploads/2021/09/ArthurRambo_PtBr-2-1.jpg'
            title='Titulo'
            />
            <MovieCard
            srcImg='https://www.vitrinefilmes.com.br/wp-content/uploads/2021/09/ArthurRambo_PtBr-2-1.jpg'
            title='Titulo'
            />
        </div>
    </section>
  )
}

export default Catalog
