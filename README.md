# Cartão de crédito

###Passo a passo

- Através de um prompt, pedir que o usuário inclua o número do cartão de crédito;
- Foi feita uma verificação para que não seja aceito campo em branco;

- Uma função de nome 'isValidCard' foi criada e, dentro dela, algumas variáveis foram determinadas:
  -- arrayReverse para guardar o número obtido pelo prompt, que foi transformado em array e passou por um tratamento para ser utilizado no sentido inverso através de um loop
  -- arrayNumber que contém os valores obtidos nas posições pares do array,
  -- sum variável que ajudará na verificação final do cartão de crédito,

- Após obter o array com os números em posição invertida, foi feito um loop para encontrar os números em posições pares;
- Cada número foi multiplicado por 2;
- Os valores obtidos passaram por uma verificação:
  -- quando o resultado é maior ou igual a 10, é subtraído 9 do resultado,
  -- quando menor ou igual a 9, o valor é reservado,

- É realizada uma soma com os valores obtidos no processo anterior:
  -- quando o módulo da soma por 10 for igual a 0, o cartão é válido e uma mensagem é impressa na tela avisando o usuário,
  -- caso contrário, uma mensagem avisando que o cartão é inválido, também será impressa na tela.


###Fluxograma

![](https://www.lucidchart.com/publicSegments/view/40f3ef5e-4741-4ba7-adf0-42c312cdef6b/image.png)
