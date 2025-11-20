document.addEventListener("DOMContentLoaded", function() {
	let form = document.querySelector("form");
	form.addEventListener("submit", auth);
});

async function auth(e) {
	e.preventDefault();
	
	const logInfo = {
		username: document.getElementById("username").value,
		passhash: document.getElementById("password").value
	};

	const response = await fetch("http://localhost:3000/api/editor/auth", {
		method: "POST",
		headers: {"content-type": "application/json"},
		body: JSON.stringify(logInfo)
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
