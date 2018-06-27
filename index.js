const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const route = new Router();

const render = require('koa-ejs');
const path = require('path');

render(app, {
    root: path.join(__dirname, 'view'),
    layout: 'template',
    viewExt: 'html',
    cache: true,
    debug: false
});

route.all('/', async ctx => {
    await ctx.render('page-list/user', {name:'caowei'});
});

app.use(route.routes()).use(route.allowedMethods());
app.listen(3000);