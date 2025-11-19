import { method } from '@vtex/api'
import createDocument from '../middlewares/vbase/createDocument'
import getDocument from '../middlewares/vbase/getDocument'
import deleteDocument from '../middlewares/vbase/deleteDocument'

export const routes = {
  getDocument: method({ GET: getDocument }),
  createDocument: method({ POST: createDocument }),
  deleteDocument: method({ DELETE: deleteDocument }),
}
