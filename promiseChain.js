function producer(){
    return new Promise((resolve,reject)=>{
        let shop = 'open'
        if(shop=='open'){
         setTimeout(()=>{
            resolve('water is fetched')
        },2000)   
        }else{
            reject('shop is closed')
        }
    })
}
function collector(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('strawberry and milk has been collected')
        },2000)
    })
}
function coni(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('coni is available')
        },2000)
    })
}
function icecream(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Ice Cream is ready')
        },2000)
    })
}
let consumer = producer()
consumer
.then((message)=>{
    console.log(message)
    return collector(message)
})
.then((message)=>{
    console.log(message)
    return coni(message)
})
.then((message)=>{
    console.log(message)
    return icecream(message)
})
.then((message)=>{
    console.log(message)
})
.catch((message)=>{
    console.log(message)
})
