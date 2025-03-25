
let person: [string, string, number]
person = ["Name","function",30]
//console.log(person)
//console.log(person[1])

// tuples with labels
let person2: [Name:string, Function:string, Age:number] = person = ["Name","function",30]
console.log(person2)

//Spread operator with tuples
let tuple: [string, ... string[]] = ['First','Second','Third','Fourth','Fifth']
//console.log(... tuple)

let tuple2: [number, boolean, ...string[]] = [5, true, ...tuple]
console.log(... tuple2)


