alert("Welcome to TKRCET :)");

//slideshow using javascript

let slideindex=0;
slideshow();
function slideshow(){
    let i;
    let slides = document.querySelectorAll('.slides');
    for( i=0;i<slides.length;i++){
        slides[i].style.display='none';
    }
    slideindex++;
    if(slideindex === slides.lenght){
        slideindex = 0;
    }
    slides[slideindex-1].style.display='block';
    setTimeout(slideshow,2000);
}
let notification=document.getElementsByTagName('span');
    this.addEventListener('click',()=>{
    this.stop();
})