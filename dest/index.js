'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _card = require('./top/card.jsx');

var _card2 = _interopRequireDefault(_card);

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
  'section',
  null,
  _react2.default.createElement(
    'h1',
    null,
    'Profile'
  ),
  _react2.default.createElement(
    _semanticUiReact.Grid,
    { columns: 3 },
    _react2.default.createElement(
      _semanticUiReact.Grid.Row,
      null,
      _react2.default.createElement(
        _semanticUiReact.Grid.Column,
        null,
        _react2.default.createElement(_card2.default, null)
      ),
      _react2.default.createElement(_semanticUiReact.Grid.Column, null)
    ),
    _react2.default.createElement(
      _semanticUiReact.Grid.Row,
      null,
      _react2.default.createElement(_semanticUiReact.Grid.Column, null),
      _react2.default.createElement(_semanticUiReact.Grid.Column, null),
      _react2.default.createElement(_semanticUiReact.Grid.Column, null)
    )
  )
), document.getElementById('app'));