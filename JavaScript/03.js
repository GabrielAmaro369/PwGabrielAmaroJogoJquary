
$(document).ready(function() {

    $("#btnCalcular").click(function() {
   
      const produtos = [
        {
          nome: $("#nomeProduto1").val(),
          valor: parseFloat($("#valorProduto1").val()),
          quantidade: parseInt($("#quantidadeProduto1").val())
        },
        {
          nome: $("#nomeProduto2").val(),
          valor: parseFloat($("#valorProduto2").val()),
          quantidade: parseInt($("#quantidadeProduto2").val())
        },
        {
          nome: $("#nomeProduto3").val(),
          valor: parseFloat($("#valorProduto3").val()),
          quantidade: parseInt($("#quantidadeProduto3").val())
        }
      ];
 
      const valorTotalVenda = calcularValorTotalVenda(produtos);
  

      $("#resultado").text(`O valor total da venda é R$ ${valorTotalVenda.toFixed(2)}.`);
    });

    function calcularValorTotalVenda(produtos) {
      let valorTotal = 0;
  
      for (let i = 0; i < produtos.length; i++) {
        valorTotal += produtos[i].valor * produtos[i].quantidade;
      }
  
      return valorTotal;
    }
  
  });
  