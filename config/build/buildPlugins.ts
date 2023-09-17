import HTMLWebpackPlugin from 'html-webpack-plugin';
import { DefinePlugin, ProgressPlugin, WebpackPluginInstance } from 'webpack';
import MiniCSSExtractPlugin from 'mini-css-extract-plugin';

import { IBuildOptions } from "./types/config";

export function buildPlugins(options: IBuildOptions): WebpackPluginInstance[] {
  const { paths: { html }, isDevelopment } = options;
  return [new HTMLWebpackPlugin({
    template: html,
  }),
  new ProgressPlugin(),
  new MiniCSSExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].css'
  }),
  new DefinePlugin({
    __IS_DEVELOPMENT__: JSON.stringify(isDevelopment),
  })]
}