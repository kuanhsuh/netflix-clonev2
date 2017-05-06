import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchMovie, fetchCast, fetchTrailer} from 'actions/index'
import Cast from './Components/Cast/Cast'
import './MovieShow.css'
import { withRouter } from 'react-router-dom'

class MovieShow extends Component {
  
  componentWillMount() {
    this.props.fetchMovie(this.props.match.params.id)
    this.props.fetchCast(this.props.match.params.id)
    this.props.fetchTrailer(this.props.match.params.id)
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.match.params.id !== this.props.match.params.id){
      this.props.fetchMovie(this.props.match.params.id)
      this.props.fetchCast(this.props.match.params.id)
      this.props.fetchTrailer(this.props.match.params.id)
    }
  }
  
  renderCasts(){
    let castsArray = [];
    this.props.casts
      .map((item, i) => {
        castsArray.push(<Cast item={item} key={i}/>)
      });
    return castsArray;
  }

  renderTrailers(){
    let trailersArray = []
    this.props.trailers.map((item, i)=>{
      trailersArray.push(
        <div key={i} className="col-sm-6">
          <iframe width="300" height="169" src={`https://www.youtube.com/embed/${item.key}?rel=0&amp;controls=0&amp;showinfo=0`} frameBorder="0" allowFullScreen></iframe>
        </div>
      )
    })
    return trailersArray;
  }
  
  render() {
    if(!this.props.movie){
    return <div>Loading</div>;
  }
    const {original_title, overview, vote_average, vote_count, release_date, poster_path} = this.props.movie
    return (
      <div>
        <section className="show">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 text-center">
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="..." />
              </div>
              <div className="col-sm-6">
                <h2>{original_title} ({release_date.substring(0,7)})</h2>
                <h3>Ratings</h3>
                <p>
                <span className="glyphicon glyphicon-heart" aria-hidden="true"></span> {vote_count}{' '}
                <span className="glyphicon glyphicon-star" aria-hidden="true"></span> {vote_average}
                </p>
                <h3>Overview</h3>
                <p>{overview}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="others">
          <div className="container">
            <div className="row">
              <h4>casts</h4>
            </div>
            <div className="row">
              {this.renderCasts()}
            
            </div>
          <div className="row">
            <h4>Trailers</h4>
          </div>
            <div className="row">
              {this.renderTrailers()}
            </div>
          </div>
        </section>

      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    movie: state.movie.data,
    casts: state.cast,
    trailers: state.trailers
  }
}

export default withRouter(connect(mapStateToProps, {fetchMovie, fetchCast, fetchTrailer})(MovieShow))

// export default withRouter(connect(mapStateToProps)(Something))
// import { withRouter } from 'react-router-dom'