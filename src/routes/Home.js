//영화 앱 화면

import React from 'react';
import axios from 'axios';
import Movie from '../components/Movies.js';
import './Home.css';

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  }

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    this.setState({ movies, isLoading: false }); // movies: movies 축약
  }

  componentDidMount(){
    // 영화 데이터 로딩
   this.getMovies();
  }

  render(){
    const { isLoading, movies } = this.state;
    return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader-text">Loading...</span>
        </div>
        ) : (
        <div className="movies">
          {movies.map(movie => (
        <Movie
          key={movie.id}
          id={movie.id} 
          year={movie.year}
          title={movie.title}
          summary={movie.summary}
          poster={movie.medium_cover_image}
          genres={movie.genres}>
          </Movie>
        ))}
      </div>
        )}
    </section>
    )
  }
}

export default Home;
