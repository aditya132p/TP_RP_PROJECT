
var value ="";
var displayTag = document.querySelector(" input");
function calcAppend(num){
    value+=num;
    displayTag.value = value;
    console.log(displayTag.value)
}
function calcValue(){
    displayTag.value=""
     displayTag.value = eval(value);
     value= ""
}
function calcClear(){
    displayTag.value=""
    value= ""
}
