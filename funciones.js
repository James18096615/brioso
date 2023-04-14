function promedio(){

    var n1=Number(document.getElementById ('nota1').value)
    var n2=Number(document.getElementById ('nota2').value)
    var n3=Number(document.getElementById ('nota3').value)

    var suma=(n1+n2+n3);
    var promedio=(suma/3);

    if(resultado>=17){
        print("A");
    }else if(promedio>=14 && promedio<17){
        print("B");
    }else if(promedio>=12 && promedio<14){
        print("C");
    }else{
        print("D");
    }
    String(document.getElementById('res1').value=promedio);

    }
    
    