'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardExampleCard = function CardExampleCard() {
  return _react2.default.createElement(
    _semanticUiReact.Card,
    null,
    _react2.default.createElement('img', { src: '.assets/img/logo_3.jpg', alt: '' }),
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
        'Masahiro is a musician living in Nashville.'
      )
    ),
    _react2.default.createElement(
      _semanticUiReact.Card.Content,
      { extra: true },
      _react2.default.createElement(
        'a',
        null,
        _react2.default.createElement(_semanticUiReact.Icon, { name: 'user' }),
        '22 Friends'
      )
    )
  );
};

exports.default = CardExampleCard;