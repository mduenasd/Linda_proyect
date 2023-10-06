const open = document.getElementById('open_btn');
const modal_container = document.getElementById('modal_container_btn');
const close = document.getElementById('close_btn');

open.addEventListener('click', () => {
  modal_container.classList.add('show');  
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});