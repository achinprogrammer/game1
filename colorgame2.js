//abhi tak tune colors define kare hue the but ab tu randomly define kar rha hai jo randomly pick karega  
var numSquare=6;
var colors=generateRandomColor(numSquare);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.querySelector("#colorDisplay");
var messageDisplay=document.querySelector("#message");
var resetButton=document.querySelector("#resetButton");
var easy=document.querySelector("#easy");
var hard=document.querySelector(".selected");

init();
function init(){
  setUpButton();
}

function setUpButton(){

  easy.addEventListener("click",function(){
    hard.classList.remove("selected");
    easy.classList.add("selected");
    numSquare=3;
    colors=generateRandomColor(numSquare);
    //pick a random color from array
    pickedColor=pickColor();
    //change colorDisplay to match pickedcolor
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++){
      if(colors[i]){//yeh first three square ko color karega kyuki tune colors mei 3 arugemnt pass kara hai see code number 17
      squares[i].style.background=colors[i];
    }
    else{
      squares[i].style.display="none";
    }
   }
    
 });
 hard.addEventListener("click",function(){
  easy.classList.remove("selected");
  hard.classList.add("selected");
 numSquare=6;
  colors=generateRandomColor(numSquare);
  //pick a random color from array
  pickedColor=pickColor();
  //change colorDisplay to match pickedcolor
  colorDisplay.textContent=pickedColor;
  for(var i=0;i<squares.length;i++){
    
    squares[i].style.background=colors[i]; 
   squares[i].style.display="block";
 }
  
 
 });

}
//easy button code ko dry karne ke liye humne ek function define kiya hai
//jab easy mode par hoga tabh yeh 3 square dikhayega
//easy.addEventListener("click",function(){
  // hard.classList.remove("selected");
  // easy.classList.add("selected");
   //numSquare=3;
   //colors=generateRandomColor(numSquare);
   //pick a random color from array
   //pickedColor=pickColor();
   //change colorDisplay to match pickedcolor
   //colorDisplay.textContent=pickedColor;
   //for(var i=0;i<squares.length;i++){
     //if(colors[i]){//yeh first three square ko color karega kyuki tune colors mei 3 arugemnt pass kara hai see code number 17
     //squares[i].style.background=colors[i];
   //}
   //else{
     //squares[i].style.display="none";
   //}
  //}
   
//});
//button
//hard.addEventListener("click",function(){
// easy.classList.remove("selected");
 //hard.classList.add("selected");
//numSquare=6;
 //colors=generateRandomColor(numSquare);
 //pick a random color from array
 //pickedColor=pickColor();
 //change colorDisplay to match pickedcolor
 //colorDisplay.textContent=pickedColor;
 //for(var i=0;i<squares.length;i++){
   
   //squares[i].style.background=colors[i]; 
  //squares[i].style.display="block";
//}
 

//});


//reset button
resetButton.addEventListener("click",function(){
     //generate all new colors
     colors=generateRandomColor(numSquare);
     //pick a random color from array
     pickedColor=pickColor();
     //change colorDisplay to match pickedcolor
     colorDisplay.textContent=pickedColor;
     resetButton.textContent="New Colors";
     messageDisplay.textContent="";
     for(var i=0;i<squares.length;i++){
       squares[i].style.background=colors[i];
     }
     h1.style.background="steelblue";
});

colorDisplay.textContent=pickedColor;
var h1=document.querySelector("h1");

for(var i=0;i<squares.length;i++){
    //add initial to squares 
    squares[i].style.background=colors[i];
    //add click listeners
    squares[i].addEventListener("click",function(){
        //grab color of picked square
      var clickColor=this.style.background;
      //compare clickcolor with pickedColor
      console.log(clickColor,pickedColor);
      if(clickColor===pickedColor){
          messageDisplay.textContent="correct";
          resetButton.textContent="play Again!";
          changeColor(clickColor);
          h1.style.background=clickColor;
        }
          else{
        this.style.background="#232323";
        messageDisplay.textContent="try again";
          }
      
    });
}
//changecolor function jo jab match kar jayega tabh baki sabhi square ko same color ka kar dega
function changeColor(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.background=color;
    }
}
//pickcolor randomly pick karega because it uses random function
function pickColor(){
    var random=Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateRandomColor(num){
//make an array
var arr=[];
//loop through the array
for(var i=0;i<num;i++){
    //add and push to the array
  arr.push(randomColor());
    //return the array
}
return arr;
}

function randomColor(){
    var r=Math.floor(Math.random() * 256);
    var g=Math.floor(Math.random() * 256);
    var b=Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}