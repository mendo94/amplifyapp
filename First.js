function generateEmail(input) {
    return "".concat(input.firstName, ".").concat(input.lastName, "@email.com");
}
console.log(generateEmail({
    firstName: "Rina",
    lastName: "Mendoza",
    job: "Programmer"
}));
