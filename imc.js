function calcularImc(peso, altura) {
  let imc = Math.round(peso / Math.pow(altura, 2));
  console.log(imc);
}

calcularImc(101, 1.81);
