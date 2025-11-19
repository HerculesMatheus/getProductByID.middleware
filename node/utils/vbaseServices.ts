import { VBase } from '@vtex/api'

export async function readDocument(vbase: VBase, bucket: string, path: string) {
  try {
    const document = await vbase.getJSON(bucket, path, true)

    if (!document || document === null) {
      return {}
    }

    return document
  } catch {
    return {}
  }
}

export async function writeDocument(
  vbase: VBase,
  bucket: string,
  path: string,
  data: unknown
) {
  return vbase.saveJSON(bucket, path, data)
}
