import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Task {
        id: Int!
        name: String!
        is_completed: Boolean!
    }

    type Phase {
        id: Int!
        name: String!
        tasks: [Task!]!
        is_completed: Boolean!
    }

    input CompleteTaskDTO {
        taskId: Int!
        phaseId: Int!
    }
    

    type RootQuery {
        getProgress: [Phase!]!
    }

    type RootMutation {
        completeTask(body: CompleteTaskDTO): Task
    }

    schema {
        query: RootQuery,
        mutation: RootMutation
    }
`);

export default schema;
