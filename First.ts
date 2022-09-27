interface Person {
  firstName: string;
  lastName: string;
  job: job;
}

function generateEmail(input: Person): string {
  return `${input.firstName}.${input.lastName}@email.com`;
}

type job = "Engineer" | "Programmer";

console.log(
  generateEmail({
    firstName: "Rina",
    lastName: "Mendoza",
    job: "Programmer",
  })
);
