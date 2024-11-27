# test

## BFF use @octokit/auth-oauth-user

如果 `api` 目录跟 `src` 同级别，进行暴露，并且使用 [`@octokit/auth-oauth-user`](https://npmmirror.com/package/@octokit/auth-oauth-user) ，则报错

但是如果不做暴露的话反而可以，即 `api` 目录变更为 `src/api` 下，则不会报错`

```diff
+ import { createOAuthUserAuth } from '@octokit/auth-oauth-user';
export default async () => ({
  message: 'Hello Modern.js',
});

export const post = async () => ({
  message: 'Hello Modern.js',
});

export const get = async () => {
+  const auth = createOAuthUserAuth({
+    clientId: '2',
+    clientSecret: '22',
+    code: '22',
+    state: 'state123',
+  });
  return {
    message: 'Hello Modern.js get',
  };
};

```

error report:

```shell
TypeError: Unknown file extension ".ts" for F:\Github\modern-demos\modern-bff\api\lambda\hello.ts
    at Object.getFileProtocolModuleFormat [as file:] (node:internal/modules/esm/get_format:160:9)
    at defaultGetFormat (node:internal/modules/esm/get_format:203:36)
    at defaultLoad (node:internal/modules/esm/load:143:22)
    at async ModuleLoader.load (node:internal/modules/esm/loader:553:7)
    at async ModuleLoader.moduleProvider (node:internal/modules/esm/loader:434:45)
    at async link (node:internal/modules/esm/module_job:87:21) {
  code: 'ERR_UNKNOWN_FILE_EXTENSION'
}
error   TypeError: Cannot destructure property 'module' of 'moduleInfo' as it is null.
    at ApiRouter.getModuleHandlerInfos (F:\Github\modern-demos\modern-bff\node_modules\.pnpm\@modern-js+bff-core@2.62.1_ts-node@10.8.2_@types+node@18.11.19_typescript@5.0.4__tsconfig-paths@3.14.2_zod@3.23.8\node_modules\@modern-js\bff-core\dist\cjs\router\index.js:236:21)
    at F:\Github\modern-demos\modern-bff\node_modules\.pnpm\@modern-js+bff-core@2.62.1_ts-node@10.8.2_@types+node@18.11.19_typescript@5.0.4__tsconfig-paths@3.14.2_zod@3.23.8\node_modules\@modern-js\bff-core\dist\cjs\router\index.js:227:33
    at Array.forEach (<anonymous>)
    at ApiRouter.getHandlerInfos (F:\Github\modern-demos\modern-bff\node_modules\.pnpm\@modern-js+bff-core@2.62.1_ts-node@10.8.2_@types+node@18.11.19_typescript@5.0.4__tsconfig-paths@3.14.2_zod@3.23.8\node_modules\@modern-js\bff-core\dist\cjs\router\index.js:226:17)
    at ApiRouter.getApiHandlers (F:\Github\modern-demos\modern-bff\node_modules\.pnpm\@modern-js+bff-core@2.62.1_ts-node@10.8.2_@types+node@18.11.19_typescript@5.0.4__tsconfig-paths@3.14.2_zod@3.23.8\node_modules\@modern-js\bff-core\dist\cjs\router\index.js:186:30)
    at async Array.prepareApiServer (F:\Github\modern-demos\modern-bff\node_modules\.pnpm\@modern-js+plugin-bff@2.62.1_@babel+traverse@7.25.9_@rsbuild+core@1.1.6_react-dom@18.3.1_reac_r4ww3pfip3emfdxuzo3renremq\node_modules\@modern-js\plugin-bff\dist\cjs\server.js:152:33)
    at async prepare (F:\Github\modern-demos\modern-bff\node_modules\.pnpm\@modern-js+plugin-bff@2.62.1_@babel+traverse@7.25.9_@rsbuild+core@1.1.6_react-dom@18.3.1_reac_r4ww3pfip3emfdxuzo3renremq\node_modules\@modern-js\plugin-bff\dist\cjs\server.js:90:21)
    at async ServerBase.init (F:\Github\modern-demos\modern-bff\node_modules\.pnpm\@modern-js+server-core@2.62.1_react-dom@18.3.1_react@18.3.1__react@18.3.1\node_modules\@modern-js\server-core\dist\cjs\serverBase.js:41:5)
    at async createDevServer (F:\Github\modern-demos\modern-bff\node_modules\.pnpm\@modern-js+server@2.62.1_@babel+traverse@7.25.9_@rsbuild+core@1.1.6_react-dom@18.3.1_react@18_l5v2kxrf4dxgjo6bmybcjy25bi\node_modules\@modern-js\server\dist\cjs\createDevServer.js:73:3)
    at async dev (F:\Github\modern-demos\modern-bff\node_modules\.pnpm\@modern-js+app-tools@2.62.1_@rspack+core@1.1.4_@swc+helpers@0.5.15__encoding@0.1.13_react-dom_t3vtpqxn3z6ixaboa3sgkunbcm\node_modules\@modern-js\app-tools\dist\cjs\commands\dev.js:119:37)
 ELIFECYCLE  Command failed with exit code 1.

```
