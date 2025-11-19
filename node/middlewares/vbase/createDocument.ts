import { json } from 'co-body'
import { readDocument, writeDocument } from '../../utils/vbaseServices'
import { objectCreate, prevDocument } from '../../typings'

export default async function createDocument(
  ctx: Context,
  next: () => Promise<unknown>
) {
  const {
    clients: { vbase },
  } = ctx

  const reqBody = (await json(ctx.req)) as objectCreate
  const prev = (await readDocument(
    vbase,
    'herculesBucket',
    'herculesBucketPath'
  )) as prevDocument

  const existingNames: string[] = Array.isArray(prev.names) ? prev.names : []

  const newName: string = reqBody.name

  const updatedNames = [...existingNames, newName]

  const payload: prevDocument = {
    ...prev,
    names: updatedNames,
  }

  try {
    const response = await writeDocument(
      vbase,
      'herculesBucket',
      'herculesBucketPath',
      payload
    )
    ctx.status = 200
    ctx.body = response
  } catch (error) {
    ctx.status = 400
    ctx.body = error
  }
  await next()
}
