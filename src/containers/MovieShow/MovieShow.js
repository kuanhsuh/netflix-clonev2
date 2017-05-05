import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchMovie} from 'actions/index'


class MovieShow extends Component {
  
  componentWillMount() {
    this.props.fetchMovie(this.props.match.params.id)
  }
  
  render() {
    if(!this.props.movie){
    return <div>Loading</div>;
  }
  console.log(this.props.movie)
    const {original_title, overview, vote_average, vote_count, release_date, poster_path} = this.props.movie
    return (
      <div>
        <section className="show">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 text-center">
                <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt="..." />
              </div>
              <div className="col-sm-6">
                <h2>{original_title}({release_date})</h2>
                <h3>Ratings</h3>
                <p>
                <span className="glyphicon glyphicon-heart" aria-hidden="true"></span> {vote_count}
                <span className="glyphicon glyphicon-star" aria-hidden="true"></span> {vote_average}
                </p>
                <h3>Overview</h3>
                <p>{overview}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {movie: state.movie.data}
}

export default connect(mapStateToProps, {fetchMovie})(MovieShow);