//the a and the b are the element that we are going to do on the operation
//My first element
var a=Math.floor(Math.random() *10 )+1
//My second element
var b=Math.floor(Math.random() *10 )+1
//My array that containe the operatores
var opp=["+","-","*"]
//The function that gets you an operation from the array
function randomElement (array){
    var randomIndex = Math.floor(Math.random() * array.length)
    return array[randomIndex]
  }
//Our variable that takes the rondom operation that applyes it on our numbers 
var rendopp = randomElement(opp)
//function that adds n1 and n2 to the operation 
function add(n1,n2){
    return n1+n2
}
//function that substarct n1 and n2 to the operation 
function sub(n1,n2){
    return n1-n2
}
//function that multiplie n1 and n2 to the operation 
function mul(n1,n2){
    return n1*n2
}
//NB: the n1 and the n2 are refeared to the random nnumbers a and b


//this function checks what is the exact operation
function operation(operation,n1,n2){
    if (operation==="+"){
        return add(n1,n2)
    }
    else if(operation==="-"){
        return sub(n1,n2)
    }
    else if(operation==="*"){
        return mul(n1,n2)
    }
}
//function of the Start game button
$(document).ready(function(){
    $("#start").click(function(){
      alert(a+rendopp+b);
    })
//function of the Pine Answer game button
$("#sub").click(function(){
//the value of the input
    var x=parseInt($("#ans").val())
//the value of the a,b by the operation power 2
    var y=Math.pow(operation(rendopp, a, b), 2)
    if(x===y){
        alert("Yapp you are right")
        location.reload()
    } 
    else{
        alert("you lost")
    }
})
//function of the restart game button
$("#res").click(function(){
    location.reload()
})
});