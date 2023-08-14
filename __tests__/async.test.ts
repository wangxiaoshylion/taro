import { getUserName } from '@/utils/services';

jest.mock('@/utils/request');

test('测试mock的异步请求', () => {
  expect.assertions(1);
  return getUserName(4).then((data) => expect(data).toBe('Mark'));
});
