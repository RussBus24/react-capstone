var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../actions/index');
var browserHistory = require('react-router').browserHistory;

var Query = React.createClass({

    apiQuery: function(event) {
        event.preventDefault();
        var searchQuery = this.refs.queryString.value;
        console.log(searchQuery);
        this.props.searchMovie(searchQuery);
    },

    querySearch: function(event) {
        event.preventDefault();
        var query = this.refs.queryString.value;
        this.props.movieFind(query);
        browserHistory.push('/movie');
    },

    render: function() {

        return (
          <div className="movie-query">
            <p>Please enter a movie of your choice to search for.</p>
            <p>(Type full movie name if possible for best result)</p>
            <form id="movieQuery" onSubmit={this.querySearch}>
              <input
                type="text"
                name="movieQueryInput"
                ref="queryString"
              />
              <input type="submit" name="Submit" value="Find Movie!"/>
            </form>
          </div>
        );
    }
});

var mapStateToProps = function(state, props) {
  return {
    visibleRating: state.seeRating,
  };
};

var mapDispatchToProps = function(dispatch) {
  return {
    searchMovie: function(title){dispatch(actions.imdbQuery(title))},
    movieFind: function(query){dispatch(actions.imdbTest(query))}
  }
}

var Container = connect(mapStateToProps, mapDispatchToProps)(Query);

module.default = Container;

//Used for testing purposes.

module.exports = Query;
