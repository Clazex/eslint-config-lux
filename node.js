/**
 *	Copyright 2020 Sciencmine
 *
 *	Licensed under the Apache License, Version 2.0 (the "License");
 *	you may not use this file except in compliance with the License.
 *	You may obtain a copy of the License at
 *
 *		http://www.apache.org/licenses/LICENSE-2.0
 *
 *	Unless required by applicable law or agreed to in writing, software
 *	distributed under the License is distributed on an "AS IS" BASIS,
 *	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *	See the License for the specific language governing permissions and
 * 	limitations under the License.
 */

const o = "off",
	w = "warn",
	e = "error";

// This config provides rules for eslint-plugin-node
module.exports = {
	plugins: ["node"],

	extends: ["plugin:node/recommended"],

	env: { node: true },

	rules: {
		// Disable rules that conflict with the ones in "import"
		"node/no-extraneous-import": o,
		"node/no-missing-import": o,
		"no-unpublished-import": o,



		// Stylistic Issues
		"node/exports-style": e,
		"node/prefer-global/buffer": w,
		"node/prefer-global/console": w,
		"node/prefer-global/process": w,
		"node/prefer-global/text-decoder": w,
		"node/prefer-global/text-encoder": w,
		"node/prefer-global/url-search-params": w,
		"node/prefer-global/url": w,
		"node/prefer-promises/dns": w,
		"node/prefer-promises/fs": w
	}
};
