import React from 'react';
import { View, Text } from '@tarojs/components';
// import { useLoad } from '@tarojs/taro';
import './index.less';

interface Iprops {
  title?: string;
}

export default function Index({ title }: Iprops) {
  // useLoad(() => {
  //   console.log('Page loaded.');
  // });

  return (
    <View className="index">
      <Text>{title ?? 'Hello world!'}</Text>
    </View>
  );
}
