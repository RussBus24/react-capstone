
var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();
var expect = require('chai').expect;
var store = require('../js/store');

var Rating = require('../js/components/rating');

describe('Rating Component', function() {
    it('Renders Rating component', function() {

        var renderer = TestUtils.createRenderer();
        renderer.render(<Rating store={store} />);
        var result = renderer.getRenderOutput();
        result.props.className.should.equal('movie-rating');

        var headerOne = result.props.children[0];
        headerOne.type.should.equal('h1');

        var headerTwoOne = result.props.children[1];
        headerTwoOne.type.should.equal('h2');

        var headerTwoTwo = result.props.children[2];
        headerTwoTwo.type.should.equal('h2');
        headerTwoTwo.props.color.should.equal('#fff');
        headerTwoTwo.props.children.should.equal('Rate movie below on each category');

        var headerThreeOne = result.props.children[3];
        var headerThreeOneChildren = result.props.children[3].props.children;
        headerThreeOne.type.should.equal('h3');
        headerThreeOneChildren.type.should.equal('span');
        headerThreeOneChildren.props.id.should.equal('ex18-label-1');
        headerThreeOneChildren.props.className.should.equal('hidden');
        headerThreeOneChildren.props.children.should.equal('Violence');

        var formOne = result.props.children[4];
        var formOneChildrenOne = result.props.children[4].props.children[0];
        var formOneChildrenTwo = result.props.children[4].props.children[2];
        var formOneChildrenThree = result.props.children[4].props.children[4];
        var formOneChildrenFour = result.props.children[4].props.children[6];
        var formOneLabelOne = result.props.children[4].props.children[1];
        var formOneLabelTwo = result.props.children[4].props.children[3];
        var formOneLabelThree = result.props.children[4].props.children[5];
        var formOneLabelFour = result.props.children[4].props.children[7];
        formOne.type.should.equal('form');
        formOneChildrenOne.type.should.equal('input');
        formOneChildrenOne.props.type.should.equal('radio');
        formOneChildrenOne.props.name.should.equal('violence');
        formOneChildrenOne.props.value.should.equal('1');
        formOneChildrenTwo.type.should.equal('input');
        formOneChildrenTwo.props.type.should.equal('radio');
        formOneChildrenTwo.props.name.should.equal('violence');
        formOneChildrenTwo.props.value.should.equal('2');
        formOneChildrenThree.type.should.equal('input');
        formOneChildrenThree.props.type.should.equal('radio');
        formOneChildrenThree.props.name.should.equal('violence');
        formOneChildrenThree.props.value.should.equal('3');
        formOneChildrenFour.type.should.equal('input');
        formOneChildrenFour.props.type.should.equal('radio');
        formOneChildrenFour.props.name.should.equal('violence');
        formOneChildrenFour.props.value.should.equal('4');
        formOneLabelOne.should.equal('Low');
        formOneLabelTwo.should.equal('Medium');
        formOneLabelThree.should.equal('High');
        formOneLabelFour.should.equal('OMG!');

        var headerThreeTwo = result.props.children[5];
        var headerThreeTwoChildren = result.props.children[5].props.children;
        headerThreeTwo.type.should.equal('h3');
        headerThreeTwoChildren.type.should.equal('span');
        headerThreeTwoChildren.props.id.should.equal('ex18-label-1');
        headerThreeTwoChildren.props.className.should.equal('hidden');
        headerThreeTwoChildren.props.children.should.equal('Language');

        var formTwo = result.props.children[6];
        var formTwoChildrenOne = result.props.children[6].props.children[0];
        var formTwoChildrenTwo = result.props.children[6].props.children[2];
        var formTwoChildrenThree = result.props.children[6].props.children[4];
        var formTwoChildrenFour = result.props.children[6].props.children[6];
        var formTwoLabelOne = result.props.children[6].props.children[1];
        var formTwoLabelTwo = result.props.children[6].props.children[3];
        var formTwoLabelThree = result.props.children[6].props.children[5];
        var formTwoLabelFour = result.props.children[6].props.children[7];
        formTwo.type.should.equal('form');
        formTwoChildrenOne.type.should.equal('input');
        formTwoChildrenOne.props.type.should.equal('radio');
        formTwoChildrenOne.props.name.should.equal('language');
        formTwoChildrenOne.props.value.should.equal('1');
        formTwoChildrenTwo.type.should.equal('input');
        formTwoChildrenTwo.props.type.should.equal('radio');
        formTwoChildrenTwo.props.name.should.equal('language');
        formTwoChildrenTwo.props.value.should.equal('2');
        formTwoChildrenThree.type.should.equal('input');
        formTwoChildrenThree.props.type.should.equal('radio');
        formTwoChildrenThree.props.name.should.equal('language');
        formTwoChildrenThree.props.value.should.equal('3');
        formTwoChildrenFour.type.should.equal('input');
        formTwoChildrenFour.props.type.should.equal('radio');
        formTwoChildrenFour.props.name.should.equal('language');
        formTwoChildrenFour.props.value.should.equal('4');
        formTwoLabelOne.should.equal('Low');
        formTwoLabelTwo.should.equal('Medium');
        formTwoLabelThree.should.equal('High');
        formTwoLabelFour.should.equal('OMG!');

        var headerThreeThree = result.props.children[7];
        var headerThreeThreeChildren = result.props.children[7].props.children;
        headerThreeThree.type.should.equal('h3');
        headerThreeThreeChildren.type.should.equal('span');
        headerThreeThreeChildren.props.id.should.equal('ex18-label-1');
        headerThreeThreeChildren.props.className.should.equal('hidden');
        headerThreeThreeChildren.props.children.should.equal('Sensuality');

        var formThree = result.props.children[8];
        var formThreeChildrenOne = result.props.children[8].props.children[0];
        var formThreeChildrenTwo = result.props.children[8].props.children[2];
        var formThreeChildrenThree = result.props.children[8].props.children[4];
        var formThreeChildrenFour = result.props.children[8].props.children[6];
        var formThreeLabelOne = result.props.children[8].props.children[1];
        var formThreeLabelTwo = result.props.children[8].props.children[3];
        var formThreeLabelThree = result.props.children[8].props.children[5];
        var formThreeLabelFour = result.props.children[8].props.children[7];
        formThree.type.should.equal('form');
        formThreeChildrenOne.type.should.equal('input');
        formThreeChildrenOne.props.type.should.equal('radio');
        formThreeChildrenOne.props.name.should.equal('sensuality');
        formThreeChildrenOne.props.value.should.equal('1');
        formThreeChildrenTwo.type.should.equal('input');
        formThreeChildrenTwo.props.type.should.equal('radio');
        formThreeChildrenTwo.props.name.should.equal('sensuality');
        formThreeChildrenTwo.props.value.should.equal('2');
        formThreeChildrenThree.type.should.equal('input');
        formThreeChildrenThree.props.type.should.equal('radio');
        formThreeChildrenThree.props.name.should.equal('sensuality');
        formThreeChildrenThree.props.value.should.equal('3');
        formThreeChildrenFour.type.should.equal('input');
        formThreeChildrenFour.props.type.should.equal('radio');
        formThreeChildrenFour.props.name.should.equal('sensuality');
        formThreeChildrenFour.props.value.should.equal('4');
        formThreeLabelOne.should.equal('Low');
        formThreeLabelTwo.should.equal('Medium');
        formThreeLabelThree.should.equal('High');
        formThreeLabelFour.should.equal('OMG!');

        var formFour = result.props.children[9];
        var formFourChildren = result.props.children[9].props.children.props.children;
        formFour.type.should.equal('form');
        formFourChildren.type.should.equal('input');
        formFourChildren.props.type.should.equal('submit');
        formFourChildren.props.name.should.equal('Submit');
        formFourChildren.props.value.should.equal('Submit Rating');

    });
});
