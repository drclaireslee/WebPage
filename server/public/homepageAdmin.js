document.addEventListener("DOMContentLoaded", function() {

	document.getElementById("greeting").innerHTML = `<p>Hello admin, ${localStorage.getItem("username")}</p>`;

    document.getElementById("logoutBtn").addEventListener(
    	"click", logOut);
	
	document.getElementById("createEditorForm").addEventListener("submit", createEditor);

	document.getElementById("deleteEditorForm").addEventListener("submit", deleteEditor);

	document.getElementById("updatePassword").addEventListener("submit", changePassword);
});

function logOut() {
	localStorage.clear();
	window.location.replace("./loginAdmin.html");
}

async function createEditor(e) {
    e.preventDefault();

	const logInfo = {
		username: document.getElementById("createUsernameInput").value,
		passhash: document.getElementById("createPasswordInput").value,
		role: "editor"
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

async function deleteEditor(e) {
	e.preventDefault();
	
	const response = await fetch(`api/editor/user/${document.getElementById("deleteUsernameInput").value}`, {
		method: "DELETE",
		headers: {"x-auth": localStorage.getItem("token")},
	});


	if (response.ok) {
		window.alert("Succeeded to delete editor");
	} else {
		window.alert("Fail to delete editor");
	}
}


async function changePassword(e) {
	e.preventDefault();

	const logInfo = {
		passhash: document.getElementById("newPasswordInput").value
	};

	const response = await fetch(`/api/editor/user/${localStorage.getItem("username")}`, {
		method: "PATCH",
		headers: {
			"x-auth": localStorage.getItem("token"),
			"content-type": "application/json"
		},
		body: JSON.stringify(logInfo)
	});

	if (response.ok)  {
		window.alert("Update Password");
	} else {
		window.alert("Did not update password");
	}
}