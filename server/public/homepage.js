document.addEventListener("DOMContentLoaded", function() {

	document.getElementById("greeting").innerHTML = `<p>Hello, ${localStorage.getItem("username")}</p>`;
	
	document.getElementById("logoutBtn").addEventListener(
    	"click", logOut);
	document.querySelector("form").addEventListener(
    	"submit", createLabMember);

	document.getElementById("deleteBtn").addEventListener(
		"click", deleteLabMember);

	document.getElementById("updateForm").addEventListener(
    	"submit", updateLabMember);
});

function logOut() {
	localStorage.clear();
	window.location.replace("./login.html");
}

async function createLabMember(e) {
	e.preventDefault();

	const formData = new FormData();
	formData.append("fullName", document.getElementById("nameInput").value);
	formData.append("type", document.getElementById("typeInput").value);
	
	const labMemberImage = document.getElementById("fileInput");
	formData.append("labMemberImage", labMemberImage.files[0]);

	const response = await fetch("http://localhost:3000/api/labMember/", {
		method: "POST",
		headers: {"x-auth": localStorage.getItem("token")},
		body: formData
	});

	if (response.ok)  {
		window.alert("created lab member");
	} else {
		window.alert("Did not create lab member");
	}
}

async function deleteLabMember() {
	const response = await fetch("http://localhost:3000/api/labMember/" + document.getElementById("deleteIdInput").value, {
		method: "DELETE",
		headers: {"x-auth": localStorage.getItem("token")}
	});

	if (response.ok)  {
		window.alert("Delete lab member");
	} else {
		window.alert("Did not delete lab member");
	}
}

async function updateLabMember(e) {
	e.preventDefault();

	const formData = new FormData();
	formData.append("fullName", document.getElementById("updateNameInput").value);

	const labMemberImage = document.getElementById("updateFileInput");
	formData.append("labMemberImage", labMemberImage.files[0]);

	const response = await fetch("http://localhost:3000/api/labMember/" + document.getElementById("updateIdInput").value, {
		method: "PATCH",
		headers: {"x-auth": localStorage.getItem("token")},
		body: formData
	});

	if (response.ok)  {
		window.alert("Update lab member");
	} else {
		window.alert("Did not update lab member");
	}
}


