First make a .env file with the following keys 
PORT and SECRET

To run the server.js you write and enter into the terminal 
-> "node server.js"

Return an array of all lab members in the labMember collection
-> http://localhost:3000/api/labMember/getAll

Return a token given when the correct values are provided for the keys username and password
-> http://localhost:3000/api/editor/login


a student object has the following keys
_id: Number //always not null
memberName: String //always not null
type: String //always not null
picture: null //always null for now
email: String
background: ["one or more strings"]

