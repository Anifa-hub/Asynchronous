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
// async function  arithmetic(){
//     try{
//         let answer1= await addition(2,3)
//         console.log(answer1)
        
//         let answer2 = await multiply(answer1)
//         console.log(answer2)
        
//         let answer3 = await subtracts(answer2)
//         console.log(answer3)
//     }
//     finally{
//         console.log(`yes we did it`)
//     }
// }
// arithmetic()
addition(2,3)
.then((message)=>{
    console.log(message)
    return multiply(message)
})
.then((message)=>{
    console.log(message)
    return subtracts(message)
})
.then((message)=>{
    console.log(message)
    
})