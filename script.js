var modal = document.getElementById("modal");
var modalImg = document.getElementById("modalImg");
var caption = document.getElementById("caption");
var span = document.getElementById("close"); 

function zoom (element) {
	modalImg.src = element.src;
	modal.style.display = "block";
	caption.innerHTML = element.alt;
}
	
span.onclick = function() { 
	modal.style.display = "none";
};