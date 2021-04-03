function click()
{
  if (document.all) {
    if( event.button == 2 ){
      window.external.AddFavorite('http://www.myjavaserver.com/~ojagggyo/', '国際結婚生活マニュアル')
    }
  }
}
document.onmousedown = click;

function checkKey()
{
  if (document.all) {
    /*
    alert(String.fromCharCode(event.keyCode)+"のキーを押しましたね！")
    */
  }
}
window.document.onkeydown = checkKey;


flag = false;
function popupmenu()
{
  if (document.all) {
	//pMENU.style.left = event.x;
	//pMENU.style.top  = event.y;

	X = event.x + document.body.scrollLeft;
	Y = event.y + document.body.scrollTop;
	//document.all["pMENU"].innerText = X+","+Y;
	document.all["pMENU"].style.left= X;
	document.all["pMENU"].style.top = Y;


	if (flag) pMENU.style.visibility = "hidden"; else pMENU.style.visibility = "visible";
	flag = !flag;
  }
}
document.onclick = popupmenu;

