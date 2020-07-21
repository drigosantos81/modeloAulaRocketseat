const Mask = {
    apply(target, func) {

        setTimeout(function () {

            target.value = Mask[func](target.value)

        }, 1)
    },

    formatUSD (value) {

        value = value.replace(/\D/g, "")

        return value = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(value/100)
    },

    formatPercent(value) {

        value = value.replace(/\D/g, "")

        return new Intl.NumberFormat('en-US', {
            style: 'percent',
            minimumFractionDigits: 2,
            minimumIntegerDigits: 2,
            maximumSignificantDigits: 6
            
        }).format(value/10000)
    },

    formatCPF(value) {

       value = value.replace(/\D/g, "")

       value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "\$1.\$2.\$3-\$4")

       return value
    }
}

//Fazendo com callbacks:

// function doubleNumber(number) {
//     return console.log(number * 2)
//   }
  
// function show (number, callback) {
    
//     setTimeout(function () {
        
//         doubleNumber(number)

//         callback()
        
//     }, 1000, number)
    
// }


// show(1, function () {
//     show(2, function () {
//         show(3, function () {
//             show(4, function () {
//                 show(5, function () {

//                     return console.log("Sou o 5")
//                 })
//                 console.log("Sou o 4")
//             })
//             console.log("Sou o 3")
//         })
//         console.log("Sou o 2")
//     })
//     console.log("Sou o 1")
// })

// Fazendo com Promises / async await:

function calculate(number, lastResult) {

    return new Promise ((resolve, reject) => {

        setTimeout(function () {

            mult = number * 2
            final = Math.floor(mult + lastResult)

            console.log(final)
            
            resolve(final)
                        
        }, 1000, number, lastResult)

    })
}

// calculate(1, 0).then((res) => { calculate(2, res)
// .then((res) => { calculate(3, res)
// .then((res) => { calculate(4, res)
// .then((res) => { calculate(5, res) }) }) })})

async function results() {
    
    let result

    result = await calculate(1, 0) // 2

    result = await calculate(2, result)  // 6

    result = await calculate(3, result) // 12

    result = await calculate(4, result) // 20

    result = await calculate(5, result) // 30
}

// results()

// **************** OUTROS EXEMPLOS ****************

function fMasc(objeto,mascara) {
    obj=objeto
    masc=mascara
    setTimeout("fMascEx()",1)
}

function fMascEx() {
    obj.value=masc(obj.value)
}

function mTel(tel) {
    tel=tel.replace(/\D/g,"")
    tel=tel.replace(/^(\d)/,"($1")
    tel=tel.replace(/(.{3})(\d)/,"$1)$2")
    if(tel.length == 9) {
        tel=tel.replace(/(.{1})$/,"-$1")
    } else if (tel.length == 10) {
        tel=tel.replace(/(.{2})$/,"-$1")
    } else if (tel.length == 11) {
        tel=tel.replace(/(.{3})$/,"-$1")
    } else if (tel.length == 12) {
        tel=tel.replace(/(.{4})$/,"-$1")
    } else if (tel.length > 12) {
        tel=tel.replace(/(.{4})$/,"-$1")
    }
    return tel;
}

function mCNPJ(cnpj){
    cnpj=cnpj.replace(/\D/g,"")
    cnpj=cnpj.replace(/^(\d{2})(\d)/,"$1.$2")
    cnpj=cnpj.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")
    cnpj=cnpj.replace(/\.(\d{3})(\d)/,".$1/$2")
    cnpj=cnpj.replace(/(\d{4})(\d)/,"$1-$2")
    return cnpj
}

function mCPF(cpf){
    cpf=cpf.replace(/\D/g,"")
    cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
    cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
    cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
    return cpf
}

function mCEP(cep){
    cep=cep.replace(/\D/g,"")
    cep=cep.replace(/^(\d{2})(\d)/,"$1.$2")
    cep=cep.replace(/\.(\d{3})(\d)/,".$1-$2")
    return cep
}

function mNum(num){
    num=num.replace(/\D/g,"")
    return num
}

// CNPJ V.2
function cpfCnpj(value) {
    value = value.replace(/\D/g,"")

    if(value.length > 11) {
        value = value.replace(/(\d{2})(\d)/, "$1.$2")
        
        value = value.replace(/(\d{3})(\d)/, "$1.$2")
        
        value = value.replace(/(\d{3})(\d)/, "$1/$2")
        
        value = value.replace(/(\d{4})(\d)/, "$1-$2")
        console.log(`teste 3 ${value}`)

    } else {

    }

    return value
}