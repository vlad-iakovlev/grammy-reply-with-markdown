# grammy-reply-with-markdown

replyWithMarkdown method for grammY. Uses [@vlad-yakovlev/telegram-md](https://www.npmjs.org/package/@vlad-yakovlev/telegram-md)

![GitHub CI](https://img.shields.io/github/actions/workflow/status/vlad-iakovlev/grammy-reply-with-markdown/ci.yml?branch=main&label=github-ci)
[![Codecov](https://img.shields.io/codecov/c/github/vlad-iakovlev/grammy-reply-with-markdown/main)](https://codecov.io/gh/vlad-iakovlev/grammy-reply-with-markdown)
[![NPM](https://img.shields.io/npm/v/@vlad-yakovlev/grammy-reply-with-markdown)](https://www.npmjs.org/package/@vlad-yakovlev/grammy-reply-with-markdown)

## Table of Contents

1. [How to Install](#how-to-install)
2. [Usage Examples](#usage-examples)

## How to install

```sh
npm install @vlad-yakovlev/grammy-reply-with-markdown
```

## Usage Examples

```ts
import { Bot, Context } from 'grammy';
import { ReplyWithMarkdownFlavour, replyWithMarkdownPlugin } from '@vlad-yakovlev/grammy-reply-with-markdown';
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
