# Netflix React Clone

- demo: http://netflix-clonev2.surge.sh/


### User Story:

- User can search for movies 
- User can see upcoming movies for display
- Search Should have autosuggest
- Movie Show page should have movie details, casts, trailers

Snippets

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


    onSuggestionSelected = (event , { suggestion, history }) => {
    event.preventDefault();
    // debugger;
    <Redirect to={`/movie/${suggestion.id}`} push />
    this.context.router.history.push('/movie/'+ suggestion.id)
    // this.props.history.push('/movie/'+ suggestion.id)
    this.setState({ value: ''});
  }