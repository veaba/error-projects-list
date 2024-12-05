import Koa, { Context } from 'koa';
import cors from 'koa2-cors';

const app = new Koa();


app.use(cors({
  origin: '*',
  credentials: false, // 是否允许发送Cookie等凭证信息，若需要跨域携带Cookie，需设置为true
  allowMethods: ['*'],
  allowHeaders: ['*']
}));

app.use(async (ctx, next) => {
  await next();
});


export default app;