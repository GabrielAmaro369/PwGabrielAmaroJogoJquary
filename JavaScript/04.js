
$(document).ready(function() {

 
    $("#btnCalcular").click(function() {

      const quilometragem = parseFloat($("#quilometragem").val());
  
 
      const valorCombustivel = parseFloat($("#valorCombustivel").val());
  

      const gastoCombustivel = calcularGastoCombustivel(quilometragem, valorCombustivel);
  
 
      $("#resultado").text(`O gasto de combustível é R$ ${gastoCombustivel.toFixed(2)}.`);
    });
  

    function calcularGastoCombustivel(quilometragem, valorCombustivel) {
      const consumoVeiculo = 8;
  

      const litrosConsumidos = quilometragem / consumoVeiculo;
  

      const gastoTotal = litrosConsumidos * valorCombustivel;
  
      return gastoTotal;
    }
  
  });
  