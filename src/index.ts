import { Markdown, md } from '@vlad-yakovlev/telegram-md'
import { Context, NextFunction } from 'grammy'

function replyWithMarkdown(
  this: Context,
  text: string | Markdown,
  other?: Parameters<Context['reply']>[1],
  signal?: Parameters<Context['reply']>[2],
) {
  return this.reply(
    md.build(text),
    {
      parse_mode: 'MarkdownV2',
      ...other,
    },
    signal,
  )
}

export interface ReplyWithMarkdownFlavour {
  replyWithMarkdown: typeof replyWithMarkdown
}

export const replyWithMarkdownPlugin =
  () =>
  // eslint-disable-next-line unicorn/consistent-function-scoping
  async (context: Context & ReplyWithMarkdownFlavour, next: NextFunction) => {
    context.replyWithMarkdown = replyWithMarkdown
    await next()
  }
