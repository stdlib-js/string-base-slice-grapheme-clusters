"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var h=n(function(C,s){
var p=require('@stdlib/string-next-grapheme-cluster-break/dist'),x=require('@stdlib/string-num-grapheme-clusters/dist'),m=require('@stdlib/math-base-special-fast-max/dist');function c(e,r,i){var u,v,a,f,l;if(e===""||(u=x(e),r<0&&(r=m(r+u,0)),i<0&&(i=m(i+u,0)),r>=u||r>=i))return"";for(i>u&&(i=u),v="",a=0,l=0;a<e.length&&(f=p(e,a),f===-1&&(f=e.length),l>=r&&l<i&&(v+=e.substring(a,f)),a=f,l+=1,!(l>=i)););return v}s.exports=c
});var q=h();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
