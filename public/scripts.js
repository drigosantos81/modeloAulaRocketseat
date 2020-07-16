const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');
const modal = document.querySelector('.modal');

for (let card of cards) {
    card.addEventListener("click", function(){
        const videoId = card.getAttribute("id");
        window.location.href = `/video?id=${videoId}`;
    })
}

const input = document.querySelector('input[name="valor"]');
input.addEventListener("keydown", function(e) {
    setTimeout(function() {
        let { value } = e.target;
        value = value.replace(/\D/g,"") * 2;
        
        console.log(value);
        document.querySelector('#resposta').innerHTML = `Valor: R$ ${value}`;
    }, 100);
});

// function format() {
//     const input = document.querySelector('input[name="valor"]');
//     input.addEventListener("keydown", function(e) {
//         setTimeout(function() {
//             let { value } = e.target;
//             value = value.replace(/\D/g,"") * 2;
            
//             console.log(value);
//             document.querySelector('#resposta').innerHTML = `Valor: R$ ${value}`;
//         }, 100);
//     });
// }

