
$(document).ready(function() {


    function converterTemperatura(temperatura, unidadeOrigem, unidadeDestino) {
      if (unidadeOrigem === 'celsius' && unidadeDestino === 'fahrenheit') {
        return temperatura * 1.8 + 32;
      } else if (unidadeOrigem === 'fahrenheit' && unidadeDestino === 'celsius') {
        return (temperatura - 32) / 1.8;
      } else {
 
        return temperatura;
      }
    }
  

    $("#btnConverter").click(function() {

      const temperatura = parseFloat($("#inputTemperatura").val());
  
   
      const unidadeOrigem = $("#selectUnidade").val();
  
    
      const unidadeDestino = unidadeOrigem === 'celsius' ? 'fahrenheit' : 'celsius';
  
   
      const temperaturaConvertida = converterTemperatura(temperatura, unidadeOrigem, unidadeDestino);
  
     
      $("#resultado").text(`${temperatura} graus ${unidadeOrigem} são aproximadamente ${temperaturaConvertida.toFixed(2)} graus ${unidadeDestino}.`);
    });
  
  });
  