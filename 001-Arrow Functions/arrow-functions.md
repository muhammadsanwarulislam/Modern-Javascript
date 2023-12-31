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
এক্ষেত্রে আমাদের রিটার্ন টাইপ এবং কারলি ব্রাকেটস(curly brackets) দিতে হবে না 

**এখন আমি আমার নিজের জানার জন্য নিজেকে প্রশ্ন করি অ্যারো ফাঙ্কশন কি শুধুই ফাঙ্কশন shorthand এর জন্য ????**

এই প্রশ্নের উত্তর আছে এই লিংক এ (https://javascript.info/arrow-functions)

আমরা এই প্রশ্নের সহজ একটা সমাধান বুঝার চেষ্টা করি...

```
let group = {
    title: 'Science',
    students: ['Pete','Jone','Alice'],
    showList: function() {
        this.students.forEach(function(el){
            console.log(`${el} ${this.title} Student `)
        })
    } 
}
group.showList()
```
উপরোক্ত group নামের object define করলাম, title নামে property define করলাম student নামে array define করলাম, showList নামে property তে একটি callback ফাংশন define করলাম। যেখানে মূলত students array থেকে নাম গুলো দেখাবে এবং টাইটেল দেখাবে, মাগার আউটপুট এইটা.... title নামে property যে ডাটা ছিল সেটা undefine বলে  
![1](https://github.com/muhammadsanwarulislam/Modern-Javascript/assets/29992994/107916ff-6b13-47cb-8bb3-7fb8375bad85)
এইখানে ```foreach``` এর মধ্যে যে ```callback``` ফাঙ্কশন আমরা ডিফাইন করেছি সেই ফাঙ্কশন মূলত ```$this``` এর value পরিবর্তন করে ফেলেছে,অথবা আরও সহজ ভাবে আমার বুঝার জন্য বলতে পারি ```foreach``` এ যে কলব্যাক ফাঙ্কশন এ ```$this``` বাহিরের ```$this``` কে চিনতে পারে না। আমরা নিম্ন লিখিত ভাবে এই প্রব্লেম সল্ভ করতে পারি
```
let group3 = {
    title: 'Science',
    students: ['Pete','Jone','Alice'],
    showList: function() {
        self = this
        this.students.forEach(function(el){
            console.log(`${el} ${self.title} Student `)
        })
    } 
}
group3.showList()
```
![2](https://github.com/muhammadsanwarulislam/Modern-Javascript/assets/29992994/4c90fca8-5430-4c57-9d1d-043a7028b917)
**এখন প্রশ্ন হলো আমরা কি এই ভাবেই প্রব্লেমগুলো সল্ভ করবো???**

মন চাইলে করবেন কিন্তু আমি এখানে অ্যারো ফাংশন ব্যবহার করবো,আমি ```$this``` এর ঝামেলা যাবো না...
```
let group2 = {
    title: 'Science',
    students: ['Pete','Jone','Alice'],
    showList: function() {
        this.students.forEach( (el) =>console.log(`${el} ${this.title} group of Student `))
    } 
}
group2.showList()
```




