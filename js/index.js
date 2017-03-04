var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;

var store = require('./store');
var Main = require('./components/main');
var Router = require('react-router').Router;
var BrowserHistory = require('react-router').browserHistory;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Rating = require('./components/rating');
var Result = require('./components/result');
var Home = require('./components/home');

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <Provider store={store}>
            <Router history={BrowserHistory}>
                <Route path="/" component={Main}>
                    <IndexRoute component={Home}/>
                    <Route path="movie" component={Rating}></Route>
                    <Route path="results" component={Result}></Route>
                </Route>
            </Router>
        </Provider>,
        document.getElementById('app')
    );
});
