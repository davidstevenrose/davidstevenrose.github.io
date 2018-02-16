function toppingStart(){function toppingPrint(topping1){document.getElementById("description").innerHTML="Pizza with "+topping1,orderCount++,subTotal()}function subTotal(){subTotal1=6.99*orderCount,taxTotal()}function taxTotal(){taxTotal1=.06*subTotal1}function grandTotal(a,b){grandTotal1=a+b}var orderCount=0,subTotal1=0,taxTotal1=0,grandTotal1=0,array=["Anchovies","anchovies"],x=prompt("Please enter your topping","No Pizza for you Toby!");array.includes(x)?document.getElementById("cost").innerHTML="The pizza cannot have anchovies":(toppingPrint(x),grandTotal(subTotal1,taxTotal1),document.getElementById("cost").innerHTML="$"+Number(grandTotal1.toFixed(2)))}function firstFunction(){document.getElementById("first").innerHTML="Hello World"}function loopStart(){var maxValue=prompt("What is you max value?","100");isNaN(maxValue)!==!0?(loopFunction(maxValue),document.getElementById("wrong").innerHTML=""):(document.getElementById("wrong").innerHTML="Please insert a number",document.getElementById("loopAns").innerHTML="")}function loopFunction(n){var ArrayOne,i,current,length=0,currentSum=0;for(length=n,ArrayOne=new Array,i=0;length>ArrayOne.length;i++)ArrayOne.push(1+i);for(current=0;current<ArrayOne.length;current++)currentSum=ArrayOne[current]+currentSum;document.getElementById("loopAns").innerHTML=currentSum}function menuOpen(){function frame(){0==pos?clearInterval(id):(pos++,trans+=.0025,elem1.style.left=pos+"px",elem2.style.opacity=trans)}var over=document.createElement("div"),absoluteElem=document.getElementById("absolutePositionedObjects");absoluteElem.appendChild(over),absoluteElem.lastChild.id="overlay1",document.getElementById("overlay1").style.height=screen.availHeight+160+"px";var elem1=document.getElementById("navlist"),elem2=document.getElementById("overlay1"),pos=-200,trans=0,id=setInterval(frame,5)}function menuClose(){function frame(){-200==pos?clearInterval(id):(pos-=1,trans-=.005,elem1.style.left=pos+"px",elem2.style.opacity=trans)}var elem1=document.getElementById("navlist"),elem2=document.getElementById("overlay1"),pos=0,trans=.5,id=setInterval(frame,5);document.getElementById("overlay1").parentNode.removeChild(document.getElementById("overlay1"))}function toolCount(){tool=1}function toolOn(){1==tool&&(document.getElementById("tooltip").style.visibility="visible")}function toolOff(){tool=0,document.getElementById("tooltip").style.visibility="hidden"}function preventDefault(e){e=e||window.event,e.preventDefault&&e.preventDefault(),e.returnValue=!1}function preventDefaultForScrollKeys(e){keys[e.keyCode]&&(preventDefault(e),returnfalse)}function disableScroll(){window.addEventListener&&window.addEventListener("DOMMouseScroll",preventDefault,!1),window.onwheel=preventDefault,window.onmousewheel=document.onmousewheel=preventDefault,window.ontouchmove=preventDefault,document.onkeydown=preventDefaultForScrollKeys}function enableScroll(){window.removeEventListener&&window.removeEventListener("DOMMouseScroll",preventDefault,!1),window.onmousewheel=document.onmousewheel=null,window.onwheel=null,window.ontouchmove=null,document.onkeydown=null}$(document).keyup(function(e){27==e.keyCode&&"0px"==document.getElementById("navlist").style.left&&menuClose()});var tool,keys={37:1,38:1,39:1,40:1};
//expressed for your veiwing convinence
//<!-- first example -->
/* function toppingStart() {
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
function menuOpen() {var over = document.createElement("div");var absoluteElem = document.getElementById("absolutePositionedObjects");absoluteElem.appendChild(over);absoluteElem.lastChild.id = "overlay1";document.getElementById("overlay1").style.height = screen.availHeight + 160 + "px";
var elem1 = document.getElementById("navlist");  var elem2 = document.getElementById("overlay1");var pos = -200;var trans = 0;var id = setInterval(frame, 5);function frame() {if (pos == 0) {clearInterval(id);}else{pos++; trans=trans+0.0025;
elem1.style.left = pos + "px"; elem2.style.opacity = trans;}}}function menuClose() {var elem1 = document.getElementById("navlist");var elem2 = document.getElementById("overlay1");var pos = 0;var trans = 0.5;var id = setInterval(frame, 5);
function frame() {if (pos == -200) {clearInterval(id);}else{pos=pos-1; trans=trans-0.005;elem1.style.left = pos + "px"; elem2.style.opacity = trans;}}document.getElementById("overlay1").parentNode.removeChild(document.getElementById("overlay1"));}
$(document).keyup(function(e){if (e.keyCode == 27 && document.getElementById("navlist").style.left == "0px"){menuClose();}});var tool;function toolCount() {tool = 1;}
function toolOn(){if (tool == 1){document.getElementById("tooltip").style.visibility = "visible";}}function toolOff() {tool = 0;document.getElementById("tooltip").style.visibility = "hidden";}
//code that prevents scrolling
var keys={37:1,38:1,39:1,40:1};function preventDefault(e){e=e||window.event;if(e.preventDefault)e.preventDefault();e.returnValue=false;}function preventDefaultForScrollKeys(e){if(keys[e.keyCode]){preventDefault(e);returnfalse;}}
function disableScroll(){if(window.addEventListener)window.addEventListener('DOMMouseScroll',preventDefault,false);
window.onwheel=preventDefault;window.onmousewheel=document.onmousewheel=preventDefault;window.ontouchmove=preventDefault;
document.onkeydown=preventDefaultForScrollKeys;}function enableScroll(){if(window.removeEventListener)window.removeEventListener('DOMMouseScroll',preventDefault,false);
window.onmousewheel=document.onmousewheel=null;window.onwheel=null;window.ontouchmove=null;document.onkeydown=null;} */

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
