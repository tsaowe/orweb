const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const route = new Router();
const path = require('path');
const viewFolder = path.join(__dirname, 'view');

route.all('/', async ctx => {
    await ctx.render('page-list/user', {name: 'caowei'});
});


app.use(route.routes()).use(route.allowedMethods());

const port = 3000;
app.listen(port);
console.log(`open http://localhost:${port}/`);