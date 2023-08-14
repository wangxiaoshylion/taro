import React from 'react';
import renderer from 'react-test-renderer';
import Index from '@/pages/index/index';

it('toMatchSnapshot', () => {
  const tree = renderer.create(<Index />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('toMatchInlineSnapshot', () => {
  const tree = renderer.create(<Index title="内联快照" />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <taro-view-core>
      <taro-text-core>
        内联快照
      </taro-text-core>
    </taro-view-core>
  `);
});

it.only('will fail every time', () => {
  // 对象
  const user = {
    createdAt: new Date(),
    id: Math.floor(Math.random() * 20),
    name: 'LeBron James',
  };
  expect(user).toMatchInlineSnapshot(
    {
      createdAt: expect.any(Date),
      id: expect.any(Number), // 忽略掉这俩变化
    },
    `
    {
      "createdAt": Any<Date>,
      "id": Any<Number>,
      "name": "LeBron James",
    }
  `,
  );

  // 字符串
  const randomNumber = Math.round(Math.random() * 100);
  const stringWithRandomData = `<div id="${randomNumber}">Lorem ipsum</div>`;
  const stringWithConstantData = stringWithRandomData.replace(/id="\d+"/, 'id="idNumber"');
  console.log(stringWithConstantData);
  expect(stringWithConstantData).toMatchSnapshot();
});
