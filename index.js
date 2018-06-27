const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const route = new Router();


// import koa middle ware
const userAgent = require('koa-useragent');
const ejsMiddleWare = require('./src/ejs-middle-ware');

// use koa middle ware
app.use(userAgent);
app.use(ejsMiddleWare());
app.use(route.routes()).use(route.allowedMethods());


route.all('/', async ctx => {
    if (ctx.userAgent.isMobile) {
        ctx.render('view/mobile-app/index.html');
    } else {
        ctx.render('view/web-app/index.html');
    }

});


const port = 3000;
app.listen(port);
console.log(`open http://localhost:${port}/`);