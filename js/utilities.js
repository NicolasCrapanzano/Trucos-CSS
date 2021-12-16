//this js controls the toggle on the tutorial, prob. should have used an actual toggle instead of this, oh well . . .
function visible(el){
    var element = document.getElementById(el);
    if( element.classList.contains("hidden") ){
        element.classList.remove("hidden");
        element.classList.add("block");
    }
}

function sectionSwap(){
    
}