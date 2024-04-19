$(document).ready(function(){

    var canvas = document.querySelector("#scene"),
   ctx = canvas.getContext("2d"),
   particles = [],
   amount = 0,
   mouse = {x:0,y:0},
   radius = 0.4;
      
      var colors = ["#DBDFFF","#DDEAFF", "#F7F8FF","#FFEAFC", "#F4DDFF"];
 var copy = document.querySelector("#copy");
      
 var ww = canvas.width = window.innerWidth;
 var wh = canvas.height = window.innerHeight;
 
 
 
 function Particle(x,y){
   this.x =  Math.random()*ww;
   this.y =  Math.random()*wh;
   this.dest = {
     x : x,
     y: y
   };
 var circleSize = gsap.utils.random(2, 5, 0.3);
       this.color = colors[Math.floor(Math.random()*6)];
 
   this.r =  circleSize;
   this.vx = (Math.random()-0.5)*10;
   this.vy = (Math.random()-0.5)*10;
   this.accX = 0;
   this.accY = 0;
   this.friction = Math.random()*0.05 + 0.94;
 
 
 }
 
 Particle.prototype.render = function() {
   this.accX = (this.dest.x - this.x)/1500;
   this.accY = (this.dest.y - this.y)/1500;
   this.vx += this.accX;
   this.vy += this.accY;
   this.vx *= this.friction;
   this.vy *= this.friction;
 
   this.x += this.vx;
   this.y +=  this.vy;
 
   ctx.fillStyle = this.color;
     ctx.strokeWidth = 0.5;
     ctx.strokeStyle = "cyan";
   ctx.beginPath();
   ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
   ctx.fill();
   ctx.stroke();
   var a = this.x - mouse.x;
   var b = this.y - mouse.y;
 
   var distance = Math.sqrt( a*a + b*b );
   if(distance<(radius*100)){
     this.accX = (this.x - mouse.x)/100;
     this.accY = (this.y - mouse.y)/100;
     this.vx += this.accX;
     this.vy += this.accY;
   }
 
 }
 
 function onMouseMove(e){
   mouse.x = e.clientX;
   mouse.y = e.clientY;
 }
 
 function onTouchMove(e){
   if(e.touches.length > 0 ){
     mouse.x = e.touches[0].clientX;
     mouse.y = e.touches[0].clientY;
   }
 }
 
 function onTouchEnd(e){
 mouse.x = -9999;
 mouse.y = -9999;
 }
 
 
 
 
 
   
 function initScene(){
 var ww = canvas.width = window.innerWidth;
 var wh = canvas.height = window.innerHeight;
     
       ctx.font = "700 "+(ww/6.66)+"px 'Josefin Sans', sans-serif";
     
 //		ctx.font = "700 15vw 'Josefin Sans'";
       ctx.textAlign = "center";
   ctx.fillText(copy.value, ww/2, wh/2);
       var data  = ctx.getImageData(0, 0, ww, wh).data;
 
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   ctx.globalCompositeOperation = "screen";
 
 
 
   particles = [];
   for(var i=0;i<ww;i+=Math.round(ww/250)){
     for(var j=0;j<wh;j+=Math.round(ww/250)){
       if(data[ ((i + j*ww)*4) + 3] > 150){
         particles.push(new Particle(i,j));
       }
     }
   }
   amount = particles.length;
     
     requestAnimationFrame(render);
 
 }
 
 
 
 function render(a) {
   requestAnimationFrame(render);
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   for (var i = 0; i < amount; i++) {
     particles[i].render();
   }
   
 };
 
 window.addEventListener("resize", initScene);
 window.addEventListener("mousemove", onMouseMove);
 window.addEventListener("touchmove", onTouchMove);
 window.addEventListener("touchend", onTouchEnd);
 
      initScene();
 
 // 
   });
 
 
 
 