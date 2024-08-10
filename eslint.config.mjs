import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
	{ files: [ '**/*.js' ], languageOptions: { sourceType: 'commonjs' } },
	{
		ignores: [
			'.dev-server/**/*',
			'admin/build/**/*',
			'admin/words.js',
			'test/**/*',
			'main.test.js',
			'lib/**/*',
			'!lib/ecoflow_utils.js',
			'!lib/adapter_utils.js'
		]
	},
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended
];
