
module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": ["plugin:react/recommended", "airbnb"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": ["react", "@typescript-eslint"],
  "rules": {
    "import/extensions": ["error", "ignorePackages", { "ts": "never", "tsx": "never" }],
    "react/jsx-filename-extension": ["warn", { "extensions": [".tsx"] }],
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "linebreak-style": ["error", "windows"],
    "react/react-in-jsx-scope": "off",
    "rules": {
      "indent": "off"
    }
  },
  "settings": {
    "import/resolver": {
      "typescript": {}
    }
  }
}