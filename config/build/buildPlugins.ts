import HTMLWebpackPlugin from 'html-webpack-plugin';
import { ProgressPlugin, WebpackPluginInstance } from 'webpack';
import MiniCSSExtractPlugin from 'mini-css-extract-plugin';

import { IBuildPaths } from "./types/config";

export function buildPlugins(options: IBuildPaths): WebpackPluginInstance[] {
  const { html } = options;
  return [new HTMLWebpackPlugin({
    template: html,
  }),
  new ProgressPlugin(),
  new MiniCSSExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].css'
  })]
}