import { InstanceOptions, IOContext, JanusClient } from '@vtex/api'

export default class getProductByID extends JanusClient {
  constructor(ctx: IOContext, options?: InstanceOptions) {
    super(ctx, {
      ...options,
      headers: { Accept: 'application/json', ...options?.headers },
    })
  }

  public async getProduct(
    productId: string | string[],
    appKeyGetProductByID: string,
    appTokenGetProductByID: string
  ) {
    const response = this.http.get(
      `https://acctglobal.vtexcommercestable.com.br/api/catalog/pvt/product/${productId}`,
      {
        headers: {
          'X-VTEX-API-AppKey': appKeyGetProductByID,
          'X-VTEX-API-AppToken': appTokenGetProductByID,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    )
    return response
  }
}
