"use strict";var n=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var h=n(function(C,s){
var p=require('@stdlib/string-next-grapheme-cluster-break/dist'),x=require('@stdlib/string-num-grapheme-clusters/dist'),m=require('@stdlib/math-base-special-fast-max/dist');function c(i,r,e){var u,v,a,f,l;if(i===""||(u=x(i),r<0&&(r=m(r+u,0)),e<0&&(e=m(e+u,0)),r>=u||r>=e))return"";for(e>u&&(e=u),v="",a=0,l=0;a<i.length&&(f=p(i,a),f===-1&&(f=i.length),l>=r&&l<e&&(v+=i.substring(a,f)),a=f,l+=1,!(l>=e)););return v}s.exports=c
});var q=h();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
