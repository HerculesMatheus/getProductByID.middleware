import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

export default class GithubApi extends ExternalClient {
  constructor(ctx: IOContext, options?: InstanceOptions) {
    super('https://api.github.com/', ctx, {
      ...options,
      headers: { Accept: 'application/json', ...options?.headers },
    })
  }

  public async getUser(user: string | string[]) {
    return this.http.get(`https://api.github.com/users/${user}`)
  }
}
