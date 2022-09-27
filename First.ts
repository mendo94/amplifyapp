interface Person {
  firstName: string;
  lastName: string;
  job: job;
  isVisitor: boolean;
}

function generateMail(input: Person, force?: boolean): string | undefined {
  if (input.isVisitor && !force) {
    return undefined;
  } else {
    return `${input.firstName}.${input.lastName}@gmail.com`;
  }
}

type job = "Engineer" | "Programmer";

console.log(
  generateMail(
    {
      firstName: "Rina",
      lastName: "Mendoza",
      job: "Programmer",
      isVisitor: true,
    },
    true
  )
);
