import inquirer from "inquirer";

const execa = require("execa");
const Listr = require("listr");
const ora = require("ora");
const delay = require("delay");

const task = new Listr([
  {
    title: "Check connection",
    task: () =>
      delay(1000).then(() => {
        execa("echo", "Complete");
      }),
  },
  {
    title: "Install package",
    task: () =>
      delay(2000).then(() => {
        execa("echo", "Complete");
      }),
  },
  {
    title: "Download packages",
    task: () =>
      delay(4000).then(() => {
        execa("echo", "Complete");
      }),
  },
]);

const task2 = new Listr([
  {
    title: "Check data",
    task: () =>
      delay(2000).then(() => {
        execa("echo", "Complete");
      }),
  },
]);

const task3 = new Listr([
  {
    title: "Setup configuration",
    task: () =>
      delay(5000).then(() => {
        execa("echo", "Complete");
      }),
  },
]);

const task4 = new Listr([
  {
    title: "Finished",
    task: () => {
      execa("echo", "Complete");
    },
  },
]);

const install = async () => {
  await task.run().catch((err: any) => {
    console.error(err);
  });

  var questions = [
    {
      type: "input",
      name: "username",
      message: "Enter your username",
    },
    {
      type: "password",
      message: "Enter your password",
      name: "password",
      mask: "*",
    },
  ];

  await inquirer.prompt(questions).then(async (value) => {
    await task2.run().catch((err: any) => {
      console.error(err);
    });
  });

  var bools = [
    {
      type: "checkbox",
      message: "Select usage type",
      name: "type",
      choices: [
        {
          name: "Offline",
        },
        {
          name: "Online",
        },
      ],
    },
  ];

  await inquirer.prompt(bools).then(async (value) => {
    await task2.run().catch((err: any) => {
      console.error(err);
    });
  });

  var bools = [
    {
      type: "checkbox",
      message: "Select organization folder",
      name: "type",
      choices: [
        {
          name: "Wix Assets",
        },
        {
          name: "IDF Icons",
        },
        {
          name: "Something new",
        },
      ],
    },
  ];

  await inquirer.prompt(bools).then(async (value) => {
    await task3.run().catch((err: any) => {
      console.error(err);
    });
  });

  await task4.run().catch((err: any) => {
    console.error(err);
  });
};

install();
