window.onload=init;
//window.onunload=unload;
//window.onblur=blur
//window.onfocus=focus
//window.onclick=click
//window.onchange=change;

ie=!!document.all
nn=(navigator.appName=="Netscape"||navigator.userAgent.indexOf("Opera")!=-1)

function init(){
 if(ie){
  if(top.frames[0]){
   if(top.frames[0].document.body){
    top.frames[0].document.body.onscroll=scrollie
   }
  }
  if(top.frames[1]){
   if(top.frames[1].document.body){
    top.frames[1].document.body.onscroll=scrollie
   }
  }
  setTimeout("init()",500)
 }else if(nn){
  scroll=[0,0,0,0]
  scrollnn()
 }
}

function unload(){
 init();
 alert("unload");
}
//function unload(){alert("unload")}
function blur(){
 //init()
 //alert("blur")
}
function focus(){
 init()
 alert("focus")
}
function change(){alert("change")}
//function click(){alert("click")}


function scrollie(){
 if(top.frames[0].event){
  top.frames[1].scrollTo(top.frames[0].document.body.scrollLeft,
                         top.frames[0].document.body.scrollTop)
 }
 if(top.frames[1].event){
  top.frames[0].scrollTo(top.frames[1].document.body.scrollLeft,
                         top.frames[1].document.body.scrollTop)
 }
}

function scrollnn(){
 var scr0=top.frames[0].pageXOffset
 var scr1=top.frames[0].pageYOffset
 var scr2=top.frames[1].pageXOffset
 var scr3=top.frames[1].pageYOffset
 if(scr0!=scroll[0]){
  //左が左右スクロール
  top.frames[1].scrollTo(scr0,top.frames[1].pageYOffset)
  scroll[0]=scr0
 }else if(scr1!=scroll[1]){
  //左が上下スクロール
  top.frames[1].scrollTo(top.frames[1].pageXOffset,scr1)
  scroll[1]=scr1
 }else if(scr2!=scroll[2]){
  //右が左右スクロール
  top.frames[0].scrollTo(scr2,top.frames[0].pageYOffset)
  scroll[2]=scr2
 }else if(scr3!=scroll[3]){
  //右が上下スクロール
  top.frames[0].scrollTo(top.frames[0].pageXOffset,scr3)
  scroll[3]=scr3
 }
 setTimeout("scrollnn()",500)
}

