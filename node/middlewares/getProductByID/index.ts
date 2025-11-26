import { getAppSettings } from '../settings'

export default async function getProductByID(
  ctx: Context,
  next: () => Promise<unknown>
) {
  const {
    vtex: {
      route: { params },
    },
    clients: { getProductByID },
  } = ctx

  const { productId } = params

  if (!productId || productId == ':productId') {
    throw new Error('productId is required')
  }

  try {
    const { appKeyGetProductByID, appTokenGetProductByID } =
      await getAppSettings(ctx)
    const response = await getProductByID.getProductByID(
      productId,
      appKeyGetProductByID,
      appTokenGetProductByID
    )

    ctx.status = 200
    ctx.body = response
  } catch (error) {
    ctx.status = 400
    ctx.body = error
  }
  await next()
}
