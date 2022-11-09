import {Request, Response, NextFunction} from "express";
import express from "express";


const app = express();


app.get("/", (req: Request<string>, res: Response<string>, next: NextFunction) => {
    return res.send("Hello World!!");
});

app.listen(3000, () => {
    console.log("Application Listening at local port http://localhost:3000")
})
