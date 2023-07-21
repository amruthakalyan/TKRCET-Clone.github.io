alert("Welcome to TKRCET :)");

//slideshow using javascript

let slideindex=0;
function slideshow(){
    let i;
    let slides = document.getElementsByClassName('slides');
    for( i=0;i<slides.length;i++){
        slides[i].style.display='none';
    }
     slideindex++;
     if(slideindex === slides.lenght){
         slideindex =0;
     }
     if(slideindex > slides.length-1)
     {
        slideindex=1;
     }
         slides[slideindex-1].style.display='block';
        setTimeout(slideshow,3000);
}
slideshow();

//click function
let img=document.getElementsByClassName('img1');
let info=document.getElementsByClassName('info');
console.log(info);
console.log(img);
for(let i=0;i<img.lenght,i<info.length;i++)
   {
      img[i].addEventListener('click',()=>{
        info[i].style.display='block';
        info[i].style.backgroundColor="gainsboro";
      })
   }
  let marquee=document.getElementsByClassName('marquee');
function  Stop(x){
    x.stop();
}
function start(x){
    x.start();
}