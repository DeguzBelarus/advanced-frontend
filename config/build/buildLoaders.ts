import { RuleSetRule } from 'webpack';
import MiniCSSExtractPlugin from 'mini-css-extract-plugin';

import { IBuildOptions } from "./types/config";

export function buildLoaders(options: IBuildOptions): RuleSetRule[] {
  const { isDevelopment } = options;
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDevelopment ? 'style-loader' : MiniCSSExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => resPath.includes('.module.'),
            localIdentName: isDevelopment ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
          },

        }
      },
      "sass-loader",
    ],
  };
  return [typescriptLoader, cssLoader]
}
