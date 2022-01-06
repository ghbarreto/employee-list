export const students = () => {
  const faker = require('faker');
  const LOOP_TIMES = Math.floor(Math.random() * 15);
  const arr = [];

  for (let i = 0; i <= LOOP_TIMES; i++) {
    arr.push({
      city: faker.address.city(),
      company: faker.company.companyName(),
      email: faker.internet.email(),
      firstName: faker.name.findName(),
      grades: Array.from({length: 10}, () => Math.floor(Math.random() * 99)),
      id: faker.datatype.uuid(),
      lastName: faker.name.lastName(),
      pic: faker.image.image(),
      skill: faker.name.jobTitle(),
    });
  }
  return arr;
};
