function add(){
    var newitem=prompt("Enter the Item you ant to add");
    document.getElementsByTagName("ul")[0].innerHTML+="<li>"+newitem+"</li>";
    document.getElementById("history").innerHTML = "History: ";
    document.getElementById("answer").innerHTML += "Added new item : "+newitem+"!<br>";
}