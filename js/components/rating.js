var React = require('react');
var connect = require('react-redux').connect;

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
        if (this.state.violence == 0 || this.state.language == 0 || this.state.sensuality == 0) {
            alert("You need to select a rating for each category.");
        }
        else {
            var total = parseInt(+this.state.violence + +this.state.language + +this.state.sensuality);
            var average = (total) / 4;
            console.log(average);
            this.props.submitRating(average);
            browserHistory.push('/results');
        }
    },

    render: function() {

        return (
            <div className="movie-rating">
                <h1>{this.props.movieTitle} ({this.props.movieYear})</h1>
                <h2>Rated: {this.props.movieRating}</h2>
                <h2 color="#fff">Rate movie below on each category</h2>
                <h3><span>Violence</span></h3>
                <form className="format">
                    <input className="option-input radio" type="radio" name="violence" value="1" onChange={this.violenceRate} />Low
                    <input id="medium" className="option-input radio" type="radio" name="violence" value="2" onChange={this.violenceRate} />Medium
                    <input id="high" className="option-input radio" type="radio" name="violence" value="3" onChange={this.violenceRate} />High
                    <input id="omg" className="option-input radio" type="radio" name="violence" value="4" onChange={this.violenceRate} />OMG!
                </form>
                <h3><span>Language</span></h3>
                <form className="format">
                    <input className="option-input radio" type="radio" name="language" value="1" onChange={this.languageRate} />Low
                    <input id="medium" className="option-input radio" type="radio" name="language" value="2" onChange={this.languageRate} />Medium
                    <input id="high" className="option-input radio" type="radio" name="language" value="3" onChange={this.languageRate} />High
                    <input id="omg" className="option-input radio" type="radio" name="language" value="4" onChange={this.languageRate} />OMG!
                </form>
                <h3><span>Sensuality</span></h3>
                <form className="format">
                    <input className="option-input radio" type="radio" name="sensuality" value="1" onChange={this.sensualityRate} />Low
                    <input id="medium" className="option-input radio" type="radio" name="sensuality" value="2" onChange={this.sensualityRate} />Medium
                    <input id="high" className="option-input radio" type="radio" name="sensuality" value="3" onChange={this.sensualityRate} />High
                    <input id="omg" className="option-input radio" type="radio" name="sensuality" value="4" onChange={this.sensualityRate} />OMG!
                </form>
                <form className="submit" onSubmit={this.sendRating}>
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

module.exports = Container;

//Used for testing purposes.

//module.exports = Rating;
