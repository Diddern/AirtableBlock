"use strict";

var _ui = require("@airtable/blocks/ui");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HelloWorldTypescriptBlock = function HelloWorldTypescriptBlock() {
  var base = (0, _ui.useBase)();
  var table = base.getTableByName('Ansatt');
  var records = (0, _ui.useRecords)(table);
  var bekkere = records.map(function (record) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: record.id
    }, record.name || 'Tom record');
  });
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, "Bekkerne v\xE5re: \u270B "), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("div", null, bekkere));
};

(0, _ui.initializeBlock)(function () {
  return /*#__PURE__*/_react.default.createElement(HelloWorldTypescriptBlock, null);
});