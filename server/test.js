function Student(nameInput) {
    let name = nameInput;
}

Student.prototype.print = function() {
    console.log(name);
};

const st = new Student("Bob");
st.print();
