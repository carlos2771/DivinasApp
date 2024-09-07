import app from "./app.js";
import {connectDB }from "./db.js"
import { PORT } from "./config.js";
connectDB();
console.log(PORT);

app.listen(PORT)
console.log(`http://localhost:${PORT}`);
