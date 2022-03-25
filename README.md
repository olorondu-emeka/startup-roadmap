# Startup Roadmap
A GraphQL API for the startup-roadmap project. 

## Brief Description
Startup Roadmap is a simple API that allows a user to record and track their growth journey in relation to their roadmap. It does this via the following features:
- mark a task as completed (for a particular phase)
- view progress on the roadmap


## Getting Started
These instructions will get you a copy of the project up and running on your local machine for testing purposes.

### Prerequisites
System requirements for this project to work includes:
- Node.js( >= v14)
- Node Package Manager (NPM) or yarn
- Git
- Typescript globally installed

### Installation
To install the dependencies in the package.json file, run the following command: 

```bash
npm/yarn install
```

### Running the project
To run the project on your local machine, follow the steps below:  

-  Create a `.env` file in the root folder of the project.
- Populate the `.env` file with the content of the `.env.example` file (contained in the root folder) and update with the appropriate values
- Kindly note that the default port provided is `5000`. If there are issues with using this port, update the `PORT` variable in the `.env` file with a suitable value of your choice.

Once the steps above have been taken, navigate to the project directory and run the following commands on the terminal:

```bash
npm/yarn run build
npm/yarn run start:dev
```

The project can be tested with the GraphiQL User Interface, which can be accessed in the browser via the URL: http://localhost:5000/graphql

## Manual Testing
The project can be manually tested on the **Graphiql interface** (see section above) or on **Postman** by making a `POST` request to: http://localhost:5000/graphql. The following will be helpful options for the request body:
- query

```js
query{
    getProgress{
        id
       name
        is_completed
       tasks{
           id
           name
           is_completed
       }
    }
}
```

- mutation
```js
mutation($body: CompleteTaskDTO) {
    completeTask(body: $body){
        id
        name
        is_completed
    }
}
```

- graphql variables
```json
{
    "body": {
        "phaseId": 1,
        "taskId": 1
    }
}
```

## Built With
- [Express](https://expressjs.com/) - The Node.js web framework used
- [Typescript](https://www.typescriptlang.org/) - The language used
- [GraphQL](https://graphql.org/) - The API query language
- [Yarn](https://yarnpkg.com/) - Package Manager for Node.js
