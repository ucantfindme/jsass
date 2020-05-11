function func(){
var day=["First","Second","Third","Fourth","Fifth","Sixth","Seventh","Eighth","Ninth","Tenth","Eleventh","Twelfth","Thirteenth","Fourteenth","Fifteenth","Sixteenth","Seventeenth","Eighteenth","Nineteenth","Twentieth","Twenty-First","Twenty-Second","Twenty-Third","Twenty-Fourth","Twenty-Fifth","Twenty-Sixth","Twenty-Seventh","Twenty-Eighth","Twenty-Ninth","Thirtieth","Thirty-First"];
var month=["January","February","March","April","May","June","July","August","September","October","November","December"];
var year1=["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"];
var year2=["","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"];
var year3=["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"];
var year4=["Hundred", "Thousand"];
var word="";
var date=document.getElementById("DOB").value;
word+=day[Number(date.slice(0,2))-1]+" "+month[Number(date.slice(3,5))-1]+" ";
if(Number(date.slice(6,7))!=0){
    word+=year1[Number(date.slice(6,7))]+" "+year4[1]+" "
}
if(Number(date.slice(7,8))!=0){
    word+=year1[Number(date.slice(7,8))]+" "+year4[0]+" "
}
if(Number(date.slice(8,9))!=0){
    word+=year3[Number(date.slice(8,9))]+" "
}
if(Number(date.slice(9,10))!=0){
    word+=year1[Number(date.slice(9,10))]
}
document.getElementById("answer").innerHTML = "Answer: ";
document.getElementById("word").innerHTML = word;
}