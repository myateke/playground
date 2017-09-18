'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

require('./../assets/stylesheets/gc-common.css');

require('./../assets/stylesheets/styles.css');

var _logo_ = require('./../assets/img/logo_3.jpg');

var _logo_2 = _interopRequireDefault(_logo_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProfileCard = function ProfileCard() {
  return _react2.default.createElement(
    _semanticUiReact.Card,
    null,
    _react2.default.createElement('img', { src: _logo_2.default, alt: '', className: 'gc-width-100 height-auto' }),
    _react2.default.createElement(
      _semanticUiReact.Card.Content,
      null,
      _react2.default.createElement(
        _semanticUiReact.Card.Header,
        null,
        'Masahiro'
      ),
      _react2.default.createElement(
        _semanticUiReact.Card.Meta,
        null,
        _react2.default.createElement(
          'span',
          { className: 'date' },
          'Joined in July'
        )
      ),
      _react2.default.createElement(
        _semanticUiReact.Card.Description,
        null,
        '\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB'
      )
    ),
    _react2.default.createElement(
      _semanticUiReact.Card.Content,
      { extra: true },
      _react2.default.createElement(_semanticUiReact.Flag, { name: 'france' })
    )
  );
};

exports.default = ProfileCard;