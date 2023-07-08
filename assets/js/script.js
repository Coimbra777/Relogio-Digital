const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const relogio = setInterval(() => {
  let dataDeHoje = new Date();
  let hora = dataDeHoje.getHours();
  let minuto = dataDeHoje.getMinutes();
  let segundo = dataDeHoje.getSeconds();

  // condição para  formatar as horas, minutos e segundos
  if (hora < 10) {
    hora = "0" + hora;
  }
  if (minuto < 10) {
    minuto = "0" + minuto;
  }
  if (segundo < 10) {
    segundo = "0" + segundo;
  }

  // aqui exibe na tela
  horas.innerText = hora;
  minutos.innerText = minuto;
  segundos.innerText = segundo;
});
