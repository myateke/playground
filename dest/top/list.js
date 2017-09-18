'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListDivided = function ListDivided() {
  return _react2.default.createElement(
    _semanticUiReact.List,
    { divided: true, relaxed: true, className: 'pAll20' },
    _react2.default.createElement(
      _semanticUiReact.List.Item,
      null,
      _react2.default.createElement(_semanticUiReact.List.Icon, { name: 'github', size: 'large', verticalAlign: 'middle' }),
      _react2.default.createElement(
        _semanticUiReact.List.Content,
        null,
        _react2.default.createElement(
          _semanticUiReact.List.Header,
          { as: 'a', href: 'https://github.com/myateke' },
          'github'
        ),
        _react2.default.createElement(
          _semanticUiReact.List.Description,
          null,
          '\u8ABF\u67FB\u7528\u30EA\u30DD\u30B8\u30C8\u30EA'
        )
      )
    ),
    _react2.default.createElement(
      _semanticUiReact.List.Item,
      null,
      _react2.default.createElement(_semanticUiReact.List.Icon, { name: 'write', size: 'large', verticalAlign: 'middle' }),
      _react2.default.createElement(
        _semanticUiReact.List.Content,
        null,
        _react2.default.createElement(
          _semanticUiReact.List.Header,
          { as: 'a', href: 'http://qiita.com/gcyata' },
          'Qiita'
        ),
        _react2.default.createElement(
          _semanticUiReact.List.Description,
          null,
          '\u52C9\u5F37\u5185\u5BB9\u8A18\u4E8B'
        )
      )
    )
  );
};

exports.default = ListDivided;