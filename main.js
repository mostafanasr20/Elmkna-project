// let mega = document.querySelector(".mega i")
//  let links = document.querySelector(".header .container ul")

//  mega.addEventListener("click", function(){
//   this.classList.toggle("fa-xmark")
//   this.classList.toggle("fa-bars")
//   if(links.style.right === "5000px" || !links.style.right ){
//     links.style.right = "0"
//     this.classList.toggle("fa-xmark")
//   }else{
//       this.classList.toggle("fa-bars")
//      links.style.right = "5000px"
//   }

// })

let mega = document.querySelector(".mega i");
let links = document.querySelector(".header .container ul");

mega.addEventListener("click", function(){
    
    this.classList.toggle("fa-xmark");
    this.classList.toggle("fa-bars");
    
    if(links.style.right === "0px") {
        links.style.right = "5000px";
    } else {
        links.style.right = "0";
    }
});