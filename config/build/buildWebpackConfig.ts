import { Configuration } from 'webpack';

import { IBuildOptions } from './types/config';
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: IBuildOptions): Configuration {
  const { mode, paths, isDevelopment } = options;
  const { build, entry } = paths;
  return {
    mode,
    entry,
    output: {
      filename: '[name].[contenthash].js',
      path: build,
      clean: true,
    },
    plugins: buildPlugins(paths),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDevelopment ? 'inline-source-map' : undefined,
    devServer: isDevelopment ? buildDevServer(options) : undefined,
  };
}