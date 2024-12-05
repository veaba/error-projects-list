import { useContext } from '@modern-js/runtime/koa';
export const get = async () => {
  const ctx = useContext();
  console.log('get header=>', ctx.req.headers);
  return { message: 'hello' };
};

export const post = async (ctx) => {
  console.log('post header=>', ctx.headers);
  console.log('post header req=>', ctx.req);
  console.log('post header res=>', ctx.response);



  return { message: 'post' };
};