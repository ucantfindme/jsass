function edit(){
    document.getElementById("edit").style.display="block";
    document.getElementById("savebtn").style.display="block";
    var newcontent=document.getElementById("para").innerHTML;
    document.getElementById("edit").innerHTML=newcontent;
    document.getElementById("para").style.display="none";
    document.getElementById("editbtn").style.display="none";
}
function save(){
    document.getElementById("para").style.display="block";
    document.getElementById("editbtn").style.display="block";
    var newcontent=document.getElementById("edit").value;
    document.getElementById("para").innerHTML=newcontent;
    document.getElementById("edit").style.display="none";
    document.getElementById("savebtn").style.display="none"; 
}