// Write an async function that takes multiple Promises and uses Promise.race() to return the result of the first Promise that resolves or rejects.

function  addition(num1,num2){
    return new Promise((resolve,reject)=>{
        resolve(num1+num2)
    })
}
function multiply(sum){
    return new Promise((resolve,reject)=>{
        resolve(sum*2)
    })
}
function subtracts(sub){
    return new Promise((resolve,reject)=>{
        resolve(sub-5)
    })
}
async function  arithmetic(){
    try{
        let answer1= await Promise.race([addition(2,3),multiply(3),subtracts(10)])
        console.log(answer1)
    }
    finally{
        console.log(`yes we did it`)
    }
}
arithmetic()