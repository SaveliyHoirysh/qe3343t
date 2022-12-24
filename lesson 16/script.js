const present = document.querySelector("#snowBall");
const blockHidden = document.querySelector("#hidden")
const blockVis = document.querySelector(".visible")
const myForm = document.querySelector("#myForm")
let text = document.querySelector(".hidden__text")
let name = document.querySelector("#name")
snowBall.addEventListener("click", function() {
    blockVis.style.display = "none"
    blockHidden.style.display = "flex"
})

let elements = myForm.elements;

elements.btn.addEventListener("click", function(event){
    event.preventDefault();
    name.textContent = elements.userName.value;
    name.style.color = elements.textColor.value;
    if (
        elements.paddingCheck.checked  === true
    ){
        name.style.margin = "0"
    }
    text.style.fontSize = elements.textSize.value +"px";
})


