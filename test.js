"use strict";
let k =5 ;
var sum = 4 + k;
const remainder = (a,b)=>a%b;


QUnit.test( "hello test", function( assert ) {
  assert.ok( remainder(5,1) == 0, "Passed!" );
   assert.ok( remainder(5,3) == 2, "Passed!" );
   assert.ok( remainder(6,3) == 0, "Passed!" );
});
