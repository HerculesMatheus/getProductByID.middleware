import { readDocument } from '../../utils/vbaseServices'

export default async function getDocument(
  ctx: Context,
  next: () => Promise<unknown>
) {
  const {
    clients: { vbase },
  } = ctx

  try {
    const response = await readDocument(
      vbase,
      'herculesBucket',
      'herculesBucketPath'
    )
    ctx.status = 200
    ctx.body = response
  } catch (error) {
    ctx.status = 400
    ctx.body = error
  }
  await next()
}
