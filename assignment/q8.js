var imgno=1;
function prev(){
    if(imgno==1){
        imgno=5;
    }
    else{
        imgno--;
    }
    document.getElementById("img").src="img"+imgno+".jpg";
}
function next(){
    if(imgno==5){
        imgno=1;
    }
    else{
        imgno++;
    }
    document.getElementById("img").src="img"+imgno+".jpg";
}