document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("logoutBtn").addEventListener(
    	"click", logOut);
	
	document.getElementById("createEditorForm").addEventListener("submit", createEditor);

	document.getElementById("deleteEditorForm").addEventListener("submit", deleteEditor);

	document.getElementById("updatePassword").addEventListener("submit", changePassword);
});

function logOut() {
	localStorage.clear();
	window.location.replace("./login.html");
}

async function createEditor(e) {
    e.preventDefault();

	const logInfo = {
		username: document.getElementById("createUsernameInput").value,
		passhash: document.getElementById("createPasswordInput").value
	};

	const response = await fetch("/api/editor/", {
		method: "POST",
		headers: {
			"content-type": "application/json",
			"x-auth": localStorage.getItem("token")
		},
		body: JSON.stringify(logInfo)
	});

	if (response.ok) {
		window.alert("Succeeded to create editor");
	} else {
		window.alert("Fail to create editor");
	}
}
headers: {"x-auth": localStorage.getItem("token")}

async function deleteEditor(e) {
	e.preventDefault();
	
	const response = await fetch(`api/editor/user/${document.getElementById("deleteUsernameInput")}`, {
		method: "DELETE",
		headers: {"x-auth": localStorage.getItem("token")},
	});


	if (response.ok) {
		window.alert("Succeeded to delete editor");
	} else {
		window.alert("Fail to delete editor");
	}
}
