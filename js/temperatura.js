function calcular(){
    var tempc = parseFloat(document.getElementById('tempc').value);

    var tempf = tempc * 1.8 + 32;

    document.getElementById('tempfConteiner').value = tempf;
}   
