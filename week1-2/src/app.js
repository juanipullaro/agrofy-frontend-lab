document.addEventListener("scroll",()=> {
    var hdr = document.querySelector(".nav");

    if (window.scrollY !=0){
        hdr.style.backgroundColor="white";
        hdr.style.position = "fixed";
    }
    else{
        hdr.style.backgroundColor="#f0e482";
        hdr.style.position = "relative";
    }

});


