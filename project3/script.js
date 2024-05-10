var m = document.querySelector("#main")
var crsr = document.querySelector("#cursor")

m.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
})