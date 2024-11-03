const filterbtn=document.querySelectorAll(".btns button");
const gallary=document.querySelectorAll(".gallary .item");


filterbtn.forEach((buttons)=>{
    buttons.addEventListener("click",function(){
          const value=this.getAttribute("data-filter")


          gallary.forEach((item)=>{
            if(value==='all'|| item.classList.contains(value)){
                item.style.display="block"
            }else{
                item.style.display="none"

            }
          })
    })
})