var cCSelId = 'cct1';

function g(id)
{
 return document.getElementById(id);
}

function sOthLngs()
{
 g('ol').style.display = 'inline-block';
 g('lm').style.marginLeft = '857px';
}

function hOthLngs()
{
 g('ol').style.display = 'none';
 g('lm').style.marginLeft = '910px';
}

function cLng(id)
{
 g('lfrm').lang.value = id;
 g('lfrm').submit();
}

function ovMMO(e)
{
 if (e.className == 'ml') e.style.color = '#E2E8ED'; else e.style.color = '#FF8888';
}

function otMMO(e)
{
 if (e.className == 'ml') e.style.color = '#FFFFFF'; else e.style.color = '#FFAAAA';
}

function ovSMO(e)
{
 e.style.color = 'white';
}

function otSMO(e)
{
 if (e.className == 'ml smo') e.style.color = '#2C383E'; else e.style.color = '#FF2222';
}

function sSM(intI)
{
 g('smc'+intI).className = 'smcb';
}

function hSM(intI)
{
 g('smc'+intI).className = 'dnone';
}

function checkEmail(strEmail)
{
 if (strEmail.length >= 5 && strEmail.indexOf('@') != -1 && strEmail.indexOf('.') != -1)
 {
  var atpos = strEmail.indexOf('@')
  var dotpos = strEmail.indexOf('.', atpos)
  var user = strEmail.substring(0, atpos)
  var domname = strEmail.substring(atpos + 1, dotpos)
  var domlast = strEmail.substring(dotpos + 1)
  if (user.length > 0 && domname.length > 0 && domlast.length > 0)
  {
   return true;
  }
  else
  {
   return false;
  }
 }
 else
 {
  return false;
 }
}

function do_something_click(e)
{
 e.style.color = 'green';
}

function do_something_mouse_over(e)
{
 e.style.color = 'red';
}

function ovT(oE)
{
 oE.style.backgroundColor='#F2F5F8';
}

function otT(oE)
{
 oE.style.backgroundColor='transparent';
}

function hex(n)
{
 h = new Array('0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F');
 var hD = Math.floor(n/16);
 var hU = n - (hD * 16);
 return h[hD]+h[hU];
} 

function cCl()
{
 g('ccol').style.backgroundColor = g('scol').style.backgroundColor;
 g('ccolv').firstChild.nodeValue = g('scolv').firstChild.nodeValue;
 if (cCSelId == 'ccb' || cCSelId == 'ccrpb') g(cCSelId).style.backgroundColor = g('ccol').style.backgroundColor; else g(cCSelId).style.color = g('ccol').style.backgroundColor;
}

function cMO(e)
{
 var col, x, y;
 if (e.offsetX && e.offsetY)
 {
  x = e.offsetX;
  y = e.offsetY;
  col = c(x, y);
  g('scol').style.backgroundColor = col;
  g('scolv').firstChild.nodeValue = col;
 }
 else if (e.pageX && e.pageY && g('ct').offsetLeft && g('ct').offsetTop)
 {
  x = e.pageX - g('ct').offsetLeft;
  y = e.pageY - g('ct').offsetTop;
  col = c(x, y);
  g('scol').style.backgroundColor = col;
  g('scolv').firstChild.nodeValue = col;
 }
}

function c(x, y)
{
 var iM = 0.04;
 var cM = 255 / 17;
 var sx = parseInt(x / 6);
 var sy = parseInt(y / 6) + 1;
 var aSt = parseInt(sx / 17);
 var rx = sx % 17;
 var r, g, b;
 switch(aSt)
 {
  case 0: 
   r = 255;
   g = 0;
   b = 255 - (rx * cM);
   break;
  case 1:
   r = 255;
   g = rx * cM;
   b = 0;
   break;
  case 2:
   r = 255 - (rx * cM);
   g = 255;
   b = 0;
   break;
  case 3:
   r = 0;
   g = 255;
   b = rx * cM;
   break;
  case 4:
   r = 0;
   g = 255 - (rx * cM);
   b = 255;
   break;
  case 5:
   r = rx * cM;
   g = 0;
   b = 255;
   break;
 }
 if (sy <= 24)
 {
  r = r * sy * iM;
  g = g * sy * iM;
  b = b * sy * iM;
 }
 else
 {
  r = r + (sy - 25) * ((255 - r) / 24);
  g = g + (sy - 25) * ((255 - g) / 24);
  b = b + (sy - 25) * ((255 - b) / 24);
 }
 return '#'+hex(Math.round(r))+hex(Math.round(g))+hex(Math.round(b));
}

function grMO(e)
{
 var col, x;
 if (e.offsetX)
 {
  x = e.offsetX;
  col = gr(x);
  g('scol').style.backgroundColor = col;
  g('scolv').firstChild.nodeValue = col;
 }
 else if (e.pageX && g('ct').offsetLeft)
 {
  x = e.pageX - g('ct').offsetLeft;
  col = gr(x);
  g('scol').style.backgroundColor = col;
  g('scolv').firstChild.nodeValue = col;
 }
}

function gr(x)
{
 var cM = 255 / 101;
 var sx = parseInt(x / 6);
 var int = hex(Math.round(cM * sx));
 return '#'+int+int+int;
}

function cO()
{
 g('scol').style.backgroundColor = g('ccol').style.backgroundColor;
 g('scolv').firstChild.nodeValue = g('ccolv').firstChild.nodeValue;
}

function cCSel(th, e)
{
 var t, col;
 if (!e) var e = window.event;
 if (e.target) t = e.target;
 else if (e.srcElement) t = e.srcElement;
 if (t.nodeType == 3) t = t.parentNode;
 if (t.id == th.id)
 {
  g(cCSelId).style.border = '1px solid transparent';
  cCSelId = th.id;
  th.style.border = '1px dotted black';
  if (th.id == 'ccb' || th.id == 'ccrpb')
  {
   if (th.style.backgroundColor == '')
   {
    if (th.currentStyle)
     th.style.backgroundColor = th.currentStyle['backgroundColor'];
    else if (window.getComputedStyle)
     th.style.backgroundColor = document.defaultView.getComputedStyle(th, null).getPropertyValue('background-color');
   }
   col = rTH(th.style.backgroundColor);
   g('ccol').style.backgroundColor = col;
   g('ccolv').firstChild.nodeValue = col;
   g('scol').style.backgroundColor = col;
   g('scolv').firstChild.nodeValue = col;
  }
  else
  {
   if (th.style.color == '')
   {
    if (th.currentStyle)
     th.style.color = th.currentStyle['color'];
    else if (window.getComputedStyle)
     th.style.color = document.defaultView.getComputedStyle(th, null).getPropertyValue('color');
   }
   col = rTH(th.style.color);
   g('ccol').style.backgroundColor = col;
   g('ccolv').firstChild.nodeValue = col;
   g('scol').style.backgroundColor = col;
   g('scolv').firstChild.nodeValue = col;
  }
  e.cancelBubble = true;
  if (e.stopPropagation) e.stopPropagation();
 }
}

function rTH(col)
{
 col = col.replace('rgb(', '').replace(')', '').split(', ');
 return '#'+hex(col[0])+hex(col[1])+hex(col[2]);
}

function cDmAmt()
{
 if (g('setamttxt').value.match(/^[0-9]*[\.,]?[0-9]+$/))
 {
  g('isnan').style.visibility = 'hidden';
  var n = parseFloat(g('setamttxt').value.replace(',', '.'));
  g('dmfrm').PrecioItem.value = n;
 }
 else
 {
  g('isnan').style.visibility = 'visible';
  g('dmfrm').PrecioItem.value = 0;
 }
}

function setDmAmt(a)
{
 g('dmfrm').PrecioItem.value = a;
}

function setPpAmt(n)
{
 var i = 0;
 while (g('ppfrm'+i))
 {
  if (i == n) g('ppfrm'+i).style.display = 'block'; else g('ppfrm'+i).style.display = 'none';
  i++;
 }
}

function cDmFrm()
{
 if (g('dmfrm').PrecioItem.value == 0) return false; else return true;
}