# grammy-reply-with-markdown

replyWithMarkdown method for grammY. Uses [telegram-md](https://www.npmjs.org/package/telegram-md)

![GitHub CI](https://img.shields.io/github/workflow/status/vlad-yakovlev/grammy-reply-with-markdown/CI/main?label=github-ci)
[![Codecov](https://img.shields.io/codecov/c/github/vlad-yakovlev/grammy-reply-with-markdown/main)](https://codecov.io/gh/vlad-yakovlev/grammy-reply-with-markdown)
[![NPM](https://img.shields.io/npm/v/grammy-reply-with-markdown)](https://www.npmjs.org/package/grammy-reply-with-markdown)

## How to install

```sh
npm install grammy-reply-with-markdown
```

## How to use

```ts
import { Bot, Context } from 'grammy';
import { ReplyWithMarkdownFlavour, replyWithMarkdownPlugin } from 'grammy-reply-with-markdown';
import { md } from 'telegram-md';

(async () => {
  const bot = new Bot<Context & ReplyWithMarkdownFlavour>('<bot-token>');

  bot.use(replyWithMarkdownPlugin());

  bot.command('start', async (ctx) => {
    // Send simple string (all special characters will be escaped)
    await ctx.replyWithMarkdown('Hello, World!');

    // Send Markdown (read more about `md` here: https://www.npmjs.org/package/telegram-md)
    await ctx.replyWithMarkdown(md`Hello, ${md.bold(World)}!`);

    // Options will be passed to ctx.reply
    await ctx.replyWithMarkdown('foo-bar', { reply_markup: { keyboard: [] });
  });
})()
```
