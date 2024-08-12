//access song
let song=document.querySelector("#song");
//access progrss bar
let progress=document.querySelector("#progress");
//access play icon
let ctrl_Icon= document.querySelector("#ctrlIcon");

song.onloadedmetadata=function(){

    progress.max=song.duration;
    progress.value=song.currentTime;
}

ctrl_Icon.addEventListener("click",()=>{
 if(ctrl_Icon.classList.contains("fa-pause")){
    song.pause();
    ctrl_Icon.classList.remove("fa-pause");
    ctrl_Icon.classList.add("fa-play");
    
     
     
     
 }
    else{
        song.play();
        ctrl_Icon.classList.add("fa-pause");
        ctrl_Icon.classList.remove("fa-play");
       
         
         
    }
})
if(song.play()){
  setInterval(()=>{
    progress.value=song.currentTime

  },500);

}
    progress.addEventListener("click",()=>{
song.play();
        song.currentTime=progress.value;
        ctrl_Icon.classList.add("fa-pause");
        ctrl_Icon.classList.remove("fa-play");

    })







