let headerTwoEditElement = document.getElementById("elementEditableBox-Id");
function showHeaderTwo_EditableElementModel() {
    headerTwoEditElement.style.display = "block";
  }
  
  function closeHeaderTwo_EditableElementModel() {
    headerTwoEditElement.style.display = "none";
  }
// let model1 = document.getElementById("elementEditableBox-Id");
// function showFunction1() {
//     model1.style.display = "block";
//   }
  
//   function closeFunction1() {
//     model1.style.display ="none"
//   }
let bgColor = document.getElementById('BackgroundColor');
let txtColor = document.getElementById('color');
let border_radius = document.getElementById('border-radius')
let editButton = document.getElementById('headerTwo_Button_2');


// Get the value of the input.
let getInputValue = function( input ) {

	return input.value;
};


// Update the colors.
let updateColors = function() {
	
	let styleValue = getInputValue( this );
	
	 if ( txtColor === this ) {
		editButton.style.color = styleValue;
	} 
    else if ( bgColor === this ) {
		editButton.style.backgroundColor = styleValue;
	}
    
};
//change the border radius.
let borderRadius = function() {
    let styleValue2 = getInputValue( this );
    if(border_radius === this){
    editButton.style.borderRadius = styleValue2 + 'px';
    }
};



// Update button colors and border radius.
bgColor.addEventListener( 'change', updateColors );
txtColor.addEventListener( 'change', updateColors );
border_radius.addEventListener( 'change', borderRadius );
