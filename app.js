console.log("Hello World");
var img = document.querySelector("#image")
var result = document.querySelector("#result")

function tossGame(value){
    var randomNum = Math.ceil(Math.random()*2)
    console.log(randomNum);
    
    if(value === 1 && randomNum === 1 || value ===  2 && randomNum === 2){
        result.innerHTML = "Congratulation! You Have Won The Toss";
     }else{
         result.innerHTML = "You Lost The Toss";
     }  
     
     if(randomNum === 1 ){
        img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ogNC8HAY-yXJVApBgC0HBW5IJrMYQ15NMw&s"
     }else{
        img.src="https://en.numista.com/catalogue/photos/pakistan/424-original.jpg"
     }
}

