import { RuleSetRule } from 'webpack';
import MiniCSSExtractPlugin from 'mini-css-extract-plugin';

import { IBuildOptions } from "./types/config";

export function buildLoaders(options: IBuildOptions): RuleSetRule[] {
  const { isDevelopment } = options;
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };
  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };
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
  return [fileLoader, svgLoader, typescriptLoader, cssLoader]
}
