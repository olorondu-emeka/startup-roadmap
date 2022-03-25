import * as indexResolver from "./roadmap/roadmap.resolver";

import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import helmet from "helmet";
import indexSchema from "./config/index.schema";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// enable CORS for browser clients
app.use(cors());
app.options("*", cors());

// add necessary headers
app.use(helmet());

// mount graphql route
app.use(
  "/graphql",
  graphqlHTTP({
    schema: indexSchema,
    rootValue: indexResolver,
    graphiql: true
  })
);

// handle unknown route
app.use((_req, res, _next) => {
  return res.status(404).send("Route doesn't exist.");
});

// start app
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
