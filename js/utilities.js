//this js controls the toggle on the tutorial, prob. should have used an actual toggle instead of this, oh well . . .
function visible(el){
    var element = document.getElementById(el);
    if( element.classList.contains("hidden") ){
        element.classList.remove("hidden");
        element.classList.add("block");
    }
}
//pass the current active section and the one you want to activate as params
function sectionSwap(current,next){
    let sections = ["section1","section2","section3"];
    let Celement = document.getElementById(current);
    let Nelement = document.getElementById(next);

    Celement.classList.add("hidden");
    Nelement.classList.remove("hidden");
}

//call this when changing sections too!
function defineHeight(){
    let mainDiv = document.getElementById("mainContainer");
    let bgIndex1 = document.getElementsByClassName("bgIndex1");
    let mainHeight = mainDiv.offsetHeight;
    
    for (let index = 0; index < bgIndex1.length; index++) {                        
        bgIndex1[index].style.height = mainHeight + "px";
    }
}

function pauseAnim(animation){
    let anim = document.getElementById(animation);
    anim.style.webkitAnimationPlayState = "paused";            
}

function playAnim(animation){
    let anim = document.getElementById(animation);            
    anim.style.webkitAnimationPlayState = "running";
}

//WTF is this function?
//what we are doing here is, pass an id as a parameter
//find it on the DOM
//changing the display no nothing, so it dissapears
//wait 500 miliseconds, and upon re appearing it wil re-start the animation
//for some reason css doesnt have an inbuilt way of reseting animations :/
function resetAnim(animation){
    let anim = document.getElementById(animation);
    let prevDisplay = anim.style.display; //save the display to prevent breaking the css structure

    anim.style.display = "none";

    setTimeout(function(){
        anim.style.display = prevDisplay;
    }, 500)
}