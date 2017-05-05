import React, {Component} from 'react'
import {Navbar, FormGroup} from 'react-bootstrap'
import {connect} from 'react-redux'
import {fetchSearch} from 'actions/index'
import Autosuggest from 'react-autosuggest'
import { Link, withRouter } from 'react-router-dom'
import './Nav.css'

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, {newValue}) => {
    this.setState({value: newValue});
    event.target.value && this
      .props
      .fetchSearch(event.target.value)
  };

  onSuggestionsFetchRequested = ({value}) => {
    const {searchQueries} = this.props
    const results = searchQueries.map(movie => {
      let temp = {}
      temp.id = movie.id
      temp.title = movie.title
      temp.img = movie.poster_path
      temp.year = (movie.release_date === "")
        ? "0000"
        : movie
          .release_date
          .substring(0, 4)
      return temp
    });
    this.setState({suggestions: results});
  }

  getSuggestionValue = (suggestion) => {
    return suggestion.title;
  };

  renderSuggestion = (suggestion) => {
    return (
      <Link to={`/movie/${suggestion.id}`}>
        <img src={`https://image.tmdb.org/t/p/w45${suggestion.img}`} className="searchResult__img" alt="..." />
        <div className="searchText">
          <div className="searchResult__name">
            {suggestion.title}
        </div>
            {suggestion.year}
        </div>
        <div className="clearfix"></div>
      </Link>
    );
  };

  onSuggestionsClearRequested = () => {
    this.setState({suggestions: []});
  };
  render() {
    const {value, suggestions} = this.state;

    // Autosuggest will pass through all these props to the input element.
    const inputProps = {
      placeholder: 'Enter a movie',
      value,
      onChange: this.onChange
    };
    return (
      <Navbar fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Netflix<small>(react-clone)</small></a>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Form pullRight>
          <FormGroup>
            <Autosuggest
              suggestions={suggestions}
              onSuggestionsFetchRequested={this
              .onSuggestionsFetchRequested
              .bind(this)}
              onSuggestionsClearRequested={this.onSuggestionsClearRequested}
              getSuggestionValue={this.getSuggestionValue}
              renderSuggestion={this.renderSuggestion}
              inputProps={inputProps}/>
          </FormGroup>
        </Navbar.Form>
      </Navbar>
    );
  }
}

function mapStateToProps(state) {
  return {searchQueries: state.search}
}

export default withRouter(connect(mapStateToProps, {fetchSearch})(Nav));
// export default withRouter(connect(mapStateToProps)(Something))
// import { withRouter } from 'react-router-dom'