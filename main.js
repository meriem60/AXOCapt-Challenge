var checkbox = document.getElementById("checkbox");
var submit_button = document.querySelector("button");
var elements = document.querySelectorAll(".element");

checkbox.disabled = true;
submit_button.disabled = true;

elements.forEach((element)=>{
    
   var color=getRandomColor();
    element.style.backgroundColor = color;
    element.innerHTML = color;
   //colorselected.innerHTML = color;
})

function getRandomColor () {
    
    const letter = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
         color += letter[Math.floor(Math.random() * 16)];
    }
    return color;
}


var median= document.getElementsByClassName("element");
var colorselected=median[Math.floor(Math.random()*9)].innerHTML;
document.querySelector("#colorselected").innerHTML=colorselected;
//var colorselected = document.querySelector("#colorselected");   
console.log(colorselected);



elements.forEach((element) =>{
    element.addEventListener("click",() =>{
        if(element.innerHTML === colorselected){
            checkbox.checked = true;
            submit_button.disabled = false;
            submit_button.classList.remove("btn-default");
            submit_button.classList.add("btn-success");
            //alert("You are human")
        }
        else{
            alert("Please Verify you are human")
            Location.reload(true);
        }
    })
})