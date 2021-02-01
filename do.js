var change = document.getElementById("containerA"); /**get the whole web id*/
var ch = document.getElementById("pen");

function Openn(){
    document.getElementById("pen").style.width = "300px";
    change.style.backgroundColor = "#999999";
}

function kloss(){
    document.getElementById("pen").style.width = "0";
    change.style.backgroundColor = "#ffffff";
}

/*
window.onclick = function(event){
    if(event.target == this.change){
        document.getElementById("pen").style.width = "0";
        change.style.backgroundColor = "#ffffff";
    }
} 
*/


/*For the scroll up botton*/
let skrol = document.getElementById("tap");


/*if the user scroll 20px from the top the arrow botton will dsiplay*/
window.onscroll = function(){
    scrollFunction()
};
 
function scrollFunction(){
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        skrol.style.display = "block";
    }
    else{
        skrol.style.display = "none";
    }
}

/*scroll to top*/
function taptap(){
    document.body.scrollTop = "0";
    document.documentElement.scrollTop = "0";
}
