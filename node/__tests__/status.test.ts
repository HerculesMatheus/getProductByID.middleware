import { status } from '../middlewares/status/status'
import mock from '../__mocks__/status'

describe('status test', () => {
  it('test example', async () => {
    const context: unknown = {
      set: jest.fn(),
      state: { code: 200 },
      clients: {
        status: {
          getStatus: (_: string) => Promise.resolve(mock),
          getStatusWithHeaders: (_: string) =>
            Promise.resolve({
              headers: {},
              status: 200,
              data: mock,
            }),
        },
      },
    }

    const ctx = context as Context

    await status(ctx, jest.fn())

    expect(ctx.body).toBe(mock)
    expect(ctx.status).toBe(200)
  })
})
