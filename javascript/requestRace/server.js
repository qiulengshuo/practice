const Koa = require('koa');
const koaRouter = require('koa-router');
const os = require('os');
const cluster = require('cluster');

const sleep = () =>
    new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, Math.random() * 3000),
    );

if (cluster.isMaster) {
    const cpus = os.cpus();
    for (let i = 0; i < cpus.length; i++) {
        cluster.fork();
    }
} else {
    const app = new Koa();
    const router = new koaRouter();
    app.use(async (ctx, next) => {
        ctx.set('Access-Control-Allow-Origin', '*');
        await next();
    });
    router.get('/data', async (ctx) => {
        const number = ctx.request.query.num;
        await sleep();
        ctx.body = `第${number}页数据`;
    });
    app.use(router.routes());
    app.listen(9999, '127.0.0.1');
}
