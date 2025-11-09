function getAll() {
    return [
        {
            _id: 0,
            memberName: "Claire Seungeun Lee",
            type: "Faculty",
            picture: null,
            email: "claire_lee@uml.edu",
            background: ["Associate Professor", "Ph.D.", "School of Criminology and Justice Studies", "Co-Director, Center for Asian American Studies", "University of Massachusetts Lowell"]
        },
        {
            _id: 1,
            memberName: "Lia Mengyan Liu",
            type: "Ph.D.",
            picture: null,
            email: null,
            background: ["Co-Advisee, School of Criminology and Justice Studies"]
        },
        {
            _id: 2,
            memberName: "William Breen",
            type: "Undergraduate",
            picture: null,
            email: null,
            background: ["Miner School of Computer and Information Sciences", "Immersive Scholar (2025 –2026)"]
        },
        {
            _id: 3,
            memberName: "Daniela Pena",
            type: "Former",
            picture: null,
            email: null,
            background: ["School of Criminology and Justice Studies(2022 - 2023)", "Immersive Scholar (2025 – 2026)"]
        },
    ];
}
module.exports = {getAll};
