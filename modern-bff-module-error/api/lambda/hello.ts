import { createOAuthUserAuth } from '@octokit/auth-oauth-user';
export default async () => ({
  message: 'Hello Modern.js',
});

export const post = async () => ({
  message: 'Hello Modern.js',
});

export const get = async () => {
  const auth = createOAuthUserAuth({
    clientId: '2',
    clientSecret: '22',
    code: '22',
    state: 'state123',
  });

  const { token } = await auth();

  console.log('token=>', token);
  return {
    message: 'Hello Modern.js get',
  };
};
