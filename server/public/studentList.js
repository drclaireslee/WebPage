document.addEventListener("DOMContentLoaded", async function() {
	let listItems = await getListItems();
	let listBobs = await getBobItems();
	document.getElementById("list").innerHTML = `<ul>${listItems}</ul>`;
	document.getElementById("bobList").innerHTML = `<ul>${listBobs}</ul>`;
});

async function getListItems() {
	const res = await fetch("/api/labMember/all");
	const resJSON = await res.json();
	let html = "";
	for (let entry of resJSON) {
		html = html + `<li>${entry.fullName} <img src="${entry.imagePath}"></li>`;
	}
	return html;
}



async function getBobItems() {
	const res = await fetch("/api/labMember?fullName=Bob");
	const resJSON = await res.json();
	let html = "";
	for (let entry of resJSON) {
		html = html + `<li>${entry.fullName} <img src="${entry.imagePath}"></li>`;
	}
	return html;
}



