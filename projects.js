const about = document.querySelector(".about-box");
const content = document.querySelector(".content-description");
const h2 = document.querySelector("h2");
const code = document.querySelector(".code");
const h1 = document.querySelector("h1");
const h3 = document.querySelector("h3");


document.addEventListener("scroll", () =>{
    if(isInViewPort(h3)){
        code.style.opacity = "1";
    }
    
    else{
        code.style.opacity = "0";
    }
})


document.addEventListener("scroll", () =>{
    if(isInViewPort(h1)){
        about.style.opacity = "1";
    }
    else{

        about.style.opacity ="0";
    }
})

document.addEventListener("scroll", () =>{
    if (isInViewPort(h2)){
        content.style.opacity = "1";
        h2.style.opacity = "1";
    }
    else{
        content.style.opacity = "0";
        h2.style.opacity = "0";
    }
})

function isInViewPort(el){
    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
    );
}