let modal = document.getElementById("headerComponentBox-Id");
let modal2 = document.getElementById("ImageUpload-Id");
let closebtns = document.getElementsByClassName("close");
let i;
// function of the close button with the ho effect
for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function () {
    this.parentElement.remove();
  });
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

// Navigation-bar add eliment function
// button
let BtnAddElement = document.querySelector(".btnNav-add");
let DivContainer = document.getElementById("navbar-navId");
BtnAddElement.addEventListener("click", AddNewEliment);

function AddNewEliment() {
  let contenteditableDiv = document.createElement("div");

  contenteditableDiv.className = " editableBox";
  //contenteditableDiv.contentEditable = true;

  contenteditableDiv.innerHTML = `
    
  <span class="close"  onclick="RemoveNewElement()" contenteditable="false"><a class="removeRow" href="#"><i class="fas fa-times"></i></a></span>
                    <a id="btnOne-1"  class="btn btn-primary me-3 ms-3" href="#" role="button" contenteditable="true"> Start Free  &nbsp; </a>

               
`;
  // let r = document.createTextNode("NAV BUTTON");

  console.log("add");
  // newDiv.classList.add('add-newElement');

  DivContainer.appendChild(contenteditableDiv);
}

//function that removes the newly added element
function RemoveNewElement(){

  DivContainer.removeChild(DivContainer.lastChild);
  
}
function RemoveNewLogo(){

  DivLogoContainer.removeChild(DivLogoContainer.lastChild);
  
}

// ListItem
let BtnAddListElement = document.querySelector(".navList-add");
let DivListContainer = document.getElementById("navbar-navId");
BtnAddListElement.addEventListener("click", AddNewListEliment);

function AddNewListEliment() {
  let contenteditableList = document.createElement("li");
  
  //contenteditableList.className = "editableBox";
  contenteditableList.className = " editableBox";
  //contenteditableList.contentEditable = true;

  contenteditableList.innerHTML =`<span class="close" onclick="RemoveNewElement()" contenteditable="false"><a class="removeRow" href="#"><i class="fas fa-times"></i></a></span>
  <a class="nav-link nav-one-link active"  id="blogId" aria-current="page" href="#"
     contenteditable="true">Nav Link</a>
`;
  // let listName = document.createTextNode("Nav Link");
  console.log("add");
 
  // newListDiv.classList.add("add-newListElement");

  DivListContainer.appendChild(contenteditableList);
}

// Logo
let BtnAddLogoElement = document.querySelector(".logoNav-add");
let DivLogoContainer = document.getElementById("logoEditableId");

BtnAddLogoElement.addEventListener("click", AddNewLogoEliment);

function AddNewLogoEliment() {
  let contenteditableDiv = document.createElement("div");

  contenteditableDiv.className = "editableBox";
  contenteditableDiv.contentEditable = false;

  contenteditableDiv.innerHTML =` <span class="close" onclick="RemoveNewLogo()" contenteditable="false"><a class="removeRow" href="#"><i class="fas fa-times"></i></a></span>
  <a   class="navbar-brand  ms-3" href="#">
  <img class="navbar-brand1" src="https://footers-html.netlify.app/images/heroOne-image.png" alt="Image">
 </a>`;
  // let logoName = document.createTextNode("LOGO");
  console.log("add");
  // newLogoDiv.classList.add("add-newLogoElement");

  DivLogoContainer.appendChild(contenteditableDiv);


}
//image upload function

let input = document.querySelector("input");
let para = document.querySelector(".editable-image");
let navImage =document.querySelector(".navbar-brand1")
input.addEventListener("change", updateImageDisplay);
function updateImageDisplay() {

  let imageupload = input.files;
  let imageURL =URL.createObjectURL(imageupload[0]);
  para.src = imageURL;
  navImage.src=imageURL;
}

// // logo add button disabled
// let navbar = document.querySelector(".logoEditableId");
// let navAddBtn= document.querySelector(".logoNav-add");
//  navAddBtn.disabled =true;


//  navbar.addEventListener("change",buttonState);
//  function buttonState(){
//   if(document.querySelector(".logoEditableId").value ===""){
//     navAddBtn.disabled=true;
//   }
//   else{
//     navAddBtn.disabled=false;
//   }
//  }
//  navAddBtn.addEventListener("click", () => {
//   console.log("You entered:", document.querySelector(".logoEditableId").value);
//   });




