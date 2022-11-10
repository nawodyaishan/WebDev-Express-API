import express, {Request, Response, NextFunction} from "express";
import {resolve} from "dns";

const app = express();

// Middlewares
app.use(express.json())


// Add routes
app.route(`/`)
    .get((req: Request, res: Response) => {
        return res.send(`Get Request Called`)
    })
    .post((req: Request, res: Response) => {
        return res.send(`Post Request Called`)
    })
    .put((req: Request, res: Response) => {
        return res.send(`Put Request Called`)
    })
    .all((req: Request, res: Response) => {
        return res.send(`All Request Called`)
    });

const handleGetBookOne = (req: Request, res: Response, nxt: NextFunction) => {
    console.log(`book accessed - ${req.params.bookId}`);
    //
    // @ts-ignore
    req.name  = "Nawodya";
    nxt();
};

const handleGetBookTwo = (req: Request, res: Response, nxt: NextFunction) => {
    console.log(`book accessed - ${req.params.bookId}`);
    return res.send(req.params)
};

app.route("/book/:bookId/:authorId").get([handleGetBookOne], [handleGetBookTwo]);
// app.get("/book/:bookId/:authorId", handleGetBook);

app.listen(3000, () => {
    console.log("Application Listening at local port http://localhost:3000")
})

// app.use(express.urlencoded({extended: true}))
//
// app.get("/", (req: Request, res: Response, next: NextFunction) => {
//     return res.json({
//         success: true,
//         name: `Nawodya`
//     })
//
//     // return res.redirect("www.google.com")
// });
//
// app.post(`/api/data`, (req: Request, res: Response) => {
//     console.log(req.body);
//     return res.sendStatus(200);
// })
//
// app.all(`/api/all`, (req: Request, res: Response) => {
//     return res.sendStatus(200);
// })
