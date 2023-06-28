const fs = require("fs");
const { generateKeyPairSync } = require("crypto");
const { dateTimeFormatter } = require("./utils");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Input Length of keys : `, (len) => {
  console.log(`Keys length: ${len}\n`);
  readline.close();

  const { privateKey, publicKey } = generateKeyPairSync("rsa", {
    modulusLength: parseInt(`${len}`),
    privateKeyEncoding: {
      type: "pkcs1",
      format: "pem",
    },
    publicKeyEncoding: {
      type: "pkcs1",
      format: "pem",
    },
  });

  console.log(privateKey);
  console.log(publicKey);
});
