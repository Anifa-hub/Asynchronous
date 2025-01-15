// Write an async function that returns a string after waiting for 2 seconds. Use the setTimeout function to simulate the delay.

function delaying(string){
    console.log('wait')
    return new Promise((resolve,reject)=>{
        if(string){
            setTimeout(()=>{resolve(string)},2000)
        }else{
            reject('no way')
        }
        
    })
}
async function final (){
    try{
        let result = await delaying('anifa')
    console.log(result)
    }
    
    catch(message){
        console.log(message)
    }
}
final()