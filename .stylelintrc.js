const { propertyOrdering, selectorOrdering } = require('stylelint-semantic-groups');

module.exports = {
  "extends": "stylelint-config-recommended",
  "plugins": ["stylelint-order", "stylelint-scss"],
  "customSyntax": "postcss-scss",
  "rules": {
    "at-rule-no-vendor-prefix": true,
    "color-hex-length": "long",
    "at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": ["for"]
      }
    ],
    "no-descending-specificity": null,
    "string-quotes": "double",
    "value-no-vendor-prefix": true,
    "block-no-empty": null,
    "no-empty-source": null,
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    'order/order': selectorOrdering,
    'order/properties-order': propertyOrdering,
  }
}
