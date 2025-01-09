function orderPizza(type,name){
    console.log('wait')
     setTimeout(()=>{console.log(`Pizza with ${type} and name of ${name} is ready`)},3000)
}
function second(type,name,callback){
    callback(type,name)
}
second('strawberry','chicken',orderPizza)