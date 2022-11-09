import express, {
  Application,
  Request,
  Response,
} from "express";
import { config } from "dotenv";
config();
import morgan from "morgan";
import cors from "cors";


//App variables
const app: Application = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


/*
Tasks 
API that can authenticate user with email and password (Mock data)
API that can create task, update task & delete task.
When a task is created, it should be queued on Rabbitmq before being created in the db then send events through sockets.  

*/



app.get("/", (req: Request, res: Response) => {
  res.send({ status: "Running", message: "Hello from microservices API" });
});

export default app;