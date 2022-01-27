const project1 = document.getElementById("proj-1");
const project2 = document.getElementById("proj-2");
const divy = document.createElement("divy");
const elements = document.querySelectorAll("project-box");
const circleFlex = document.createElement("div");
const imageFlex = document.querySelectorAll(".img-flex");


const projects =  document.querySelectorAll(".project-title");



window.addEventListener("resize", ()  =>{
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    if (vw >= 850){
        
    }
})




function isInViewPort(el){
    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && 
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
    );
}

document.addEventListener("scroll", () => {
    for (var i =0; i < projects.length;i++){
        if(isInViewPort(projects[i])){
            projects[i].classList.add("in-view");
            projects[i].style.opacity = "1";
            imageFlex[i].style.opacity = "1"
           
        }
        else{
            projects[i].style.opacity = "0"
            imageFlex[i].style.opacity = "0";
        }
    }
})




