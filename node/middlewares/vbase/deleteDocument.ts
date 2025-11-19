export default async function deleteDocument(
  ctx: Context,
  next: () => Promise<unknown>
) {
  const {
    clients: { vbase },
  } = ctx

  try {
    const response = vbase.deleteFile('herculesBucket', 'herculesBucketPath')
    ctx.status = 200
    ctx.body = response
  } catch (error) {
    ctx.status = 400
    ctx.body = error
  }
  await next()
}
