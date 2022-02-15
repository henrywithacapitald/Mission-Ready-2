

// document.getElementById("rainbow-logo").innerHTML = "Mission Ready";
// document.getElementById("rainbow-logo").style.color="red";

// function changecolor() {

    
//     document.getElementById("rainbow-logo").style.color="red";
//     document.getElementById("rainbow-logo").style.color="blue";

    
// }
// changecolor()

// let bg = document.querySelector('rainbow-logo');
// let colors = ["red", "green", "purple", "#black", "yellow", "Black"];
// let index = 0;

// function change() {
//     if(index >= colors.length){ clearInterval(timer); }
    
//     document.getElementById("rainbow-logo").style.color = colors[index++];

// }


function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
    document.getElementById("dark-mode").style.backgroundColor="black";

}
darkMode()




let bg = document.querySelector('rainbow-logo');
let colors = ["yellow", "green", "purple", "#black", "red",];
let index = 0;

function change() {
    if(index >= colors.length){ clearInterval(timer); }
    
    document.getElementById("rainbow-logo").style.color = colors[index++];
    document.getElementById("three").style.color = colors[index++];


}


function test() {
    let bg = document.querySelector('rainbow-second');
    let colors = ["blue", "red", "purple", "#lack", "",];
    let index = 0;
    

    if(index >= colors.length){ clearInterval(clock); }
    
    document.getElementById("rainbow-second").style.color = colors[index++];
    
    
}
test()
let clock = setInterval(test, 1000);



    let timer = setInterval(change, 1000); 


    mybutton = document.getElementById("top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}