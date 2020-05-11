function func1(){
    var temp=prompt("Enter the Temperature in Celcius: ");
    temp*=9;
    temp/=5;
    temp+=32;
    alert("Temperature in Fahrenheit is "+temp);
}
function func2(){
    var temp=prompt("Enter the Temperature in Fahrenheit: ");
    temp-=32;
    temp*=5;
    temp/=9;
    alert("Temperature in Celcius is "+temp);
}