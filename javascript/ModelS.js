function formatAMPM() {
var d = new Date(),
    minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
    hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
    ampm = d.getHours() >= 12 ? 'pm' : 'am',
    months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
return days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+' '+hours+':'+minutes+ampm;
}

function deletecontent(){
	var container = document.getElementById("Jump");
	var l = container.children.length; //IAU NR DE COPII

	if(l > 7)
	container.removeChild(container.lastChild);
}


function creatediv (source) {

	var container = document.getElementById("Jump");
	var l = container.children.length; //IAU NR DE COPII

	if(l > 7) //daca am mai mult de 6 copii trebuie sa sterg ultimul copil
		deletecontent();
	l = container.children.length;
	if(l <= 7)
	{
		var newdiv = document.createElement('div');
		newdiv.classList.add("pop_up");
		var elem = document.createElement("img");
		elem.src = 'Image-S/' + source;
		elem.setAttribute("height", "400");
		elem.setAttribute("width", "860");
		elem.setAttribute("alt", "Flower");
		newdiv.appendChild(elem);

		newdiv.innerHTML += "<figcaption> Tesla Cars </figcaption>"
		var newhtml = "<p> </p>"
		newdiv.innerHTML +=formatAMPM();

		var lastChild = container.children[6];
		lastChild.parentNode.insertBefore(newdiv,lastChild.nextSibling);
	}
}



function init(){
var image1 = document.getElementById("imaget1");
var image2 = document.getElementById("imaget2");
var image3 = document.getElementById("imaget3");
var image4 = document.getElementById("imaget4");
var image5 = document.getElementById("imaget5");
var btn = document.getElementById("mybtn");

image1.addEventListener("click",function (){

	var src1 = image1.src.substring(image1.src.lastIndexOf('/')+1);
	creatediv(src1);
})
image2.addEventListener("click",function (){

	var src2 = image2.src.substring(image2.src.lastIndexOf('/')+1);
	creatediv(src2);
})
image3.addEventListener("click",function (){

	var src3 = image3.src.substring(image3.src.lastIndexOf('/')+1);
	creatediv(src3);
})
image4.addEventListener("click",function (){

	var src4 = image4.src.substring(image4.src.lastIndexOf('/')+1);
	creatediv(src4);
})
image5.addEventListener("click",function (){

	var src5 = image5.src.substring(image5.src.lastIndexOf('/')+1);
	creatediv(src5);
})
btn.onclick = deletecontent;
}
window.onload = init;
