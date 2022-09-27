function generateEmail(input, force) {
    if (input.isVisitor && !force) {
        return undefined;
    }
    else {
        return "".concat(input.firstName, ".").concat(input.lastName, "@gmail.com");
    }
}
function isPerson(potentialPerson) {
    if ("firstName" in potentialPerson && "lastName" in potentialPerson) {
        return true;
    }
    else {
        return false;
    }
}
function printEmailIfTrue(potentialPerson) {
    if (isPerson(potentialPerson)) {
        console.log(generateEmail(potentialPerson));
    }
    else {
        console.log("Input is not a person");
    }
}
printEmailIfTrue({
    firstName: "John",
    lastName: "Doe"
});
