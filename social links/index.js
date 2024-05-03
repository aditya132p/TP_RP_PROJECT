var inputTag = document.querySelector("input");
var btn =document.querySelector("button")
console.log(inputTag)
function clickIcon(link){
    inputTag.value=link;
    btn.innerHTML="Copy"
    btn.style.backgroundColor=""
}
function copy(){
    if(inputTag.value==""){
     
    }
    else{
    inputTag.select();
    document.execCommand('copy')
    btn.innerHTML="Copied"
    btn.style.backgroundColor="rgb(4 217 4 / 93%)"
    }
    
}