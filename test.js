"use strict";
const remainder = (a,b)=>a%b;


QUnit.test( "hello test", function( assert ) {
   assert.ok( remainder(5,1) == 0, "check for remainder with 5 and 1 " );
   assert.ok( remainder(5,3) == 2, "check for reminder with 5 and 3" );
   assert.ok( remainder(6,3) == 0, "check for remainder with 6 and 3" );
   assert.ok( add(6,3) == 9, "add 6 and 3" );
   assert.ok( add(-3,6) == 3, "add 6 and 3" );
   assert.ok( add(-3,6) == 3, "add 6 and -3" );
   assert.ok( add(100,45) == 145, "add 100 and 45" );
   assert.ok( "5*6 + 9*5" == 75, "combination of functions 1" );
   assert.ok( "(5*6 + 9*5)/5" == 15, "combination of functions 2" );
   assert.ok( "(5*9 - 5*6)/5" == 3, "combination of functions 4" );

});
