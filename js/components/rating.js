var React = require('react');
var connect = require('react-redux').connect;
//var ReactBootstrapSlider = require("react-bootstrap-slider");
//var Slider = require('bootstrap-slider');

var actions = require('../actions/index');
var browserHistory = require('react-router').browserHistory;

var Rating = React.createClass({

    getInitialState() {
      return {
        violence: 0,
        language: 0,
        sensuality: 0
      };
    },

    violenceRate: function(event) {
        console.log(event.target.value);
        this.setState({
        violence: event.target.value
      });
        this.props.setViolenceRate(event.target.value);
    },

    languageRate: function(event) {
        console.log(event.target.value);
        this.setState({
        language: event.target.value
      });
        this.props.setLanguageRate(event.target.value);
    },

    sensualityRate: function(event) {
      console.log(event.target.value);
      this.setState({
        sensuality: event.target.value
      });
        this.props.setSensualityRate(event.target.value);
    },

    sendRating: function(event) {
      event.preventDefault();
      var total = parseInt(+this.state.violence + +this.state.language + +this.state.sensuality);
      var average = (total)/4;
      console.log(average);
      this.props.submitRating(this.state.violence);
      browserHistory.push('/results');
    },

    render: function() {

        return (
            <div className="movie-rating">
            <h1>{this.props.movieTitle} ({this.props.movieYear})</h1>
            <h2>Rated: {this.props.movieRating}</h2>
              <h2 color="#fff">Rate movie below on each category</h2>
              <h3><span id="ex18-label-1" className="hidden">Violence</span></h3>
              <form>
                <input type="radio" name="violence" value="1" onChange={this.violenceRate} />Low
                <input type="radio" name="violence" value="2" onChange={this.violenceRate} />Medium
                <input type="radio" name="violence" value="3" onChange={this.violenceRate} />High
                <input type="radio" name="violence" value="4" onChange={this.violenceRate} />OMG!
              </form>
              <h3><span id="ex18-label-1" className="hidden">Language</span></h3>
              <form>
                <input type="radio" name="language" value="1" onChange={this.languageRate} />Low
                <input type="radio" name="language" value="2" onChange={this.languageRate} />Medium
                <input type="radio" name="language" value="3" onChange={this.languageRate} />High
                <input type="radio" name="language" value="4" onChange={this.languageRate} />OMG!
              </form>
              <h3><span id="ex18-label-1" className="hidden">Sensuality</span></h3>
              <form>
                <input type="radio" name="sensuality" value="1" onChange={this.sensualityRate} />Low
                <input type="radio" name="sensuality" value="2" onChange={this.sensualityRate} />Medium
                <input type="radio" name="sensuality" value="3" onChange={this.sensualityRate} />High
                <input type="radio" name="sensuality" value="4" onChange={this.sensualityRate} />OMG!
               </form>
                <form onSubmit={this.sendRating}>
              <p><input type="submit" name="Submit" value="Submit Rating"/></p>
                </form>
            </div>
        );
    }
});

var mapStateToProps = function(state, props) {
  return {
    violenceRating: state.violenceRating,
    languageRating: state.languageRating,
    sensualityRating: state.sensualityRating,
    movieTitle: state.movieTitle,
    movieYear: state.movieYear,
    movieRating: state.movieRating
  };
};

var mapDispatchToProps = function(dispatch) {
  return {
    setViolenceRate: function(rating){dispatch(actions.violenceRating(rating))},
    setLanguageRate: function(rating){dispatch(actions.languageRating(rating))},
    setSensualityRate: function(rating){dispatch(actions.sensualityRating(rating))},
    submitRating: function(query){dispatch(actions.rateResult(query))}
  };
};

var Container = connect(mapStateToProps, mapDispatchToProps)(Rating);

module.default = Container;

//Used for testing purposes.

module.exports = Rating;
