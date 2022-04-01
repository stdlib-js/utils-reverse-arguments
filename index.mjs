// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var n=r,e=t;var s=function(r,t){if(!n(r))throw new TypeError(e("invalid argument. First argument must be a function. Value: `%s`.",r));return function(){var n,e,s;for(e=arguments.length,n=new Array(e),s=0;s<e;s++)n[e-1-s]=arguments[s];return r.apply(t,n)}};export{s as default};
//# sourceMappingURL=index.mjs.map
