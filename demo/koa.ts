import Koa from 'koa'
import { startUnleash } from 'unleash-client';

const PORT = 3000

const app = new Koa();

const unleash = await startUnleash({
    url: 'http://localhost:4242/api/',
    appName: 'localhost',
    customHeaders: { Authorization: 'default:development.d17468113fa84307e6219239ccced3baed1a30dc5788121695010b5e' }
})

// response
app.use(ctx => {
  ctx.body = 'Hello ConFoo YUL 2024!';

  if (unleash.isEnabled("I-Did-Not-Break-This-Demo")) {
    throw new Error("I'm sure everything's right!")

    ctx.body += '\nThanks for coming to Feature Flags Talk'
  }
});

app.listen(PORT, () => {console.log(`Listening on port ${PORT}`)});