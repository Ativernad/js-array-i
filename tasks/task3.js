// З масива людей (people) потрібно знайти людину за іменем (name)
function findByName(people, name) {
  for (let i = 0; i < people.length; i++) {
    const person = people[i];

    if (person.name === name) {
      return person; // повертаємо першого, хто підходить
    }
  }

  // якщо нікого не знайшли
  return undefined;
}

module.exports = findByName;