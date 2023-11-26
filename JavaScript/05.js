
$(document).ready(function() {


    $("#btnCalcular").click(function() {
 
      const comprimento = parseFloat($("#comprimento").val());
  

      const largura = parseFloat($("#largura").val());
  

      const areaCcomodo = calcularAreaCcomodo(comprimento, largura);
  

      const custoAssentamento = calcularCustoAssentamento(areaCcomodo);
  
 
      $("#resultado").text(`O custo para assentamento de piso é R$ ${custoAssentamento.toFixed(2)}.`);
    });
  

    function calcularAreaCcomodo(comprimento, largura) {
      return comprimento * largura;
    }
  

    function calcularCustoAssentamento(areaCcomodo) {
      const precoPorMetroQuadrado = 36.00;
      return areaCcomodo * precoPorMetroQuadrado;
    }
  
  });
  