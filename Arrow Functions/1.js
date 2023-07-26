//traditional function

function traditionalFunction (nums) {
    return nums
}
console.log(traditionalFunction(10))

//Arrow function

//Step-1 to declare arrow function
const numbers = (nums) => {
    return nums
}
console.log(numbers(50))

//Step-2 to declare arrow function, if it return only single statement
const sortform = (nums) => nums
console.log(sortform(10))

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