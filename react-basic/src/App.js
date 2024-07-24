import React, {useState, useEffect} from 'react';
import Movie from './components/Movie';
import MovieForm from './components/MovieForm';
import Navbar from './components/Navbar';

function App() {
  const [movies, setMovies] = useState([]);

  const removeMovie = (id) => {
    setMovies(movies.filter( movie => {
      return movie.id !== id;
    }));
  };

  const renderMovies = movies.length ? movies.map(movie => {
    return (
      <Movie movie={movie} key={movie.id} removeMovie={removeMovie}/>
    );
  }) : "추가된 영화가 없습니다.";
  // 자식 컴포넌트에 props로 넘겨서 movies를 갱신한다.
  const addMovie = (movie) => {
    setMovies([...movies, movie]) // 구조분해 할당 destructuring movies에 추가
  };
  return (
    <div className="App">
      {/* <Navbar /> 20240724 router를 해볼려는데 에러가 나서 못해봄 */}
      <h1>Movie list</h1>
      <MovieForm addMovie={addMovie}/>
      {renderMovies}
    </div>
  );
}

export default App;
