const bcrypt = require("bcryptjs");

//TODO
async function verify(usernameInput, passwordInput) {
	console.log(bcrypt.hashSync(passwordInput));
	return (usernameInput === "admin" &&  bcrypt.compareSync(passwordInput, "$2b$10$9To4Rv/aH1dAtqyU/0Ml9.0i.sbRO.CqHBWl/x58wDslhSU7FG33."));
}

module.exports = {verify};
