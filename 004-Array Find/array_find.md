## Array Find Method ##
```array``` ```find``` মেথড মূলত ঐ ```array``` এর প্রতিটি ```element``` কে ```iterate``` করবে। 
আমার জন্য সহজ ভাষায় বলা যাই, ```array find``` মেথড একটা ফাঙ্কশন একসেপ্ট করবে এবং ফাঙ্কশন ```parameter``` হিসাবে ওই এরে প্রতিটি এলিমেন্ট কে পাবে। 
যদি আমরা ফাঙ্কশনকে বলি ভাই ফাঙ্কশন তুমি এই ৫ এলিমেন্ট পর থেকে তুমি ```execution``` করো না অথাৎ ```return true``` করে দিই তাহলে ```execution``` বন্ধ করে দিবে। 

```
var numbers = [1,2,3,4,5,6,7,8]
var result = numbers.find((currentEl) => {
    return currentEl > 5
})

console.log(result)
```
