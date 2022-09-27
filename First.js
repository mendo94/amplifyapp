function generateEmail(input, force) {
    if (input.isVisitor) {
        return undefined;
    }
    else {
        return "".concat(input.firstName, ".").concat(input.lastName, "@email.com");
    }
}
console.log(generateEmail({
    firstName: "Rina",
    lastName: "Mendoza",
    job: "Programmer",
    isVisitor: true
}, true));
