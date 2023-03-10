module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node" : true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true, 
          },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/react-in-jsx-scope" : 0,
        "react/prop-types": 0,
    }
    
}
