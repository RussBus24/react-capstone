var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../actions/index');
var Title = require('./title');
var Query = require('./query');
var Rating = require('./rating');
var Result = require('./result');

var Main = React.createClass({

    componentDidMount: function() {
      var query = 'Braveheart';
        this.props.imdbTest(query);
        //console.log(this.props.movieTitle);
    },

    render: function() {

        return (
            <div>
                <Title />

                <Query />

                {this.props.movie?<Rating />:''}

                {this.props.result?<Result />:''}
            </div>
        );
    }

});

var mapStateToProps = function(state, props) {
    return {
        movie: state.movie,
        result: state.result,
        movieTitle: state.movieTitle,
        movieYear: state.movieYear,
        movieRating: state.movieRating
    };
};

var mapDispatchToProps = function(dispatch) {
    return {
        imdbTest: function(query){dispatch(actions.imdbTest(query))}
    };
};

var Container = connect(mapStateToProps, mapDispatchToProps)(Main);

module.exports = Container;

//module.exports = Main;
