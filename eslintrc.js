module.exports = {
 parser: '@typescript-eslint/parser',
 extends: [
   'plugin:@typescript-eslint/eslint-recommended',
   'plugin:@typescript-eslint/recommended',
   'plugin:cypress/recommended',
   'plugin:react/recommended',
   'plugin:react-hooks/recommended',
   'plugin:sonarjs/recommended'
 ],
 plugins: ['@typescript-eslint', 'prettier', 'react', 'import', 'cypress', 'graphql', 'sonarjs'],
 settings: {
   react: {
     version: 'detect'
   },
   'import/internal-regex':
     '^(assets|locales|components|context|hooks|model|queries|react-components|screens|services|types|utils)'
 },
 env: {
   es6: true,
   browser: true,
   'cypress/globals': true
 },
 globals: {
   cy: true,
   Cypress: true
 },
 rules: {
   '@typescript-eslint/no-non-null-assertion': 'off',
   '@typescript-eslint/ban-ts-comment': 'off',
   '@typescript-eslint/no-explicit-any': 'off',
   '@typescript-eslint/no-namespace': 'off',
   '@typescript-eslint/camelcase': 'off',
   '@typescript-eslint/explicit-function-return-type': 'off',
   '@typescript-eslint/explicit-module-boundary-types': 'off',
   '@typescript-eslint/prefer-regexp-exec': 'off',
   '@typescript-eslint/no-empty-interface': 'off',
   '@typescript-eslint/no-unused-vars': 'error',
   'cypress/no-unnecessary-waiting': 'off',
   'import/no-cycle': 'off',
   'import/order': [
     'error',
     {
       'newlines-between': 'always',
       groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
       alphabetize: { order: 'asc' },
       pathGroups: [
         {
           pattern: '**/*.scss',
           group: 'internal',
           position: 'after'
         },
         {
           pattern: '**/.*/*.scss',
           group: 'parent',
           position: 'after'
         },
         {
           pattern: './*.scss',
           group: 'sibling',
           position: 'after'
         }
       ]
     }
   ],
   'import/prefer-default-export': 'off',
   'jsx-a11y/alt-text': 'off',
   'no-alert': 'off',
   'react/destructuring-assignment': 'off',
   'react/jsx-props-no-spreading': 'off',
   'react/react-in-jsx-scope': 'off',
   'graphql/template-strings': [
     'error',
     {
       env: 'apollo'
     }
   ],
   semi: 'off',
   'sonarjs/no-duplicate-string': 'off',
   'sonarjs/cognitive-complexity': 'off'
 }
};
