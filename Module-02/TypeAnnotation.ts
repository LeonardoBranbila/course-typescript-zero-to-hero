// vars
let name1: string = 'MyName';
console.log('\n' + name1);

let number: number = 5810;
console.log(number + '\n');

// Arrays
let animals: string[] = ['dolphin', 'lion', 'monkey', 'human']
console.log(animals + '\n')

//Objects
let car: {
    name: string
    year: number;
    price: number
}

car = {name: 'carName', year: 1860, price: 5894168}
console.log(car)
console.log('')

//Functions
function MultiplyNumbers(num1: number, num2:number)
{
    return num1 * num2
}
console.log(MultiplyNumbers(2,2))