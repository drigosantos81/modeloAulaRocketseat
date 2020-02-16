const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');
const modal = document.querySelector('.modal');

for (let card of cards) {
    card.addEventListener("click", function(){
        const videoId = card.getAttribute("id");
        modalOverlay.classList.add("active");
        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoId}`;
    })
}

document.querySelector('.close-modal').addEventListener("click", function() {
    modalOverlay.classList.remove("active");
    modalOverlay.querySelector("iframe").src="";
})

document.querySelector('.maxi-modal').addEventListener("click", function(event){
    event.preventDefault();
    modal.classList.remove("modal");
    modal.classList.add("maxi-modal-active");   
})