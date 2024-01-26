





var load=document.getElementById("loading");
var body=document.getElementById("page");

window.setInterval(function(){
    
    load.style.display="none";
    body.style.display="block";
    
}
,2000);
clearInterval(1);




var btn_up=document.getElementById("btn-up");

window.onscroll=function(){
    var hieght=window.innerHeight;
    var scrollTop = window.scrollY;
    if(scrollTop<650){
        btn_up.style.display="none"
    }else{
        btn_up.style.display="block"
        
        btn_up.addEventListener("click",e=>{
            window.scrollTo({
                top: 0,
                behavior: 'smooth'})
        })
    }
}







