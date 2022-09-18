

        var nota1 = parseInt(prompt("Primeira nota: "));
        var nota2 = parseInt(prompt("Segunda nota: "));
        var nota3 = parseInt(prompt("Terceira nota: "));
        var nota4 = parseInt(prompt("Quarta nota: "));
        var nota5 = parseInt(prompt("Quinta nota: "));
        var nota6 = parseInt(prompt("Sexta nota: "));
        var notas = [nota1,nota2,nota3,nota4,nota5,nota6];
        var media = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6) / 4;


    while (nota1<=0 || nota1 <=10){
        nota1 = parseInt(prompt("Digite a primeira nota novamente: "));
    }
   
    while (nota2<=0 || nota1 <=10){
        nota2 = parseInt(prompt("Digite a segunda nota novamente: "));
    }
    
    while (nota3<=0 || nota1 <=10){
        nota3 = parseInt(prompt("Digite a terceira nota novamente: "));
    }
   
    while (nota4<=0 || nota1 <=10){
        nota4 = parseInt(prompt("Digite a quarta nota novamente: "));
    }
 
    while (nota5<=0 || nota1 <=10){
        nota5 = parseInt(prompt("Digite a quinta nota novamente: "));
    }
    
    while (nota6<=0 || nota1 <=10){
        nota6 = parseInt(prompt("Digite a sexta nota novamente: "));
    }
    alert("A média é: "+media);
    document.write("As notas foram: "+notas+"<br>E a média é: "+media);
  