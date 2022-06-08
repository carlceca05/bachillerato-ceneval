function resultado() {
    var p1, p2, p3, p4, p5, p6, p7, p8, p9, /*p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23, p24, p25, p26, p27, p28, p29, p30, p31,*/ nota;

    // 1a pregunta
    if (document.getElementById('p1-2').checked==true) {p1=1}
    else {p1=0}
    // 2a pregunta
    if (document.getElementById('p2-1').checked==true) {p2=1}
    else {p2=0}
    // 3a pregunta
    if (document.getElementById('p3-4').checked==true) {p3=1}
    else {p3=0}
    // 4a pregunta
    if (document.getElementById('p4-4').checked==true) {p4=1}
    else {p4=0}
    // 5a pregunta
    if (document.getElementById('p5-2').checked==true) {p5=1}
    else {p5=0}
    
    // 6a pregunta
    if (document.getElementById('p6-1').checked==true) {p6=1}
    else {p6=0}
    // 7a pregunta
    if (document.getElementById('p7-1').checked==true) {p7=1}
    else {p7=0}
    // 8a pregunta
    if (document.getElementById('p8-3').checked==true) {p8=1}
    else {p8=0}
    // 9a pregunta
    if (document.getElementById('p9-2').checked==true) {p9=1}
    else {p9=0}
    // 10a pregunta
    if (document.getElementById('p10-1').checked==true) {p10=1}
    else {p10=0}
    // 11a pregunta
    if (document.getElementById('p11-3').checked==true) {p10=1}
    else {p11=0}
    // 12a pregunta
    if (document.getElementById('p12-2').checked==true) {p10=1}
    else {p12=0}
    // 10a pregunta
    if (document.getElementById('p12-1').checked==true) {p10=1}
    else {p13=0}
    // 10a pregunta
    if (document.getElementById('p13-1').checked==true) {p10=1}
    else {p14=0}
    // 10a pregunta
    if (document.getElementById('p14-1').checked==true) {p10=1}
    else {p15=0}
    // 10a pregunta
    if (document.getElementById('p15-1').checked==true) {p10=1}
    else {p16=0}
    // 10a pregunta
    if (document.getElementById('p16-1').checked==true) {p10=1}
    else {p17=0}
    // 10a pregunta
    if (document.getElementById('p17-1').checked==true) {p10=1}
    else {p18=0}
    // 10a pregunta
    if (document.getElementById('p18-1').checked==true) {p10=1}
    else {p19=0}
    // 10a pregunta
    if (document.getElementById('p19-1').checked==true) {p10=1}
    else {p20=0}
    // 10a pregunta
    if (document.getElementById('p19-1').checked==true) {p10=1}
    else {p21=0}
    // 10a pregunta
    if (document.getElementById('p20-1').checked==true) {p10=1}
    else {p22=0}
    // 10a pregunta
    if (document.getElementById('p21-1').checked==true) {p10=1}
    else {p23=0}
    // 10a pregunta
    if (document.getElementById('p22-1').checked==true) {p10=1}
    else {p24=0}
    // 10a pregunta
    if (document.getElementById('p23-1').checked==true) {p10=1}
    else {p25=0}
    // 10a pregunta
    if (document.getElementById('p24-1').checked==true) {p10=1}
    else {p26=0}
    // 10a pregunta
    if (document.getElementById('p25-1').checked==true) {p10=1}
    else {p27=0}
    // 10a pregunta
    if (document.getElementById('p26-1').checked==true) {p10=1}
    else {p28=0}
    // 10a pregunta
    if (document.getElementById('p27-1').checked==true) {p10=1}
    else {p29=0}
    // 10a pregunta
    if (document.getElementById('p28-2').checked==true) {p10=1}
    else {p30=0}
    // 10a pregunta
    if (document.getElementById('p29-1').checked==true) {p10=1}
    else {p31=0}*/

    nota=p1+p2+p3+p4+p5/*+p6+p7+p8+p9+p10+p11+p12+p13+p14+p15+p16+p17+p18+p19+p20+p21+p22+p23+p24+p25+p26+p27+p28+p29+p30+p31*/;
    //alert(" Aciertos: " + nota);
    document.getElementById("aqui").innerHTML =   'Aciertos: ' + nota + '<br> Revisa tus respuestas';
      
    //document.write( "Aciertos:" + nota);
    
    //window.location = 'cuestionario.html'

    //llamado a la accion
    //document.getElementById("accion").classList.add("show"); ///no sirve :C

    //respuestas correctas
    document.getElementById("Correct01").classList.toggle("ans-correct");
    document.getElementById("Correct02").classList.toggle("ans-correct");
    document.getElementById("Correct03").classList.toggle("ans-correct");
    document.getElementById("Correct04").classList.toggle("ans-correct");
    document.getElementById("Correct05").classList.toggle("ans-correct");
    /*document.getElementById("Correct06").classList.toggle("ans-correct");
    document.getElementById("Correct07").classList.toggle("ans-correct");
    document.getElementById("Correct08").classList.toggle("ans-correct");
    document.getElementById("Correct09").classList.toggle("ans-correct");
    document.getElementById("Correct10").classList.toggle("ans-correct");
    document.getElementById("Correct11").classList.toggle("ans-correct");
    document.getElementById("Correct12").classList.toggle("ans-correct");
    document.getElementById("Correct13").classList.toggle("ans-correct");
    document.getElementById("Correct14").classList.toggle("ans-correct");
    document.getElementById("Correct15").classList.toggle("ans-correct");
    document.getElementById("Correct16").classList.toggle("ans-correct");
    document.getElementById("Correct17").classList.toggle("ans-correct");
    document.getElementById("Correct18").classList.toggle("ans-correct");
    document.getElementById("Correct19").classList.toggle("ans-correct");
    document.getElementById("Correct20").classList.toggle("ans-correct");
    document.getElementById("Correct21").classList.toggle("ans-correct");
    document.getElementById("Correct22").classList.toggle("ans-correct");
    document.getElementById("Correct23").classList.toggle("ans-correct");
    document.getElementById("Correct24").classList.toggle("ans-correct");
    document.getElementById("Correct25").classList.toggle("ans-correct");
    document.getElementById("Correct26").classList.toggle("ans-correct");
    document.getElementById("Correct27").classList.toggle("ans-correct");
    document.getElementById("Correct28").classList.toggle("ans-correct");
    document.getElementById("Correct29").classList.toggle("ans-correct");
    document.getElementById("Correct30").classList.toggle("ans-correct");
    document.getElementById("Correct31").classList.toggle("ans-correct"); */ 
}