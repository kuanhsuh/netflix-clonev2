import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchUpComing } from 'actions/index'
import { Link } from 'react-router-dom'
import Header from 'components/Header/Header'
import './MovieList.css'
class MovieList extends Component {
  
  componentWillMount() {
    this.props.fetchUpComing()
  }

  renderUpcomingMovies(movies){

    if(movies.upcoming.length === 0){
    return <div></div>;
    }
    let moviesArray = []
    movies.upcoming[0].map((movie,i)=>{
      moviesArray.push(
            
    <div key={movie.id} className="col-sm-6 col-md-3">
      <Link to={`/movie/${movie.id}`}>
        <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="..." />
      </Link>
    </div>
      )
    })
    return moviesArray
  }
  
  render() {
    const {upcomingMovies} = this.props

    return (
      <div>
      <Header />
      <section className="upcoming">
        <div className="container-fluid">
          <h4>Upcoming Movies</h4>
            <div className="row">
              {this.renderUpcomingMovies(upcomingMovies)}
            </div>
        </div>
      </section>
      </div>
    );
  }
}


function mapStateToProps(state){
  return {
    upcomingMovies: state
  }
}

export default connect(mapStateToProps, {fetchUpComing})(MovieList);