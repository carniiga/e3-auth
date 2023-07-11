import { app } from "./app";
import { mongoDbconnect } from "../repository/mongoConnect";
import { productsRouter } from "./routes/products-routes/products.routes";
import {authRouter} from "./routes/auth-routes/auth.routes"
const port = 3000;

app.use(productsRouter)
app.use(authRouter)


app.listen(port, async () => {
    await mongoDbconnect()
    console.log(`listening on port ${port}`)
})