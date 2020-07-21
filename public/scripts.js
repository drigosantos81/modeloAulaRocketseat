const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');
const modal = document.querySelector('.modal');

for (let card of cards) {
    card.addEventListener("click", function(){
        const videoId = card.getAttribute("id");
        window.location.href = `/video?id=${videoId}`;
    })
}

// Máscara para REAL
const valor = document.querySelector('input[name="valor"]');
valor.addEventListener("keydown", function(e) {
    setTimeout(function() {
        let { value } = e.target;
        value = value.replace(/\D/g, "");

        value = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value/100);
        
        e.target.value = value;
        
        document.querySelector('#resposta').innerHTML = `Valor: ${value}`;
    }, 1);
});

// Máscara para CPF
const cpf = document.querySelector('input#cpf');
cpf.addEventListener("keydown", function(e) {
    setTimeout(function() {
        let { value } = e.target;
        
        value = value.replace(/\D/g, "");
        value = value.replace(/(\d{3})(\d)/,"$1.$2");
        value = value.replace(/(\d{3})(\d)/,"$1.$2");
        value = value.replace(/(\d{3})(\d{1,2})$/,"$1-$2");

        e.target.value = value;
    });
});

//  Máscara para percentual
const percent = document.querySelector('input#percent');
percent.addEventListener("keydown", function(e) {
    setTimeout(function() {
        let { value } = e.target;
        value = value.replace(/\D/g, "");

        value = new Intl.NumberFormat("en-US", {
            style: 'percent',
            minimumFractionDigits: 2,
            minimumIntegerDigits: 2,
            maximumSignificantDigits: 6
        }).format(value/10000);

        e.target.value = value;
    });
});
