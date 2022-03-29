const about = document.querySelector(".about-box");
const content = document.querySelector(".content-description");
const h2 = document.querySelector("h2");
const code = document.querySelector(".code");
const h1 = document.querySelector("h1");
const h3 = document.querySelector("h3");
const motivation = document.querySelector(".jump-to-1");
const codeJump = document.querySelector(".jump-to-2");
const jumpToTop = document.createElement("div");

jumpToTop.style.width = "50px";
jumpToTop.style.height = "40px";
jumpToTop.textContent += "";
jumpToTop.innerHTML = "To Top &uarr;"
jumpToTop.style.borderRadius = "10px";
jumpToTop.style.textAlign = "center";
jumpToTop.style.cursor = "pointer";
jumpToTop.style.color = "white";
jumpToTop.style.top = "0";
jumpToTop.style.position = "fixed";
jumpToTop.style.background = "linear-gradient(45deg, #726f6f,#0c0d0d,#0c0d0d, #0c0d0d)";






document.addEventListener("scroll", () =>{
    if(isInViewPort(h3)){
        code.style.opacity = "1";
        code.appendChild(jumpToTop);
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
        content.appendChild(jumpToTop);
    }
    else{
        content.style.opacity = "0";
        h2.style.opacity = "0";
        content.removeChild(jumpToTop);
    }
})

motivation.addEventListener("click", () => {
    content.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
});

codeJump.addEventListener("click", () => {
    code.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
})
jumpToTop.addEventListener("click", () => {
    about.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
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