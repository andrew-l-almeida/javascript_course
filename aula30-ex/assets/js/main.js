// const date = new Date('2020-01-01 1:1');

// const dia = date.getDate();
// const mes = date.getMonth();
// const ano = date.getFullYear();
// const diaSemana = date.getDay();
// const hora = date.getHours();
// const minutos = date.getMinutes();

// const horaFormatada = hora <10 ? `${0}${hora}` : hora;
// const minutoFormatado = minutos<10 ? `${0}${minutos}` : minutos;

// console.log(ano)



// const getWeekDay = (day) =>{
//     let diaSemanaTexto;
//     switch (day){
//         case 0:
//             diaSemanaTexto = 'Domingo'
//             return diaSemanaTexto;
//         case 1:
//             diaSemanaTexto = 'Segunda-Feira'
//             return diaSemanaTexto;
//         case 2:
//             diaSemanaTexto = 'Terça-Feira'
//             return diaSemanaTexto;
//         case 3:
//             diaSemanaTexto = 'Quarta-Feira'
//             return diaSemanaTexto;
//         case 4:
//             diaSemanaTexto = 'Quinta-Feira'
//             return diaSemanaTexto;
//         case 5:
//             diaSemanaTexto = 'Sexta-Feira'
//             return diaSemanaTexto;
//         case 6:
//             diaSemanaTexto = 'Sabado'
//             return diaSemanaTexto;
//         default:
//             diaSemanaTexto = ''
//             return diaSemanaTexto;
//     }
// };

// const getMonth = (month) => {
//     let yearText;

//     switch(month){
//         case 0:
//             yearText = 'Janeiro'
//             return yearText;
//         case 1:
//             yearText = 'Fevereiro'
//             return yearText;
//         case 2:
//             yearText = 'Março'
//             return yearText;
//         case 3:
//             yearText = 'Abril'
//             return yearText;
//         case 4:
//             yearText = 'Maio'
//             return yearText;
//         case 5:
//             yearText = 'Junho'
//             return yearText;
//         case 6:
//             yearText = 'Julho'
//             return yearText;
//         case 7:
//             yearText = 'Agosto'
//             return yearText;
//         case 8:
//             yearText = 'Setembro'
//             return yearText;
//         case 9:
//             yearText = 'Outubro'
//             return yearText;
//         case 10:
//             yearText = 'Novembro'
//             return yearText;
//         case 11:
//             yearText = 'Dezembro'
//             return yearText;
//         default:
//             yearText = ''
//             return yearText;
//     }
// }

// const mudaTitulo = (diaSemana, dia, mes, ano, hora, minuto) =>{
//     const titulo = document.querySelector('#paragrafo-date')
//     titulo.innerHTML = `<h3>${getWeekDay(diaSemana)}, ${dia} de ${getMonth(mes)} de ${ano} ${hora}:${minuto}</h3>`
// }

// mudaTitulo(diaSemana, dia, mes, ano, horaFormatada, minutoFormatado);

const h1 = document.querySelector(".container h1")
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
}
h1.innerHTML = data.toLocaleString('pt-br', opcoes)