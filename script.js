let navbar=document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick=()=>{
   navbar.classList.toggle('active');
   searchForm.classList.remove('active');
   cartItem.classList.remove('active');

}
let searchForm=document.querySelector('.searchForm');
document.querySelector('#search-btn').onclick=()=>{
   searchForm.classList.toggle('active');
   navbar.classList.remove('active');
   cartItem.classList.remove('active');

}

let cartItem=document.querySelector('.cartItem');
document.querySelector('#search-btn').onclick=()=>{
   cartItem.classList.toggle('active');
   navbar.classList.remove('active');
   cartItem.classList.remove('active');

}
window.onscroll=()=>{
   navbar.classList.toggle('active');
   searchForm.classList.remove('active');
   cartItem.classList.remove('active');

}