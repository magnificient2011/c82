var canvas= document.getElementById("My_Canvas");
ctx=canvas.getContext("2d");
var mouseEvent="empty";
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
 c= document.getElementById("color").value ;
 r= document.getElementById("radius").value ;
 lw = document.getElementById("line_width").value ;
mouseEvent="down";

}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
mouseEvent="up";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
mouseEvent="leave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
console.log(e);
var current_mousex=e.clientX-canvas.offsetLeft;
var current_mousey=e.clientY-canvas.offsetTop;
if(mouseEvent=="down") {
    ctx.beginPath();
    ctx.strokeStyle=c;
    ctx.lineWidth=lw;
    ctx.arc(current_mousex,current_mousey,r,0,2*Math.PI);
    ctx.stroke();
    
}
}
function clear_area(){
ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}





