'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _card = require('./top/card.jsx');

var _card2 = _interopRequireDefault(_card);

var _list = require('./top/list.jsx');

var _list2 = _interopRequireDefault(_list);

var _semanticUiReact = require('semantic-ui-react');

require('./assets/stylesheets/gc-common.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
    'section',
    { className: 'mAll70' },
    _react2.default.createElement(
        'h1',
        null,
        'Profile'
    ),
    _react2.default.createElement(
        _semanticUiReact.Grid,
        { columns: 2 },
        _react2.default.createElement(
            _semanticUiReact.Grid.Row,
            null,
            _react2.default.createElement(
                _semanticUiReact.Grid.Column,
                { width: 6 },
                _react2.default.createElement(_card2.default, null)
            ),
            _react2.default.createElement(
                _semanticUiReact.Grid.Column,
                { width: 10, className: 'bg-white' },
                _react2.default.createElement(_list2.default, null)
            )
        )
    )
), document.getElementById('app'));