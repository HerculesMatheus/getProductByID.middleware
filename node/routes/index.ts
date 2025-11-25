import { method } from '@vtex/api'

import getProduct from '../middlewares/getProductByID'

export const routes = {
  getProduct: method({ GET: getProduct }),
}
