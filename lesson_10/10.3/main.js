// Створіть об'єкт, який матиме одну властивість з масивом об'єктів. 
// Які представляють контакти у вашій контактній книзі. Кожен об'єкт має містити ім'я,
// номер телефону та адресу електронної пошти.
// Додайте метод для пошуку контакту за ім'ям та метод для додавання нових контактів.

const contacts = {
  contacts: [
    // { name: 'John', phone: '123-456-7890', email: 'rV9Xn@example.com' },
    // { name: 'Jane', phone: '987-654-3210', email: 'XbD0n@example.com' },    
  ],

  findContactByName(name) {
    return this.contacts.find(contact => contact.name === name);
  },

  addContact(contact) {
    if (!this.contacts.some(c => c.name === contact.name)) { // если нет контакта с таким именем добавить
      // contacts.some(element => element.name === contact.name);
      this.contacts.push(contact);
    } else  {
      console.log(`Contact with name ${contact.name} already exists`);
    } 
  }
}

contacts.contacts = [
  { name: 'Barbara', phone: '123-456-7890', email: 'rV9Xn@example.com' },
  { name: 'Jane', phone: '987-654-3210', email: 'XbD0n@example.com' },    
];

console.log(contacts.contacts);
contacts.addContact({ name: 'Alice', phone: '555-555-5555', email: 'alice@example.com' });
console.log(contacts.contacts);
contacts.addContact({ name: 'Jane', phone: '555-555-5555', email: 'alice@example.com' });
console.log(contacts.contacts);