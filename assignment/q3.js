function add(){
    var name=prompt("Enter Name");
    var DOB=prompt("Enter DOB(DD/MM/YYYY)");
    var sno=document.getElementsByClassName("SNo").length+1;
    var tablecontent=document.getElementById("table").innerHTML;
    tablecontent += "<tr id=\"row"+sno+"\"><td class=\"SNo\" id=\"Sno"+sno+"\">"+sno+"</td><td class=\"name\" id=\"name"+sno+"\">"+name+"</td><td class=\"DOB\" id=\"dob"+sno+"\">"+DOB+"</td><td class=\"EDDE\"><button value=\""+sno+"\" class=\"edit"+sno+"\" onclick=\"edit(this.value)\">Edit</button><button value=\""+sno+"\" class=\"delete"+sno+"\" onclick=\"del(this.value)\">Delete</button></td></tr>";
    document.getElementById("table").innerHTML=tablecontent;
    document.getElementById("history").innerHTML = "History: ";
    document.getElementById("answer").innerHTML += "Added Row-"+sno+"!<br>";
}
function edit(sno){
    var name=prompt("Enter New Name");
    var DOB=prompt("Enter New DOB(DD/MM/YYYY)");
    nameid="name"+sno;
    dobid="dob"+sno;
    document.getElementById(nameid).innerHTML = name;
    document.getElementById(dobid).innerHTML = DOB;
    document.getElementById("history").innerHTML = "History: ";
    document.getElementById("answer").innerHTML += "Updated Row-"+sno+"!<br>";
}
function del(sno){
    var rowid="row"+sno;
    document.getElementById(rowid).remove();
    document.getElementById("history").innerHTML = "History: ";
    document.getElementById("answer").innerHTML += "Deleted Row-"+sno+"!<br>";
}