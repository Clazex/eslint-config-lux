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

// This config provides rules for eslint-plugin-import
module.exports = {
	plugins: ["import"],

	rules: {
		// Static analysis
		"import/no-unresolved": [e, { commonjs: true, amd: true }],
		"import/named": e,
		"import/default": e,
		"import/namespace": e,
		"import/no-absolute-path": e,
		"import/no-self-import": e,
		"import/no-cycle": e,
		"import/no-useless-path-segments": w,



		// Helpful warnings
		"import/export": e,
		"import/no-named-as-default-member": w,
		"import/no-deprecated": w,
		"import/no-extraneous-dependencies": w,
		"import/no-mutable-exports": w,



		// Style guide
		"import/no-duplicates": w,
		"no-duplicate-imports": o, // Turn off the original one and use the one above
		"import/no-namespace": w,
		"import/prefer-default-export": w,
		"import/no-unassigned-import": w,
		"import/no-named-default": w
	}
};
