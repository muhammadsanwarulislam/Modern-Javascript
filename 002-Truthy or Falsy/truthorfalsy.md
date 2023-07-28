## Truthy or Falsy value ##
```Truthy``` ভ্যালু মূলত ```boolean``` ভ্যালু আমরা যখন বুলিয়ান কনটেক্সট আমরা evaluate করবো,আমার বুঝার জন্য...
```
var testingTruthy = true;

if(testingTruthy) {
    console.log("It's truthy value")
}else {
    console.log("It's falsy value")
}
```
  * False
  * null
  * 0
  * ""
  * undefine
  * NaN
```testingTruthy``` variable মধ্যে এই ৬ টা বাদে সব ক্ষেত্রেই true value return করবে।
