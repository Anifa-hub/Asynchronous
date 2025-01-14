function Dog(){
    return new Promise((resolve,reject)=>{
        let done = true
        if(done){
            resolve(`it can walk`)
        }else{
            reject(`it can't walk`)
        }
    })
}
function salary(){
    return new Promise((resolve,reject)=>{
        let don = true
        if(don){
            resolve('able to receive salary')
        } else{
            reject(`you can't be paid`)
        }
    })
}
async function check(){
   
    try{
         let result = await Dog()
        console.log(result)
        let payment = await salary()
        console.log(payment)
        
    }
    catch(error){
        console.error(new Error(error))
    }
}
check()