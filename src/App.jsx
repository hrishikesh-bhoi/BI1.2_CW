import './App.css'
import AddMovieForm from "./components/AddMovieForm"
import MovieByTitle from './components/MovieByTitle'
import Movies from './components/Movies'

function App() {
  return (
    <div className='container'>
      <AddMovieForm />
      <Movies />
      <MovieByTitle title="Gully Boy" />
    </div>
  )
}

export default App
