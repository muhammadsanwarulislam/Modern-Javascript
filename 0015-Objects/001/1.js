var obj = {
    name: "Javascript",
    founder: "Brendan Eirch",
    estd: "1995",
    ranking: 1
}

var newObj = {}

var keys = Object.keys(obj)
var values = Object.values(obj)
var entries = Object.entries(obj)
var freeze = Object.freeze(obj)
var call = Object.assign(newObj,obj)
var isFrozen = Object.isFrozen(obj)
console.log(length)