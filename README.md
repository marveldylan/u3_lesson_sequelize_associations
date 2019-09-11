# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)  SOFTWARE ENGINEERING IMMERSIVE

## Getting started

1. Fork
1. Clone

# Sequelize Associations

> Take five minutes and read the Sequelize docs on associations: 
>
> - https://git.generalassemb.ly/bruno/sequelize-associations

##

## Setup

```sh
cd sequelize-associations
npm install
```

Create your database:

```sh
npx sequelize-cli db:create
```

Let's create a task model:

```sh
npx sequelize-cli model:generate --name Task --attributes title:string,user_id:integer --underscored
```

Now let's set up our association:

task.js
```js
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    title: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  Task.associate = function(models) {
    // associations can be defined here
    Task.belongsTo(models.User)
  };
  return Task;
};
```

user.js
```js
'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    underscored: true,
  });
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Task)
  };
  return User;
};
```

Run our migrations:

```sh
npx sequelize-cli db:migrate
```

Create a task seed:

```sh
npx sequelize-cli seed:generate --name demo-task
```

Create a task:
```js
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tasks', [{
      title: 'Build an App.',
      user_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tasks', null, {});

  }
};
```

Populate the database with seed data:

```sh
npx sequelize-cli db:seed:all
```

Test the database:

```sh
psql sequelize_associations_development
SELECT * FROM users JOIN tasks ON tasks."userId" = users.id;
```

## Querying

```js
// Find all users with their associated tasks
// Raw SQL: SELECT * FROM "Users" JOIN tasks ON "Tasks".user_id = "Users".id;

const findAllWithTasks = async () => {
    const users = await User.findAll({
        include: [{
            model: Task
        }]
    });
    console.log("All users with their associated tasks:", JSON.stringify(users, null, 4));
}

const findAllJohnsWithTasks = async () => {
    const users = await User.findAll({
        include: [{
            model: Task,
            where: { title: "Work on Unit 3." }
        }]
    });
    console.log("All users with their associated tasks:", JSON.stringify(users, null, 4));
}
```

## Resources

- https://sequelize.org/master/manual/associations.html
- https://sequelize.org/master/manual/querying.html
