<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
   <script>
          var v1 = parseInt(prompt("Digite o primeiro valor: "));
          var v2 = parseInt(prompt("Digite o segundo valor: "));

       while (v2 <= 0) {
           v2 = parseInt(prompt("Por favor, digite um número acima de 0 ."));
        }
        
        var resultado = v1 + v2;
          alert("A soma dos número é " + resultado);


   </script>
</head>
<body>
</body>
</html>