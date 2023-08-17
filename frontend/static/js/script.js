const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector("#btn");
const navImgDiv = document.querySelector(".nav_img");

closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
  menuBtnChange();
});

function menuBtnChange() {
 if(sidebar.classList.contains("open")){
   closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
   navImgDiv.classList.remove("hidden");
 }else {
   closeBtn.classList.replace("bx-menu-alt-right","bx-menu");
   navImgDiv.classList.add("hidden");
 }
}
