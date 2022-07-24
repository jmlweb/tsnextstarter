import { createMocks } from 'node-mocks-http';

import helloApi from '@/pages/api/hello';

describe('helloApi', () => {
  test('must respond properly', async () => {
    const { req, res } = createMocks({
      method: 'GET',
    });

    await helloApi(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual({ name: 'John Doe' });
  });
});
