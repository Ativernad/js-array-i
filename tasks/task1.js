//Функція filterAdults приймає масив об'єктів, що представлє людей (з полями name та age),
//вам потрібно написати код, який повертає новий масив, який містить лише тих людей, чий вік більше або дорівнює 18.

function filterAdults(people) {
  const result = [];

  for (let i = 0; i < people.length; i++) {
    const person = people[i];

    if (person.age >= 18) {
      result.push(person);
    }
  }

  return result;
}

module.exports = filterAdults;