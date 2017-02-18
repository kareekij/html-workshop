window.addEventListener('DOMContentLoaded', draw_canvas, false )

function draw_canvas(){
  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");
  ctx.font = "30px Arial";
  ctx.strokeText("hello world",30,130);
  ctx.moveTo(40,100);
  ctx.lineTo(100,0);
  ctx.lineTo(160,100);
  ctx.lineTo(0,40);
  ctx.lineTo(200,40);
  ctx.lineTo(40,100);
  ctx.stroke();
}
