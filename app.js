 const wrapper =  document.querySelector(".wrapper");
// console.log(wrapper)
// wrapper.style.transform="translateX(-200vw)"

 const Menu = document.querySelectorAll(".Menu");

Menu.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        console.log("You clicked!"+ index)
    });
});