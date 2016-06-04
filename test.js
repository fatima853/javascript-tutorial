"use strict";
const remainder = (a,b)=>a%b;


QUnit.test( "hello test", function( assert ) {
   assert.ok( remainder(5,1) == 0, "check for remainder with 5 and 1 " );
   assert.ok( remainder(5,3) == 2, "check for reminder with 5 and 3" );
   assert.ok( remainder(6,3) == 0, "check for remainder with 6 and 3" );
   assert.ok( add(6,3) == 9, "add 6 and 3" );
   


});
