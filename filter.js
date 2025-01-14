// 1. Create a function that filters an array based on a callback test function.
function filter(array){
    let room=[]
    for(let i =0; i<array.length; i++){
        if( array[i]%2 ==0){
            room.push(array[i])
        }
      
}
console.log(room)
}

function final (array,callback){
    callback(array)
}
final([1,3,2,4,5,6],filter)