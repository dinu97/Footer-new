
// var addbtns = document.getElementsById("addNewElement-btn-two");
var closebtns = document.getElementsByClassName("close");
var modal = document.getElementById('headerComponentBox-Id');
var modal2 = document.getElementById('ImageUpload-Id');


var i;

for (i = 0; i < closebtns.length; i++) {
    closebtns[i].addEventListener("click", function () {
        this.parentElement.remove();
    });
}



// for (j = 0; j < addbtns.length; j++) {
//     addbtns[j].addEventListener("click", function () {
//         this.parentElement.();
//     });
// }


function myFunction() {

    // Create an "li" node:
    const node = document.createElement("li");
    
    // Create a text node:
    const textnode = document.getElementById("addNewElement-btn-two");
    
    // Append the text node to the "li" node:
    node.appendChild(textnode);
    
    // Append the "li" node to the list:
    document.getElementById("navbar-navId").appendChild(node);
    }


function showFunction(){
    modal.style.display = "block";
  }
  
  function closeFunction(){
    modal.style.display = "none";
  }

function showFunction1(){
    modal2.style.display = "block";
}
function closeFunction1(){
    modal2.style.display = "none";
  }
