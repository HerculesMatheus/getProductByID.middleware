import { IOClients } from '@vtex/api'

import Status from './status'
import GithubApi from './githubApi/getGithubUser'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get status() {
    return this.getOrSet('status', Status)
  }

  public get GithubApi() {
    return this.getOrSet('GithubApi', GithubApi)
  }
}
