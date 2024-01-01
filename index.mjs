// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function n(n,e){if(!t(n))throw new TypeError(r("invalid argument. First argument must be a function. Value: `%s`.",n));return function(){var t,r,s;for(r=arguments.length,t=new Array(r),s=0;s<r;s++)t[r-1-s]=arguments[s];return n.apply(e,t)}}export{n as default};
//# sourceMappingURL=index.mjs.map
