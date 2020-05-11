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
function run(val){
    if(val==1){
        alert("City="+document.getElementById("city").value);
    }
    if(val==2){
        alert("City="+document.getElementsByClassName("city1")[0].value);
    }
    if(val==3){
        alert("City="+document.getElementsByTagName("input")[3].value);
    }
    if(val==4){
        alert("City="+document.querySelector("#city").value);
    }
    if(val==5){
        alert("City="+document.querySelector(".city1").value);
    }
    if(val==6){
        alert("City="+document.querySelectorAll("input")[3].value);
    }
}
function pinfunc(){
    var city=document.getElementById("city").value;
    if(city=="vizag"){
        document.getElementById("pincode").value=530026;
    }
    if(city=="amritapuri"){
        document.getElementById("pincode").value=690546;
    }
    if(city=="bangalore"){
        document.getElementById("pincode").value=560021;
    }
    if(city=="madras" || city=="chennai"){
        document.getElementById("pincode").value=600029;
    }
    if(city=="hyderabad"){
        document.getElementById("pincode").value=500054;
    }
}
function focusOnMyInputBox(){                                 
    document.getElementById("name").focus();
}