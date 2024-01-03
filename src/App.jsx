import { useState } from 'react';
import './App.css'
import { useEffect } from 'react';
import { getMovieList, searchMovie } from './data/api';

function App() {
  const [movieList, setMovieList] = useState([]);

  const imageUrl = import.meta.env.VITE_BASEIMGURL;

  useEffect(() => {
    getMovieList().then((value) => {
      setMovieList(value);
    });
  }, []);

  const PopularMovieList = () => {
    return movieList.map((movie, i) => {
      return <div key={i} className="movie-wrapper">
        <div className="movie-title">{movie.original_title}</div>
        <img className="movie-image" src={`${imageUrl}${movie.poster_path}`} />
        <div className="movie-date">{movie.release_date}</div>
        <div className="movie-rate">{movie.vote_average}</div>
      </div>
    })
  }

  const search = (q) => {
    if (q.length > 3) {
      searchMovie(q).then((movies) => {
        setMovieList(movies);
      });
    }
  }

  return (
    <div className='App'>
      <h1>Movie Mania</h1>
      <input type="text" className="movie-search" placeholder='Cari film kesayangan anda..' onChange={({ target }) => search(target.value)} />
      <div className="movie-container">

        <PopularMovieList />
      </div>
    </div>
  )
}

export default App
