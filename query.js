const { User, Task } = require('./models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

// Find all users with their associated tasks
// Raw SQL: SELECT * FROM "Users" JOIN tasks ON "Tasks"."userId" = "Users".id;

const findAllWithTasks = async () => {}

const findAllJohnsWithTasks = async () => {}

// Find all users
// Raw SQL: SELECT * FROM "Users";

const findAll = async () => {}

// Create a new user
// Raw SQL: INSERT INTO users (id, firstName, lastName, email, password) VALUES (DEFAULT, 'Jane', 'Doe', 'jane@jane.com', '321cba')
const createUser = async () => {}

// Delete everyone named "Jane"
// Raw SQL: DELETE FROM users WHERE firstName = 'Jane'
const destroyUser = async () => {}

// Change lastname "Doe" to "Smith"
// UPDATE users SET lastName='Smith' WHERE lastName = 'Doe'
const updateUser = async () => {}

// Find all users and only show their email
// Raw SQL: SELECT email FROM users;
const findAllEmails = async () => {}

// Find all users where firstname is John
// Raw SQL: SELECT * FROM users WHERE firstName = "John";
const findAllJohns = async () => {}

// Find all users where firstname is either John or Jane
// Raw SQL: SELECT * FROM user WHERE firstName = "John" OR firstName = "Jane";
const findAllJohnsOrJanes = async () => {}

const run = async () => {
  // await findAllWithTasks()
  // await findAllJohnsWithTasks()
  // await findAll()
  // await createUser()
  // await destroyUser()
  // await updateUser()
  // await findAllEmails()
  // await findAllJohns()
  // await findAllJohnsOrJanes()
  await process.exit()
}

run()
