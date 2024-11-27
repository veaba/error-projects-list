import { useState, useEffect } from 'react';
import { get as hello } from '@/api/lambda/hello';

export default () => {
  const [text, setText] = useState('');

  useEffect(() => {
    hello().then((res) => {
      console.log('res=>', res);
      setText('xx');
    });
  }, []);
  return <div>{text}</div>;
};
