const { User, Task, sequelize } = require('./models')

// Find all users with their associated tasks
// Raw SQL: SELECT * FROM "Users" JOIN tasks ON "Tasks"."userId" = "Users".id;

const findAllWithTasks = async () => {
  // Find all users with their associated tasks
  // Raw SQL: SELECT * FROM users JOIN tasks ON tasks."userId" = users.id;
  const users = await User.findAll({
    include: Task
  })
  console.log(JSON.stringify(users));
}

const findAllJohnsWithTasks = async () => {
  // Find all users with their associated tasks
  // Raw SQL: SELECT * FROM users JOIN tasks ON tasks."userId" = users.id WHERE users."firstName" = 'John';
  const daJohns = await User.findAll(
    {where: {
      firstName: 'John'
    },
    include: Task
    })
    console.log(JSON.stringify(daJohns))
}

const run = async () => {
  try {
    await findAllWithTasks()
    await findAllJohnsWithTasks()
  } catch (error) {
    console.log(error)
  } finally {
    await sequelize.close()
  }
}

run()
