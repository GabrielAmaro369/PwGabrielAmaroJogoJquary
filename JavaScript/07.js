
$(document).ready(function() {
    // Vetor para armazenar os valores
    const valores = [];
  
    // Manipulador de clique para o botão Adicionar
    $("#btnAdicionar").click(function() {
      // Obter o valor informado pelo usuário
      const valor = parseFloat($("#inputNumero").val());
  
      // Verificar se o valor é válido
      if (!isNaN(valor)) {
        // Adicionar o valor ao vetor
        valores.push(valor);
        // Limpar o campo de entrada
        $("#inputNumero").val('');
      }
    });
  
    // Manipulador de clique para o botão Mostrar Todos
    $("#btnMostrarTodos").click(function() {
      exibirResultado(valores.join(', '));
    });
  
    // Manipulador de clique para o botão Maior Valor
    $("#btnMaiorValor").click(function() {
      const maiorValor = encontrarMaiorValor(valores);
      exibirResultado(`Maior valor: ${maiorValor}`);
    });
  
    // Manipulador de clique para o botão Menor Valor
    $("#btnMenorValor").click(function() {
      const menorValor = encontrarMenorValor(valores);
      exibirResultado(`Menor valor: ${menorValor}`);
    });
  
    // Função para encontrar o maior valor em um vetor
    function encontrarMaiorValor(vetor) {
      return Math.max(...vetor);
    }
  
    // Função para encontrar o menor valor em um vetor
    function encontrarMenorValor(vetor) {
      return Math.min(...vetor);
    }
  
    // Função para exibir o resultado na página
    function exibirResultado(resultado) {
      $("#resultado").text(resultado);
    }
  });
  