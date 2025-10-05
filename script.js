// Simple carousel + interaction logic
updateUI();
}


prevBtn.addEventListener('click', ()=>goToSlide(currentIndex-1));
nextBtn.addEventListener('click', ()=>goToSlide(currentIndex+1));


// autoplay
let autoplay = setInterval(()=>goToSlide(currentIndex+1), 5000);
document.querySelector('.carousel').addEventListener('mouseenter', ()=>clearInterval(autoplay));
document.querySelector('.carousel').addEventListener('mouseleave', ()=>autoplay = setInterval(()=>goToSlide(currentIndex+1),5000));


// initial render after layout
window.addEventListener('load', ()=>{goToSlide(0)});
window.addEventListener('resize', ()=>updateUI());


// Buy modal handling
const buyButtons = document.querySelectorAll('.buy-now');
const modal = document.getElementById('buy-modal');
const modalName = document.getElementById('modal-name');
const modalScent = document.getElementById('modal-scent');
const modalClose = document.querySelector('.modal-close');


buyButtons.forEach(btn=>btn.addEventListener('click', (e)=>{
// find parent slide
const slide = e.target.closest('.carousel-slide');
openBuyModal(slide);
}));


function openBuyModal(slide){
modal.setAttribute('aria-hidden','false');
modalName.textContent = slide.dataset.name;
modalScent.textContent = 'Scent: ' + slide.dataset.scent;
}
function closeBuyModal(){ modal.setAttribute('aria-hidden','true'); }
modalClose.addEventListener('click', closeBuyModal);
modal.addEventListener('click', (e)=>{ if(e.target===modal) closeBuyModal(); });


document.getElementById('confirm-buy').addEventListener('click', ()=>{
const qty = document.getElementById('qty').value || 1;
alert(`Thanks — your order for ${qty}x ${modalName.textContent} has been received (placeholder).`);
closeBuyModal();
});


// Contact form (placeholder) — just simulate submit
const contactForm = document.getElementById('contact-form');
const contactStatus = document.getElementById('contact-status');
contactForm.addEventListener('submit', (e)=>{
e.preventDefault();
contactStatus.textContent = 'Sending...';
// simulate network
setTimeout(()=>{
contactStatus.textContent = 'Message sent! We will reply within 48 hours.';
contactForm.reset();
}, 900);
});


// footer year
document.getElementById('year').textContent = new Date().getFullYear();
});
