var age = prompt("Qual a sua idade?");
var expectativa = prompt("Qual a sua expectativa de vida?");
var vida = expectativa - age;

function calcular(vida) {
  let dias = vida * 365;
  let semanas = vida * 52;
  let meses = vida * 12;

  alert(
    "Você tem " +
      dias +
      " dias restantes, ou " +
      semanas +
      " semanas restantes, ou " +
      meses +
      " meses restantes."
  );
}

calcular(vida);
