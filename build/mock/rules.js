"use strict";

const RULES = [{
  "id": "rule001",
  "name": "OPERATOR_TYPE",
  "type": "MULTIPLE",
  "status": "ACTIVE",
  "weight": 0.5,
  "conditions": [{
    "value": "FALABELLA",
    "weight": 0.4
  }, {
    "value": "SELLER",
    "weight": 0.8
  }]
}, {
  "name": "PACKAGE_BROKEN",
  "field": "broken",
  "type": "BINARY",
  "status": "ACTIVE",
  "conditions": [{
    "value": 1,
    "weight": 1
  }, {
    "value": 0,
    "weight": 0
  }]
}];
module.exports = RULES;