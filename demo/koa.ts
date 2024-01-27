import Koa from 'koa'
import { startUnleash } from 'unleash-client';

const app = new Koa();

const unleash = await startUnleash({
    url: 'https://YOUR-API-URL',
    appName: 'my-node-name',
    customHeaders: { Authorization: 'SOME-SECRET' }
})

// response
app.use(ctx => {
  ctx.body = 'Hello ConFoo YUL 2024!';

  if (!unleash.isEnabled("I-Did-Not-Break-This-Demo")) {
    throw new Error("I'm sure everything's right!")
  }
});

app.listen(3000);