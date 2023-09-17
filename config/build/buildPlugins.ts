import HTMLWebpackPlugin from 'html-webpack-plugin';
import { DefinePlugin, ProgressPlugin, WebpackPluginInstance } from 'webpack';
import MiniCSSExtractPlugin from 'mini-css-extract-plugin';

import { IBuildOptions } from "./types/config";

export function buildPlugins(options: IBuildOptions): Array<WebpackPluginInstance> {
  const { paths: { html }, isDevelopment } = options;
  let webpackPlugins: Array<WebpackPluginInstance> = [];
  const htmlWebpackPlugin = new HTMLWebpackPlugin({
    template: html,
  });
  const progressPlugin = new ProgressPlugin();
  const miniCSSExtractPlugin = new MiniCSSExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].css'
  });
  const isDevelopmentVariablePlugin = new DefinePlugin({
    __IS_DEVELOPMENT__: JSON.stringify(isDevelopment),
  });

  webpackPlugins = [...webpackPlugins,
    htmlWebpackPlugin,
    progressPlugin,
    miniCSSExtractPlugin,
    isDevelopmentVariablePlugin];
  return webpackPlugins;
}