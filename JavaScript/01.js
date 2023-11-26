
$(document).ready(function() {


    function isPar(numero) {
      return numero % 2 === 0;
    }
  

    function calcularSomaPares(valor) {
      let soma = 0;
      let numerosPares = [];
  
      for (let i = 1; i <= valor; i++) {
        if (isPar(i)) {
          soma += i;
          numerosPares.push(i);
        }
      }
  
      return { soma, numerosPares };
    }
  

    $("#btnExibir").click(function() {

      const valorInformado = parseInt($("#inputNumero").val());
  

      const resultado = calcularSomaPares(valorInformado);
  

      $("#numerosPares").text(`Números pares até ${valorInformado}: ${resultado.numerosPares.join(', ')}.`);
  
    
      $("#somaPares").text(`A soma dos números pares até ${valorInformado} é ${resultado.soma}.`);
    });
  
  });
  