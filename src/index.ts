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
  () => async (ctx: Context & ReplyWithMarkdownFlavour, next: NextFunction) => {
    ctx.replyWithMarkdown = replyWithMarkdown
    await next()
  }
