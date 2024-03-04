// Using Function in Array For Simple Math Operations 

// when using the const for function, use as follows: 

// const (Name) = (Declare Varients): Returned.Data.Type => {
// return(Process)
// }

const LogMsgv2 = (message: any):void => {
    console.log(message)
}

const MathsArray = {
    Multiplier: (a: number, b: number): any => {
        return a * b
    },

    Addition: (a: number, b: number):any => {
        return a + b
    },
}

LogMsgv2(MathsArray.Multiplier(2,3))



// When using type, declare as follows:
// type (Name) = (Declare Varients) => (ResultOfReturned)

type MathsFunctions = (a:number, b: number) => number


// Let [Var/Constant] = function (declaring the varients): Returned.Data.Type {
// return [process] 
// }

let AddFunc: MathsFunctions = function (a, b) {
    return a + b 
}

let LogMsgv3 = function (message: any):any {
    console.log(message)
}

LogMsgv3(AddFunc(9, 10))

type example = (one: any) => any
let example = ['1']
const Verifier =  function(message: any): any {
    if (typeof example == 'string') return 'This is a string'
    if (typeof example == 'number') return 'This is not a string, This might be a number'
    if (typeof example == 'boolean') return 'This is not a string, This might be a boolean'
    throw new Error(message)
}

//// Loops 

