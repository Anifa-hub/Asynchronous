function hello(){
    return new Promise((resolve,reject)=>{
        let x = 9
        if(x<8){
            resolve('success')
        }else{
            reject('fail')
        }
    })
}
hello()
.then((message)=>{
    console.log(message)
})
.catch((message)=>{
    console.log(message)
})