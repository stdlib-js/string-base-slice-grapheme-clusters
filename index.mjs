// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-next-grapheme-cluster-break@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/string-num-grapheme-clusters@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-fast-max@v0.3.0-esm/index.mjs";function r(r,n,i){var m,d,l,a,h;if(""===r)return"";if(m=e(r),n<0&&(n=s(n+m,0)),i<0&&(i=s(i+m,0)),n>=m||n>=i)return"";for(i>m&&(i=m),d="",l=0,h=0;l<r.length&&(-1===(a=t(r,l))&&(a=r.length),h>=n&&h<i&&(d+=r.substring(l,a)),l=a,!((h+=1)>=i)););return d}export{r as default};
//# sourceMappingURL=index.mjs.map
