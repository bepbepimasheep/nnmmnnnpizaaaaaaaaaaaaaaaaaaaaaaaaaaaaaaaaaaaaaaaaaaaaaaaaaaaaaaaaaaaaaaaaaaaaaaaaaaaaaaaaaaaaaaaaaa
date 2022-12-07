var nameOfPeolpe = []

 function submit(){
    var GuesstName = document.getElementById("name1").value;
nameOfPeolpe.push(GuesstName);
 var lengtOfName = nameOfPeolpe.length;
  document.getElementById("displayName").innerHTML=nameOfPeolpe.toString();

 }

 function sorting(){
    nameOfPeolpe.sort();
    var i= nameOfPeolpe.join("<br>");
    document.getElementById("sorted").innerHTML=i.toString();
 }

 function show()  {
    var i= nameOfPeolpe.join("<br>");
    document.getElementById("p1").innerHTML=i.toString();
    document.getElementById("sortButton").style.display="block";

 }

 function searching(){
    var s = document.getElementById("s1").value;
    var found = 0;
    var j;
    for( j =0; j < nameOfPeolpe.length; j++) {
        if (s== nameOfPeolpe[j]) {
            found= found + 1;
        }
    }
    document.getElementById("p2").innerHTML= "Nome encontrado" + found + "vez(es)";
 }