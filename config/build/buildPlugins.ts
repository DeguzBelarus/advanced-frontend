import HTMLWebpackPlugin from 'html-webpack-plugin';
import { DefinePlugin, ProgressPlugin, type WebpackPluginInstance } from 'webpack';
import MiniCSSExtractPlugin from 'mini-css-extract-plugin';

import { type IBuildOptions } from './types/config';

export const buildPlugins = (options: IBuildOptions): WebpackPluginInstance[] => {
  const {
    paths: { html },
    isDevelopment,
  } = options;
  let webpackPlugins: WebpackPluginInstance[] = [];
  const htmlWebpackPlugin = new HTMLWebpackPlugin({
    template: html,
  });
  const progressPlugin = new ProgressPlugin();
  const miniCSSExtractPlugin = new MiniCSSExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].css',
  });
  const isDevelopmentVariablePlugin = new DefinePlugin({
    __IS_DEVELOPMENT__: JSON.stringify(isDevelopment),
  });

  webpackPlugins = [
    ...webpackPlugins,
    htmlWebpackPlugin,
    progressPlugin,
    miniCSSExtractPlugin,
    isDevelopmentVariablePlugin,
  ];
  return webpackPlugins;
};
