document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("greeting").innerHTML = `<p>Hello, ${localStorage.getItem("username")}</p>`;
	document.getElementById("logoutBtn").addEventListener(
    	"click", logOut);
});

function logOut() {
	localStorage.clear();
	window.location.replace("./login.html");
}
