var closebtns = document.getElementsByClassName("close");
var modal = document.getElementById("headerComponentBox-Id");
var modal2 = document.getElementById("ImageUpload-Id");

var i;

for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function () {
    this.parentElement.remove();
  });
}



let BtnAddElement = document.querySelector(".btnNav-add");
let DivContainer = document.getElementById("navbar-navId");


BtnAddElement.addEventListener("click", AddNewEliment);

function AddNewEliment(){
  let newDiv = document.createElement("div");
  let r = document.createTextNode("NAV BUTTON");
  console.log("add");
  newDiv.classList.add('add-newElement');
  
  

  DivContainer.appendChild(newDiv).appendChild(r);

}



function showFunction() {
  modal.style.display = "block";
}

function closeFunction() {
  modal.style.display = "none";
}

function showFunction1() {
  modal2.style.display = "block";
}
function closeFunction1() {
  modal2.style.display = "none";
}
