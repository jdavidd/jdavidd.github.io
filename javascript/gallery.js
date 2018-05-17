var myIndex = 0;

function auto_galery() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(auto_galery, 4000); // Change image every 2 seconds
}

var imgArray = [
	 '../Image-S/Models1_.jpg',
 	 '../Image-S/Models2_.jpg',
   '../Image-S/Models3_.jpg',
 	 '../Image-S/Models4_.jpg',
	 '../Image-S/Models5_.jpg'],
    curIndex = 0;
    imgDuration = 3000;

function slideShow() {
    document.getElementById('slider').className += "fadeOut";
    setTimeout(function() {
        document.getElementById('slider').src = imgArray[curIndex];
        document.getElementById('slider').className = "";
    },1000);
    curIndex++;
    if (curIndex == imgArray.length) { curIndex = 0; }
    setTimeout(slideShow, imgDuration);
}
function fadeoutimg(){
	var bannerr = document.getElementById("slider");
	var y = 1;
	var idd = setInterval(function(){
		bannerr.style.opacity = y;
		y = y - 0.1;
		//alert("ok");
		if(bannerr.style.opacity < 0)
		{
			clearInterval(idd);
			imgg());
			y = 1;
		}
	},150);

}
function imgg(){
	var bannerr = document.getElementById("slider");
	bannerr.style.opacity = 0;
	var x = 0.1;

	var id = setInterval(function() {
		bannerr.style.opacity =  x;
		x = x + 0.1;
	   if (bannerr.style.opacity >= 1)
	   {
	      clearInterval(id);
	      x = 0.1;
	      fadeoutimg();
	   }
	},50);

function fadeout(){
	var bannerr = document.getElementById("ban");
	var y = 1;
	var idd = setInterval(function(){
		bannerr.style.opacity = y;
		y = y - 0.1;
		//alert("ok");
		if(bannerr.style.opacity < 0)
		{
			clearInterval(idd);
			banner();
			y = 1;
		}
	},150);

}
function banner(){
	var bannerr = document.getElementById("ban");
	bannerr.style.opacity = 0;
	var x = 0.1;

	var id = setInterval(function() {
		bannerr.style.opacity =  x;
		x = x + 0.1;
	   if (bannerr.style.opacity >= 1)
	   {
	      clearInterval(id);
	      x = 0.1;
	      fadeout();
	   }
	},50);

	/*
	for(let i = 1;i <= 10; i++ )
	{
		setTimeout(function(){
		var t = i/10;
		bannerr.style.opacity =  t;
		//alert(t);
	   		if (bannerr.style.opacity >= 1)
	   		{
	      		fadeout();
	   		}
	   },1000);
	}
	*/



}
function zoom(e){
  var zoomer = e.currentTarget;
  e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
  e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
  x = offsetX/zoomer.offsetWidth*100
  y = offsetY/zoomer.offsetHeight*100
  zoomer.style.backgroundPosition = x + '% ' + y + '%';
}
function start(){
	slideShow();
	imgg();

}
window.onload = start;
