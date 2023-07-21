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