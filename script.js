const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

function generateKey(length, characters) {
  let password = "";
  for (let i = 0; i < length; i++) {
    let randomElement = Math.floor(Math.random() * characters.length);
    password += characters[randomElement];
  }

  return password;
}

const key = generateKey(16, characters);
console.log(key);
