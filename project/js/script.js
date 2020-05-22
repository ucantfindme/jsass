var qwe=""
function mycrew(name){
    document.getElementsByClassName("nonhidinfo")[0].style.display="none";
    document.getElementById(name).style.display="block";
    document.getElementById("backcrew").style.display="block";
    qwe=name;
}
function aboutback(){
    document.getElementsByClassName("nonhidinfo")[0].style.display="block";
    document.getElementById(qwe).style.display="none";
    document.getElementById("backcrew").style.display="none";
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  if(slides[slideIndex-1]!=undefined){
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  if(captionText!=null){
  captionText.innerHTML = dots[slideIndex-1].alt;}}
}
function logout(){
    document.getElementById("login-option").style.display="inline";
    document.getElementById("logout-option").style.display="none";
    document.getElementById("nav-username").innerHTML="Guest";
    document.getElementById("register-successful").style.display="none";
    document.getElementById("register-unsuccessful").style.display="none";
    document.getElementById("regimg").src="images/register.png";
    document.getElementById("login-successful").style.display="none";
    document.getElementById("invalid-login").style.display="none";
    document.getElementById("logimg").src="images/login.png";
    alert("Logged-out Successfuly");
}
var user="user";
var pass="pass";
var login=false;
function logincheck(){
    var username=document.getElementById("login-username").value;
    var password=document.getElementById("login-password").value;
    if(username==user && password==pass){
        document.getElementById("login-option").style.display="none";
        document.getElementById("logout-option").style.display="inline";
        document.getElementById("nav-username").innerHTML=username;
        document.getElementById("login-successful").style.display="block";
        document.getElementById("invalid-login").style.display="none";
        document.getElementById("logimg").src="images/loginsuccesful.png";
        login=true;
    }
    else{
        document.getElementById("invalid-login").style.display="block";
        document.getElementById("login-successful").style.display="none";
        document.getElementById("logimg").src="images/wrongpassword.png";
    }
}
function registercheck(){
    if(document.getElementById("newpass").value==document.getElementById("conpass").value && document.getElementById("conpass").value!==null){
        user=document.getElementById("newuser").value;
        pass=document.getElementById("newpass").value;
        document.getElementById("register-successful").style.display="block";
        document.getElementById("register-unsuccessful").style.display="none";
        document.getElementById("regform").style.display="none";
        document.getElementById("regimg").src="images/loginsuccesful.png";
    }
    else{
        document.getElementById("register-unsuccessful").style.display="block";
        document.getElementById("regimg").src="images/passnotmatch.png";
    }
}
function index(){
    document.getElementById("index").style.display="block";
    document.getElementById("about").style.display="none";
    document.getElementById("gallery").style.display="none";
    document.getElementById("registerform").style.display="none";
    document.getElementById("loginform").style.display="none";
    document.getElementById("comment").style.display="none";
}
function about(){
    document.getElementById("index").style.display="none";
    document.getElementById("about").style.display="block";
    document.getElementById("gallery").style.display="none";
    document.getElementById("registerform").style.display="none";
    document.getElementById("loginform").style.display="none";
    document.getElementById("comment").style.display="none";
}
function gallery(){
    document.getElementById("index").style.display="none";
    document.getElementById("about").style.display="none";
    document.getElementById("gallery").style.display="block";
    document.getElementById("registerform").style.display="none";
    document.getElementById("loginform").style.display="none";
    document.getElementById("comment").style.display="none";
}
function register(){
    document.getElementById("index").style.display="none";
    document.getElementById("about").style.display="none";
    document.getElementById("gallery").style.display="none";
    document.getElementById("registerform").style.display="block";
    document.getElementById("loginform").style.display="none";
    document.getElementById("comment").style.display="none";

    if(login){
        document.getElementById("register-successful").style.display="none";
        document.getElementById("register-unsuccessful").style.display="none";
        document.getElementById("regform").style.display="block";
    }
}
function login1(){
    document.getElementById("index").style.display="none";
    document.getElementById("about").style.display="none";
    document.getElementById("gallery").style.display="none";
    document.getElementById("registerform").style.display="none";
    document.getElementById("loginform").style.display="block";
    document.getElementById("comment").style.display="none";
}
function comment(){
    document.getElementById("index").style.display="none";
    document.getElementById("about").style.display="none";
    document.getElementById("gallery").style.display="none";
    document.getElementById("registerform").style.display="none";
    document.getElementById("loginform").style.display="none";
    document.getElementById("comment").style.display="block";
}
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