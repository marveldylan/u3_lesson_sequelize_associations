# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)  SOFTWARE ENGINEERING IMMERSIVE

## Getting started

1. Fork
1. Create a feature branch
1. Clone

# Sequelize Querying

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
npx sequelize-cli model:generate --name task --attributes title:string,userId:integer
```

Now let's set up our association:

task.js
```js
'use strict';
module.exports = (sequelize, DataTypes) => {
  const task = sequelize.define('task', {
    title: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  task.associate = function(models) {
    // associations can be defined here
    task.belongsTo(models.user)
  };
  return task;
};
```

user.js
```js
'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    // associations can be defined here
    user.hasMany(models.task)
  };
  return user;
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

Populate the database with seed data:

```sh
npx sequelize-cli db:seed:all
```

Test the database:

```sh
psql sequelize_associations_development
SELECT * FROM users JOIN tasks ON tasks."userId" = users.id;```

## Querying

```js
// Find all users with their associated tasks
// Raw SQL: SELECT * FROM users JOIN tasks ON task.userId = user.id;

const findAll = async () => {
    const users = await User.findAll({
        include: [{
            model: Task
        }]
    });
    console.log("All users with their associated tasks:", JSON.stringify(users, null, 4));
}

const findAllJohns = async () => {
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
