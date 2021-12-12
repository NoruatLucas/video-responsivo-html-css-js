
let video = document.getElementById("video1");

function back(){
    video.currentTime-=15;

}
 
function forward(){
    video.currentTime+=15;
}
  
function play(){
    
    video.play();
    video.playbackRate = 1;
}
 
function pause(){
    video.pause();

}
 
function stop(){
    video.pause();
    video.currentTime=0;
}

function fast(){

    video.playbackRate += 0.1;

}
 
function slow(){
    video.playbackRate -= 0.1;
}

function volumeUp(){
    video.volume +=0.1;

}

function volumeDown(){
    video.volume -=0.1;

}
function onOver(elemento){
    elemento.style.opacity = 0.5;
    console.log("dentro");
}


function onOut(elemento){
    elemento.style.opacity = 0;
    console.log("fora");
}

