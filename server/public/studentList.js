document.addEventListener("DOMContentLoaded", async function() {
	let listItems = await getListItems();
	document.getElementById("list").innerHTML = `<ul>${listItems}</ul>`;
});

async function getListItems() {
	const res = await fetch("http://localhost:3000/api/labMember/all");
	const resJSON = await res.json();
	let html = "";
	for (let entry of resJSON) {
		html = html + `<li>${entry.fullName}</li>`;
	}
	return html;
}




