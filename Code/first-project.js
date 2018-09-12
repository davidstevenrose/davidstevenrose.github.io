//expressed for your veiwing convinence
//<!-- first example -->
 function toppingStart() {
var orderCount = 0;
var subTotal1 = 0;
var taxTotal1 = 0;
var grandTotal1 = 0;
var array = ["Anchovies", "anchovies"];

function toppingPrint (topping1) {
document.getElementById("description").innerHTML = "Pizza with " + topping1;
    orderCount++;
  	subTotal();
    };
function subTotal () {
  	subTotal1 = orderCount * 6.99;
  	taxTotal();
};
function taxTotal () {
  	taxTotal1 = subTotal1 * 0.06;
};
function grandTotal (a, b) {
  grandTotal1 = a + b;
};
    
var x = prompt("Please enter your topping", "No Pizza for you Toby!");
if (array.includes(x)) {
		document.getElementById("cost").innerHTML = "The pizza cannot have anchovies";
		
			}
else {
		toppingPrint(x);
		grandTotal(subTotal1, taxTotal1);
		document.getElementById("cost").innerHTML = "$" + Number((grandTotal1).toFixed(2));
     }
}
//<!--second example-->
	  function firstFunction() {
			document.getElementById("first").innerHTML = "Hello World";
			}
//<!--third example-->

function loopStart () {
var maxValue=	prompt("What is you max value?", "100");
if (isNaN(maxValue) !== true)
	{
   	loopFunction(maxValue);
	document.getElementById("wrong").innerHTML = ""
	}
else
	{
	document.getElementById("wrong").innerHTML = "Please insert a number" 
	document.getElementById("loopAns").innerHTML = ""
	}
    }
    
   function loopFunction (n) {
var length = 0;
var ArrayOne;
var i;
var current;
var currentSum = 0;


length = n;
ArrayOne = new Array();
for(i=0; length > ArrayOne.length; i++)
  {
    ArrayOne.push(1+i);
  }


//Time to do the math!
for( current=0; current<(ArrayOne.length); current++)
  {
    currentSum=ArrayOne[current] + currentSum;
 
  
  }
document.getElementById('loopAns').innerHTML = currentSum;
}

//code for webpage headers
function menuOpen() {var over = document.getElementById("overlay"); var o = document.createElement('DIV');o.id='overlay1';o.style.height = screen.availHeight + 160 + "px";over.appendChild(o);
var elem1 = document.getElementsByClassName("navlist");  var pos = -200;var trans = 0;var id = setInterval(frame, 5);function frame() {if (pos == 0) {clearInterval(id);}else{pos++; trans=trans+0.0025;
elem1[0].style.left = pos + "px"; document.getElementById('overlay1').style.opacity = trans;}}}function menuClose() {var elem1 = document.getElementsByClassName("navlist");$("#overlay").empty();var pos = 0;var trans = 0.5;var id = setInterval(frame, 5);
function frame() {if (pos == -200) {clearInterval(id);}else{pos=pos-1; trans=trans-0.005;elem1[0].style.left = pos + "px"; }}}
$(document).keyup(function(e){if (e.keyCode == 27 && document.getElementsByClassName("navlist").style.left == "0px"){menuClose();}});
//code that prevents scrolling
var keys={37:1,38:1,39:1,40:1};function preventDefault(e){e=e||window.event;if(e.preventDefault)e.preventDefault();e.returnValue=false;}function preventDefaultForScrollKeys(e){if(keys[e.keyCode]){preventDefault(e);returnfalse;}}
function disableScroll(){if(window.addEventListener)window.addEventListener('DOMMouseScroll',preventDefault,false);
window.onwheel=preventDefault;window.onmousewheel=document.onmousewheel=preventDefault;window.ontouchmove=preventDefault;
document.onkeydown=preventDefaultForScrollKeys;}function enableScroll(){if(window.removeEventListener)window.removeEventListener('DOMMouseScroll',preventDefault,false);
window.onmousewheel=document.onmousewheel=null;window.onwheel=null;window.ontouchmove=null;document.onkeydown=null;} 

//code for rotating gear images
function rotateIcon() {
	if(!document.getElementById('overlay').hasChildNodes()){
		disableScroll();
		var angle=0;
		var rotate = setInterval(function(){
			if(angle==200){
				clearInterval(rotate);
			}else{			
				angle++;
				document.getElementById("smallGearAni").style.transform = "rotate("+angle+"deg)";
				document.getElementById("largeGearAni").style.transform = "rotate("+(-angle)+"deg)";
				if(angle==100){
					menuOpen();
				}
			}
		},10);
	}else{
		var angle=200;
		var rotate = setInterval(function(){
			if(angle==00){
				clearInterval(rotate);
			}else{			
				angle--;
				document.getElementById("smallGearAni").style.transform = "rotate("+angle+"deg)";
				document.getElementById("largeGearAni").style.transform = "rotate("+(-angle)+"deg)";
				if(angle==100){
					menuClose();
				}
			}
		},10);		
	}
}
//Ceasar Cipher
  function CCstart() {
  var argu = document.getElementById("CCshift").value;
  encrypt(argu);
  }
  function encrypt(x) {
    var inp = document.getElementById("CCinput").value;
    var h;
    var encode = "";
    for(h=0; h < inp.length; h++){
      encode[h] = encode += inp.charCodeAt(h) - x + ".";//code will shift down due to concatonating bug
	 
      }
	  
      document.getElementById("CCoutput").innerHTML = encode;	  
  }