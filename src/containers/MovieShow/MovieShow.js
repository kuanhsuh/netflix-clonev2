import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchMovie} from 'actions/index'


class MovieShow extends Component {
  
  componentWillMount() {
    console.log(this.props.match.params.id)
    this.props.fetchMovie(this.props.match.params.id)
  }
  
  render() {

    if(!this.props.movie){
    return <div>Loading</div>;
    }
    const {original_title, overview, vote_average, vote_count, release_date, poster_path} = this.props.movie
    return (
      <div>
        <h3>{original_title}</h3><br/>
        Overview:
        {overview} <br/>
        Vote-average: {vote_average}<br/>
        Vote-count: {vote_count}<br/>
        Release-Date: {release_date}<br/>
        Poster Paht: {poster_path}<br/>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {movie: state.movie.data}
}

export default connect(mapStateToProps, {fetchMovie})(MovieShow);