import { join } from "path";
import { Configuration } from 'webpack';

import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { IBuildEnvs, IBuildPaths } from "./config/build/types/config";

const paths: IBuildPaths = {
  entry: join(__dirname, 'src', 'index.tsx'),
  build: join(__dirname, 'build'),
  html: join(__dirname, 'public', 'index.html'),
  src: join(__dirname, 'src'),
}

export default (env: IBuildEnvs) => {
  const mode = env.mode || 'development';
  const PORT = Number(env.PORT) || 3000;
  const isDevelopment = env.mode === 'development';

  const webpackConfig: Configuration = buildWebpackConfig({
    mode,
    paths,
    isDevelopment,
    port: PORT,
  });
  return webpackConfig
};
