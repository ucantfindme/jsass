function allLetter(inputtxt)
{
   var letters = /^[A-Za-z]+$/;
   return(inputtxt.match(letters))
}
function allnumber(inputtxt)
{
   var letters = /^[0-9]+$/;
   return(inputtxt.match(letters))
}
function func(){
    var count=0;
    //console.log(allLetter(document.getElementById("Name").value));
    if(allLetter(document.getElementById("Name").value)){
        count++;
        document.getElementById("nam").style.display="none";
    }
    else{
        document.getElementById("nam").style.display="inline";
    }
    if(allnumber(document.getElementById("phone").value) && document.getElementById("phone").value.length==10){
        count++;
        document.getElementById("ph").style.display="none";
    }
    else{
        document.getElementById("ph").style.display="inline";
    }
    if(allnumber(document.getElementById("pincode").value) && document.getElementById("pincode").value.length==6){
        count++;
        document.getElementById("pin").style.display="none";
    }
    else{
        document.getElementById("pin").style.display="inline";
    }
    if(count===3){
        document.getElementById("submit").disabled=false;
    }
}
function func2(){
    alert("Form Submitted Successfully!");
}