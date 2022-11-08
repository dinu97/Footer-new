let closebtns = document.getElementsByClassName("close");
let modal = document.getElementById("headerComponentBox-Id");
let modal2 = document.getElementById("ImageUpload-Id");

let i;

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

// Navigation-bar eliment add option
// button
let BtnAddElement = document.querySelector(".btnNav-add");
let DivContainer = document.getElementById("navbar-navId");
BtnAddElement.addEventListener("click", AddNewEliment);

function AddNewEliment() {
  let contenteditableDiv = document.createElement("div");

  contenteditableDiv.className = "editableBox";
  contenteditableDiv.contentEditable = true;

  contenteditableDiv.innerHTML = `
  <span class="close" contenteditable="false"><a class="removeRow" href="#"><i class="fas fa-times"></i></a></span>
  <button id="btnOne-1" type="button" class="btn btn-primary me-2 ms-1 HO-btn-style-one" >
  NAV BUTTON &nbsp; 
  </button>
`;
  // let r = document.createTextNode("NAV BUTTON");

  console.log("add");
  // newDiv.classList.add('add-newElement');

  DivContainer.appendChild(contenteditableDiv);
}

// ListItem
let BtnAddListElement = document.querySelector(".navList-add");
let DivListContainer = document.getElementById("navbar-navId");
BtnAddListElement.addEventListener("click", AddNewListEliment);

function AddNewListEliment() {
  let contenteditableList = document.createElement("li");
  
  contenteditableList.className = "editableBox";
  contenteditableList.contentEditable = true;

  contenteditableList.innerHTML =`<span class="close" contenteditable="false"><a class="removeRow" href="#"><i class="fas fa-times"></i></a></span>
  <a class="nav-link nav-one-link active"  id="blogId" aria-current="page" href="#"
     contenteditable="true">Nav Link</a>
`;
  // let listName = document.createTextNode("Nav Link");
  console.log("add");
  console.log("close");
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

  contenteditableDiv.innerHTML =` <span class="close" contenteditable="false"><a class="removeRow" href="#"><i class="fas fa-times"></i></a></span>
  <a   class="navbar-brand  ms-3" href="#">
     <i class="fas fa-dice-d6 fa-2x"></i>
 </a>`;
  // let logoName = document.createTextNode("LOGO");
  console.log("add");
  // newLogoDiv.classList.add("add-newLogoElement");

  DivLogoContainer.appendChild(contenteditableDiv);
}
