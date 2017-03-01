var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();
var expect = require('chai').expect;
var store = require('../js/store');

var Result = require('../js/components/result');

describe('Result Component', function() {
    it('Renders Result component', function() {

        var renderer = TestUtils.createRenderer();
        renderer.render(<Result store={store} />);
        var result = renderer.getRenderOutput();
        console.log(result.props.children[1].props);
        result.props.className.should.equal('movie-result');

        var headerTwo = result.props.children[0];
        headerTwo.type.should.equal('h2');
        headerTwo.props.children.should.equal("Based on your rating versus the movie's actual rating...");

        var headerOne = result.props.children[1];
        headerOne.type.should.equal('h1');
        headerOne.props.children.type.should.equal('p');

    });
});

