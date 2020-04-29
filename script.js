

function myKeyPress(e){
 // TODO: Add a condition to ignore entries beyond 10 digits
  var charCode = e.which ? e.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
  if(e.target.value.length > 11) {
    // e.target.value = e.target.value.substr(0, 11);
    return false;
  }

  /* TODO: retrieve the value from the text input */
  var mytextbox = e.target.value;


  

  var keyPressed;
  if(window.event) { // IE
    keyPressed = e.keyCode;
  } else if(e.which){ // Netscape/Firefox/Opera
    keyPressed = e.which;
  }

  var x = String.fromCharCode(keyPressed);
  var y = formatPhoneNumber(mytextbox);


  console.log("Key Pressed = " + x);
  console.log("  Formatted = " + y);



 
  
// TODO: set the value of the textbox with the formatted value
  e.target.value=y;
}

function formatPhoneNumber(value){

  /* TODO:  Use replace function to ignore extra - character */
  value = value.replace(/-/g, "");


  if(value.length > 3 && value.length <= 6)
    value = value.slice(0,3) + "-" + value.slice(3);
  else if(value.length > 6)
    value = value.slice(0,3) + "-" + value.slice(3,6) + "-" + value.slice(6);

  return value;
}
