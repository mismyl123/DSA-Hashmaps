const HashMap = require("./hashmaps");

function main() {
  const lotr = new HashMap();

  lotr.MAX_LOAD_RATIO = 0.5;
  lotr.SIZE_RATIO = 3;

  lotr.assign("Hobbit", "Bilbo");
  lotr.assign("Hobbit", "Frodo");

  console.log(lotr);
}

main();