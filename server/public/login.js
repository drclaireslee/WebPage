document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("loginBtn").addEventListener(
    	"click", auth);
});

async function auth() {
	const logInfo = {
		username: document.getElementById("username").value,
		passhash: document.getElementById("password").value
	}

	const response = await fetch("http://localhost:3000/api/editor/auth", {
		method: "POST",
		body: new URLSearchParams(logInfo)
	});

	if (response.ok) {
		const tokenResponse = await response.json();
		localStorage.setItem("token", tokenResponse.token);
		localStorage.setItem("username", logInfo.username);
		window.location.replace("./homepage.html");
	} else {
		window.alert("Login failed");
	}
}
