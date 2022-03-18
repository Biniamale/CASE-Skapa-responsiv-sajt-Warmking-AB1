const readMoreBtn = document.querySelector(".read-more-btn");
const aboutContent = document.querySelector(".about-content");

readMoreBtn.addEventListener("click", (e) =>{
    aboutContent.classList.toggle("show-more");
    if(readMoreBtn.innerText === "Read More"){
        readMoreBtn.innerText = "Read Less";
    }else{
        readMoreBtn.innerText = "Read More";
    }
});