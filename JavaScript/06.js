
$(document).ready(function() {


    $("#btnCalcular").click(function() {

      const altura = parseFloat($("#altura").val());
  
  
      const sexo = $("#sexo").val();
  
    
      const pesoIdeal = calcularPesoIdeal(altura, sexo);
  
    
      $("#resultado").text(`Seu peso ideal é aproximadamente ${pesoIdeal.toFixed(2)} kg.`);
    });
  

    function calcularPesoIdeal(altura, sexo) {
      if (sexo === 'masculino') {
        return (72.7 * altura) - 58;
      } else if (sexo === 'feminino') {
        return (62.1 * altura) - 44.7;
      } else {
  
        return 0;
      }
    }
  
  });
  