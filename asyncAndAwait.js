function Dog(){
    return new Promise((resolve,reject)=>{
        let done = false
        if(done){
            resolve(`it can walk`)
        }else{
            reject(`it can't walk`)
        }
    })
}
async function check(){
   
    try{
         let result = await Dog()
        console.log(result)
        
    }
    catch(error){
        console.error(new Error(error))
    }
}
check()