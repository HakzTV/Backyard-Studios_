

const navSlide = ()=>{
   const burger=  document.querySelector('.menu-toggle');
   const nav = document.querySelector('.links');

   burger.addEventListener('click', ()=>{
       nav.classList.toggle('links-active')
   });
}


navSlide();