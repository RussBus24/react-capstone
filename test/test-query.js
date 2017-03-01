var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();
var expect = require('chai').expect;
var store = require('../js/store');

var Query = require('../js/components/query');

describe('Query Component', function() {
    it('Renders Query component', function() {

        var renderer = TestUtils.createRenderer();
        renderer.render(<Query store={store} />);
        var result = renderer.getRenderOutput();
        console.log(result.props);
        result.props.className.should.equal('movie-query');

        var p = result.props.children[0];
        p.type.should.equal('p');
        p.props.children.should.equal('Please enter a movie of your choice to search for.');

        var pOne = result.props.children[1];
        pOne.type.should.equal('p');
        pOne.props.children.should.equal('(Type full movie name if possible for best result)');

        var form = result.props.children[2];
        var formChildrenOne = result.props.children[2].props.children[0];
        var formChildrenTwo = result.props.children[2].props.children[1];
        form.props.id.should.equal('movieQuery');
        formChildrenOne.props.type.should.equal('text');
        formChildrenOne.props.name.should.equal('movieQueryInput');
        formChildrenTwo.props.name.should.equal('Submit');
        formChildrenTwo.props.type.should.equal('submit');
        formChildrenTwo.props.value.should.equal('Find Movie!');

    });
});
