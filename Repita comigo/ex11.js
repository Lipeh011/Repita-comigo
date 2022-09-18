
       var dentro = 0;
        var fora = 0;

        for ( i = 0; i < 10; i++) {
            var numero = parseInt(prompt("insira um valor"))
            if (numero <= 42 && numero >= 24) {
                dentro ++ 
            }
            else{
                fora ++
            }
        }

        document.write("Os valores que estão dentro estão dentro do intervalo são: " + dentro + "<br>");
        document.write("E os fora do intervalo são: " + fora);

 