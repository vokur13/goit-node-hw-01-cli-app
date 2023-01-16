const fs = require('fs').promises;
const path = require('path');

// console.log(process.argv);

const contactsPath = path.resolve('db/contacts.json');

// fs.readFile(contactsPath, 'utf8')
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error.message));

// async function getData() {
//   try {
//     const data = await fs.readFile(contactsPath, 'utf8');
//     console.log(data);
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// getData();

(async () => {
  try {
    const data = await fs.readFile(contactsPath, 'utf8');
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
})();
