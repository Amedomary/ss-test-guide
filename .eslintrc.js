module.exports = {
    'env': {
        'browser': true,
        'node': true,
        'es6': true
    },
    'extends': [
        'eslint:recommended',
        'airbnb',
        'plugin:react/recommended'
    ],
    'parser': 'babel-eslint',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 7,
        'sourceType': 'module'
    },
    'plugins': [
        'react'
    ],
    'rules': {
        'linebreak-style': 'off',
        'indent': ['error', 4, { SwitchCase: 1 }],
        'max-len': ['error',
            {
                code: 120,
                comments: 100,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true,
            }
        ],
        'no-multiple-empty-lines': ['error',
            {
                max: 2,
                maxEOF: 1,
                maxBOF: 0,
            }
        ],
        'semi': ['error', 'always'],
        'arrow-parens': ['error', 'always'],
        'no-trailing-spaces': ['error', { skipBlankLines: true }],
        'no-param-reassign': ['error', { props: false }],
        'object-property-newline': ['error', { allowAllPropertiesOnSameLine: false }],
        'array-element-newline': ['error', { multiline: true, minItems: 1 }],
        'array-bracket-newline': ['error', { multiline: true }],
        'no-plusplus': 'off',
        'no-confusing-arrow': 'off',
        'no-use-before-define': 'off',
        'implicit-arrow-linebreak': 'off',
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/no-cycle': 'off',
        'class-methods-use-this': 'warn',
        'jsx-quotes': ['error', 'prefer-single'],
        'jsx-a11y/no-static-element-interactions': 'warn',
        'jsx-a11y/click-events-have-key-events': 'warn',
        'jsx-a11y/label-has-associated-control': 'warn',
        'jsx-a11y/label-has-for': 'warn',
        'jsx-a11y/no-autofocus': 'warn',
        'jsx-a11y/alt-text': 'warn',
        'jsx-a11y/anchor-is-valid': 'warn',
        'react/forbid-prop-types': 'off',
        'react/jsx-filename-extension': 'off',
        'react/button-has-type': 'off',
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/display-name': 'error',
        'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
        'react/jsx-curly-brace-presence': ['error', { props: 'always' }],
        'react/boolean-prop-naming': ['error', { validateNested: true }],
        'react/no-array-index-key': 'error',
        'react/sort-prop-types': ['error', { noSortAlphabetically: true, callbacksLast: true, requiredFirst: true }],
        'react/jsx-sort-props': ['error', { noSortAlphabetically: true, callbacksLast: true }],
        'react/jsx-first-prop-new-line': ['error', 'multiline'],
        'react/static-property-placement': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-curly-newline': 'off',
        'jsx-a11y/control-has-associated-label': 'off'
    }
};