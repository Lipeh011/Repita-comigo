
      var N = parseInt(prompt("Informe o numero:"));
    while (N <= 0) {
        N = parseInt(prompt("Informe o numero novamente: "));
    }
    for (var v=1; v<=N; v++){
        document.write(v+" , ");
    }
  