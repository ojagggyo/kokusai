<!--//

//Circling text trail- Tim Tilton (tim_tilton@hotmail.com)
//Website: www.angelfire.com/myband2/incongruent/
//Visit http://www.dynamicdrive.com for this script and more

// your message here
var msg='こくさい　けっこん　せいかつ　まにゅある';

var font='Verdana,Arial';
var size=3; // up to seven
var color='#777700';

// This is not the rotation speed, its the reaction speed, keep low!
// Set this to 1 for just plain rotation w/out drag
var speed=.3;

// This is the rotation speed, set it negative if you want
// it to spin clockwise
var rotation=.2;

// Alter no variables past here!, unless you are good
//---------------------------------------------------

var ns=(document.layers);
var ie=(document.all);
var msg=msg.split('');
var n=msg.length; 
var a=size*15;
var currStep=0;
var ymouse=0;
var xmouse=0;
var scrll=0;
var props="<font face="+font+" size="+size+" color="+color+">";

if (ie)
window.pageYOffset=0

// writes the message
	if (ns){
	for (i=0; i < n; i++)
		document.write('<layer name="nsmsg'+i+'" top=0 left=0 height='+a+' width='+a+'><center>'+props+msg[i]+'</font></center></layer>');
	}
	if (ie){
		document.write('<div id="outer" style="position:absolute;top:0px;left:0px"><div style="position:relative">');
		for (i=0; i < n; i++)
			document.write('<div id="iemsg" style="position:absolute;top:0px;left:0;height:'+a+';width:'+a+';text-align:center;font-weight:regular;cursor:default">'+props+msg[i]+'</font></div>');
			document.write('</div></div>');
	}
	(ns)?window.captureEvents(Event.MOUSEMOVE):0;

function Mouse(evnt){
	ymouse = (ns)?evnt.pageY+20-(window.pageYOffset):event.y; // y-position
	xmouse = (ns)?evnt.pageX+20:event.x-20; // x-position
}

if (ns||ie)
(ns)?window.onMouseMove=Mouse:document.onmousemove=Mouse;
y=new Array();
x=new Array();
Y=new Array();
X=new Array();
for (i=0; i < n; i++){
	y[i]=0;
	x[i]=0;
	Y[i]=0;
	X[i]=0;
}

function makecircle(){ // rotation properties
if (ie) outer.style.top=document.body.scrollTop;
currStep-=rotation;
	for (i=0; i < n; i++){ // makes the circle
		var d=(ns)?document.layers['nsmsg'+i]:iemsg[i].style;
		d.top=y[i]+a*Math.sin((currStep+i*1)/3.8)+window.pageYOffset-15;
		d.left=x[i]+a*Math.cos((currStep+i*1)/3.8)*2; // remove *2 for just a plain circle, not oval
	}
}

function drag(){ // makes the resistance
	scrll=(ns)?window.pageYOffset:0;
	y[0]=Math.round(Y[0]+=((ymouse)-Y[0])*speed);
	x[0]=Math.round(X[0]+=((xmouse)-X[0])*speed);
	for (var i=1; i < n; i++){
		y[i]=Math.round(Y[i]+=(y[i-1]-Y[i])*speed);
		x[i]=Math.round(X[i]+=(x[i-1]-X[i])*speed);

	}
	makecircle();
	// not rotation speed, leave at zero
	setTimeout('drag()',10);
}
if (ns||ie)window.onload=drag;

// -->
