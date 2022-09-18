
    do{
    var nota1 = parseInt(prompt("Primeira nota: "));
    var nota2 = parseInt(prompt("Segunda nota: "));
    var media = (nota1 + nota2) / 2;
    alert("A média de foi de: "+media);
    if (media < 9.5){
        alert("Você foi reprovado");
    } else {
        alert("Você foi aprovado! Parabens tchuthuco.");
        document.write("Aprovação com a média de: "+media+"<br>");
    }
    var r = prompt("Calcular a média de outro aluno Sim/Não?");
    } while (r=="sim" || r=="Sim" || r=="S" || r=="ss" || r=="s" || r=="sin");
