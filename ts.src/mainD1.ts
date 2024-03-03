// Day one of TypeScript

// On Day 2, You should take a notebook and understand the mindset bethind the framework and the formats of the elements...
// credit: https://www.youtube.com/watch?v=gieEQFIfgYc from chapt 1 to 2.4

// Declaring Type and Constants

type ExNum = number     // Declaring the DataType
let ExNum = 100           // Daclaring the Constant
console.log(ExNum)

// Process Operation {sum}

type MathFuctions = (
    a: number , 
    b: number ,
) => number

let Substract: MathFuctions = function (a, b) {
    return b + a
}

const LogMsg = (message: any): void => {
    console.log(message)
}

LogMsg(Substract(3, 6))

// Process Operation {Product / Multiplication}
type MathFunctionsv2 = (
    c: number,
    d: number
) => void

let Multiplier: MathFunctionsv2  = function (c, d) {
    return c * d
}

LogMsg(Multiplier(9, 10))


// Object Example

type ArrayEx = [
    ArrayNumber: number,
    ArrayString: string,
    ArrayBoolean: boolean
]

const ArrayEx = {
    Prop1: 9, 
    Prop2: 'ExArrayString', 
    Prop3: true}

console.log(ArrayEx.Prop1, ArrayEx.Prop2, ArrayEx.Prop3)

// Array Operations




