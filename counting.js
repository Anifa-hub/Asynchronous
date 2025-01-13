function counting(){
    let count = 0
    let interval = setInterval(()=>{
        if(count<=5){
            console.log(count++)
        }else{
            clearInterval(interval)
        }
    },1000)
}
function final(callback){
    callback()
}
final(counting)