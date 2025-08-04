import { Context } from 'grammy'
import { ReplyWithMarkdownFlavour, replyWithMarkdownPlugin } from './index.js'

test('should set ctx.replyWithMarkdown and call next', async () => {
  const context = {} as any
  const next = jest.fn()

  await replyWithMarkdownPlugin()(context, next)

  expect(context.replyWithMarkdown).toBeInstanceOf(Function)
  expect(next).toHaveBeenCalledWith() // TODO: test that async was used
})

test('should run correctly when only text presented', async () => {
  const context = { reply: jest.fn() } as any as Context &
    ReplyWithMarkdownFlavour
  const next = jest.fn()

  await replyWithMarkdownPlugin()(context, next)
  await context.replyWithMarkdown('text_test')

  expect(context.reply).toHaveBeenCalledWith(
    String.raw`text\_test`,
    { parse_mode: 'MarkdownV2' },
    undefined,
  )
})

test('should pass arguments to ctx.reply', async () => {
  const context = { reply: jest.fn() } as any as Context &
    ReplyWithMarkdownFlavour
  const next = jest.fn()
  const signal = {} as any

  await replyWithMarkdownPlugin()(context, next)
  await context.replyWithMarkdown(
    'text_test',
    { reply_markup: { keyboard: [] } },
    signal,
  )

  expect(context.reply).toHaveBeenCalledWith(
    String.raw`text\_test`,
    { parse_mode: 'MarkdownV2', reply_markup: { keyboard: [] } },
    signal,
  )
})
