import Koa from "koa";
import config from "./config/index.js";
import page from "./page.js";
import state from "./state.js";

const app = new Koa();

app.use(async ctx => {
    const data = await state();
    console.log(data);
    ctx.body = page(data.data);
});

app.listen(config.port);