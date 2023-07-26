## Arrow ফাংশন ##

আমরা শুরুতে একটা ট্রাডিশনাল ফাঙ্কশন লিখি
```
function traditionalFunction (nums) {
    return nums
}
console.log(traditionalFunction(10));
```
এই ফাঙ্কশন যদি আমরা কনসোল লগ করি তাহলে ১০ আউটপুট পাবো।

এখন উপরের ফাঙ্কশন আমরা অ্যারো ফাঙ্কশন এ লিখতে পারি যেভাবে
```
const numbers = (nums) => {
    return nums;
}
console.log(numbers(10))
```
একইভাবে এই আরো ফাংশন থেকে ১০ আউটপুট পাবো।

যদি আমাদের এই অ্যারো ফাঙ্কশন একটা ই স্টেটমেন্ট রিটার্ন করে তাহলে আমরা যেভাবে লিখতে পারি
```
const numbers = (nums) => nums
console.log(numbers(10))
```
এক্ষেত্রে আমাদের রিটার্ন টাইপ এবং কারলি ব্রাকেটস(curly brackets) দিতে হবে না এবং রিটার্ন ও দিতে হবে না  

**এখন আমি আমার নিজের জানার নিম্ন প্রশ্ন অ্যারো ফাঙ্কশন কি শুধুই ফাঙ্কশন shorthand এর জন্য ????**
এই প্রশ্নের উত্তর আছে এই লিংক এ (https://javascript.info/arrow-functions)
