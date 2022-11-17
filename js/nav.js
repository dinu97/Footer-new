let modal = document.getElementById("headerComponentBox-Id");
let modal2 = document.getElementById("ImageUpload-Id");
// let closebtns = document.getElementsByClassName("close");
// let i;
// function of the close button with the ho effect
// for (i = 0; i < closebtns.length; i++) {
//   closebtns[i].addEventListener("click", function () {
//     this.parentElement.remove();
//   });
// }

// Delete elements red cross button
function removeElement(element) {
  element.parentElement.remove();
 
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
let newElementIdNum = 0;
function AddNewEliment() {
  let contenteditableDiv = document.createElement("div");
  newElementIdNum++;
  let newElementIdVal = "newBtnId-" + newElementIdNum;
  let newElementId = newElementIdVal.toString();
  contenteditableDiv.setAttribute("id", newElementId);

  console.log("newElementId is :", newElementId);

  contenteditableDiv.className = " editableBox";

  //contenteditableDiv.contentEditable = true;

  contenteditableDiv.innerHTML = `
    
  <span class="close"  onclick="removeElement(this);" contenteditable="false"><a class="removeRow" href="#"><i class="fas fa-times"></i></a></span>
                    <a id="btnOne-1"  class="btn btn-primary me-3 ms-3" href="#" role="button" contenteditable="true"> Start Free  &nbsp; </a>             
`;
  // let r = document.createTextNode("NAV BUTTON");

  // console.log("add");
  // newDiv.classList.add('add-newElement');

  DivContainer.appendChild(contenteditableDiv);
}

//function that removes the newly added element
// function RemoveNewElement() {
//   DivContainer.removeChild(DivContainer.lastChild);
// }

// function RemoveNewLogo() {
//   DivLogoContainer.removeChild(DivLogoContainer.lastChild);
// }

// ListItem
let BtnAddListElement = document.querySelector(".navList-add");
let DivListContainer = document.getElementById("navbar-navId");
BtnAddListElement.addEventListener("click", AddNewListEliment);

function AddNewListEliment() {
  let contenteditableList = document.createElement("li");

  //contenteditableList.className = "editableBox";
  contenteditableList.className = " editableBox";
  //contenteditableList.contentEditable = true;

  contenteditableList.innerHTML = `<span class="close" onclick="removeElement(this);" contenteditable="false"><a class="removeRow" href="#"><i class="fas fa-times"></i></a></span>
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

let newElementLogoId = 3;
BtnAddLogoElement.addEventListener("click", AddNewLogoEliment);

function AddNewLogoEliment() {
  //When there is already a logo image, button is disabled.

  let navBtn = document.getElementById("addNewElement-btn-one");
  let img = document.getElementById("navbarlogo-Id");
  modal.style.display = "block";
  if (img == null) {
    alert("img src is empty");
    navBtn.disabled = false;

    let contenteditableDiv1 = document.createElement("div");
    newElementLogoId++;
    let newElementLogoIdVal = "newLogoBtnId-" + newElementLogoId;
    let newElementLId = newElementLogoIdVal.toString();
    contenteditableDiv1.setAttribute("id", newElementLId);

    console.log("newElementId is :", newElementLId);

    contenteditableDiv1.className = "editableBox";
    contenteditableDiv1.contentEditable = false;

    contenteditableDiv1.innerHTML = ` <span class="close" onclick="removeElement(this);" contenteditable="false"><a class="removeRow" href="#"><i class="fas fa-times"></i></a></span>
<a  onclick="showFunction1()"  class="navbar-brand  ms-3" href="#">
<img class="navbar-brand1" src="https://i.pinimg.com/736x/22/8c/61/228c6199281092080afc46541d64a9cb.jpg" alt="Image">
</a>`;
    // let logoName = document.createTextNode("LOGO");
    console.log("add");
    // newLogoDiv.classList.add("add-newLogoElement");

    DivLogoContainer.appendChild(contenteditableDiv1);
    closeFunction();
  } else {
    alert("img src is NOT empty");
    navBtn.disabled = true;
  }
}

//image upload function

let input = document.querySelector("input");
let para = document.querySelector(".editable-image");
let navImage = document.querySelector(".navbar-brand1");
input.addEventListener("change", updateImageDisplay);
function updateImageDisplay() {
  let imageupload = input.files;
  let imageURL = URL.createObjectURL(imageupload[0]);
  para.src = imageURL;
  navImage.src = imageURL;
}


let duplicateContent = document.getElementById('header-one-id');
  
function duplicateContents () {
  let contenteditableList = document.createElement("div");
  
  // When "true" is specified the node and its subtree are cloned.
  let newCopy = duplicateContent.cloneNode(true);
  
  let tempDestination = document.querySelector(".destination");
  
  // copies the entire node into ther flex: styled row
  tempDestination.appendChild(newCopy);
}
