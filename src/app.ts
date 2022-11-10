import express, {Request, Response, NextFunction} from "express";

const app = express();

// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    return res.send("Hello World!!");
});

app.post(`/api/data`, (req: Request, res: Response) => {
    console.log(req.body);

    return res.sendStatus(200);
})

app.all(`/api/all`, (req: Request, res: Response) => {
    return res.sendStatus(200);
})

app.listen(3000, () => {
    console.log("Application Listening at local port http://localhost:3000")
})

