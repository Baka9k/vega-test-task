module.exports = {
  "extends": "standard",
  "rules": {
    "no-trailing-spaces": ["error", { "skipBlankLines": true }],
    "padded-blocks": ["error", { "classes": "always" }]
  },
  "env": {
    "browser": true,
    "node": true
  }
};