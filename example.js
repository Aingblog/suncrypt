const Suncrypt = require('./dist/suncrypt');

// Example usage
const sundaneseCrypto = new Suncrypt();

console.time('Execution Time');
const key = sundaneseCrypto.generateKey(32);
console.log('Generated Key:', `${key  } (length: ${  key.length  })`);
console.log();
const data = JSON.stringify({ name: 'Umat', age: 25, email: 'umat@duck.com', '᮵':'ᮓᮔ᮪ᮓᮤ ᮌᮤᮜᮀ ᮛᮙᮓ᮪ᮠᮔ᮪'});

const encrypted = sundaneseCrypto.encrypt(data, key);

console.log('Encrypted:', `${encrypted  } (length: ${  encrypted.length  })\n`);
console.log();

const decrypted = JSON.parse(sundaneseCrypto.decrypt(encrypted, key));

console.log('Decrypted:', decrypted, decrypted['᮵']);
console.timeEnd('Execution Time');