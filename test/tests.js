var test = require('tape').test

var transform = require('../main').transform

test('tag variations', function(t) {
  t.plan(10)
  var tagTests = {
    '<br/>': 'h("br")'
  , '<div/>': 'h("div")'
  , '<div></div>': 'h("div")'
  , '<div>X</div>': 'h("div", ["X"])'
  , '<div>{X}</div>': 'h("div", [X])'
  , '<div id="test"/>': 'h("div", {id:"test"})'
  , '<div id="test" className="test">X</div>': 'h("div", {id:"test", className:"test"}, ["X"])'
  , '<div>X{X} X {X}</div>': 'h("div", ["X",X, " X ", X])'
  , '<div><p/></div>': 'h("div", [h("p")])'
  , '<div><p id="test">X</p></div>': 'h("div", [h("p", {id:"test"}, ["X"])])'
  }
  var tags = Object.keys(tagTests)
  tags.forEach(function(tag) {
    var result = transform('/** @jsx h */\n' + tag).split('\n').pop()
    t.equal(result, tagTests[tag], tag + ' -> ' + tagTests[tag])
  })
})
