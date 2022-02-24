/****      STEP 1       *****/
/* write a program taki button pe click krte hin koi function run ho jae */
// document.querySelector("button").addEventListener("click", onClicking);    //---> isse sirf first button pr ye function run karega
// function onClicking() {
//     alert("I'm clicked");
// }

/* OR i can write the above code like this :- */

// document.querySelector("button").addEventListener("click", function () {
//     alert("I'm licked");
// });


/****       STEP 2       ****/
/* Now write a program so that upar wala function kisi bhi button pe click krne pe above function run kare. */
var noOfDrumButton = document.querySelectorAll('.drum').length;
for (var i = 0; i < noOfDrumButton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var ButtonInnerHTML = this.innerHTML;
        makeSound(ButtonInnerHTML);
        buttonAnimation(ButtonInnerHTML);
    });
}
// it will listen the events of keyboard
document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});
function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        default:
    }
}
// Animation
 function buttonAnimation (currentButton){
   var activeButton =  document.querySelector("." + currentButton);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}