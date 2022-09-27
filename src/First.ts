interface Person {
  firstName: string;
  lastName: string;
  job: job;
  isVisitor: boolean;
}

function generateEmail(input: Person, force?: boolean): string | undefined {
  if (input.isVisitor && !force) {
    return undefined;
  } else {
    return `${input.firstName}.${input.lastName}@gmail.com`;
  }
}

type job = "Engineer" | "Programmer";

function isPerson(potentialPerson: any): boolean {
  if ("firstName" in potentialPerson && "lastName" in potentialPerson) {
    return true;
  } else {
    return false;
  }
}

function printEmailIfTrue(potentialPerson: any): void {
  if (isPerson(potentialPerson)) {
    console.log(generateEmail(potentialPerson));
  } else {
    console.log("Input is not a person");
  }
}

printEmailIfTrue({
  firstName: "John",
  lastName: "Doe",
});
