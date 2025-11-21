export default async function getUser(
  ctx: Context,
  next: () => Promise<unknown>
) {
  const {
    clients: { GithubApi },
    vtex: {
      route: { params },
    },
  } = ctx

  const { user } = params

  if (!user) {
    throw new Error('user is required')
  }

  try {
    const response = await GithubApi.getUser(user)
    // eslint-disable-next-line no-console
    console.log(response)

    ctx.status = 200
    ctx.body = response
  } catch (error) {
    ctx.status = 400
    ctx.body = error
  }
  await next()
}
