// script to decrypt email address for mailto link
function UnCryptMailto( s ){
    var n = 0;
    var r = "";
    // iteration through encryption
    for( var i = 0; i < s.length; i++){
        n = s.charCodeAt( i );
        if( n >= 8364 ){
            n = 128;
        }
        r += String.fromCharCode( n - 1 );
    }
    return r;
}
// call function
function linkTo_UnCryptMailto( s ){
    location.href=UnCryptMailto( s );
}


// top of page button
// Get the button:
let mybutton = document.getElementById("myBtn");
// When click button, scroll to top document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}