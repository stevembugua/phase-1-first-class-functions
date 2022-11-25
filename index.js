

function receivesAFunction(callback){
 let greetings = 'Sasa '

callback(greetings)

}

function callback(greetings){
 console.log(greetings)
}

function returnsANamedFunction() {
    return function sayHello(){
         console.log('returned the function')
    }
}

function returnsAnAnonymousFunction(){
    return ()=>{
        console.log('sasa')
    }
}
