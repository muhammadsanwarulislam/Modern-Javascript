//Truthy/Falsy

/*
    The value will be falsy
    -> False
    ->null
    ->0
    ->""
    ->undefine
    ->NaN

    Without this six everything will be truthy
*/

var testingTruthy = true;

if(testingTruthy) {
    console.log("It's truthy value")
}else {
    console.log("It's falsy value")
}