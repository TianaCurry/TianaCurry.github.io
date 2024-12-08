/*------------------*/
// top of page button
/*------------------*/

var charCount = 0;
var greetingTxt = "Hi, I'm Tiana Curry"; /* The text */
var typingSpeed = 150; /* The speed/duration of the effect in milliseconds */

function typeWriter() {

  if (charCount < greetingTxt.length) {

    document.getElementsByClassName("greetings")[0].innerHTML += greetingTxt.charAt(charCount);

    charCount++;

    setTimeout(typeWriter, typingSpeed);

  }

}



/*------------------*/
// top of page button
/*------------------*/

// script to decrypt email address for mailto link
function decryptMailto( encryptedTxt ){
  
  var charCode = 0;
  var decryptedTxt = "";

  // iteration through encryption
  for( var charCount = 0; charCount < encryptedTxt.length; charCount++){
      
      charCode = encryptedTxt.charCodeAt( charCount );
      
      if( charCode >= 8364 ){

          charCode = 128;

      }
      
      decryptedTxt += String.fromCharCode( charCode - 1 );
  }

  return decryptedTxt;
}

// call function
function decryptMailto_connection( encryptedTxt ){

  location.href=decryptMailto( encryptedTxt );

}



/*------------------*/
// top of page button
/*------------------*/

let mybutton = document.getElementById("foot-button"); //call button in html script

// When click button, scroll to top document
function topFunction() {

  document.body.scrollTop = 0; // For Safari

  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

}