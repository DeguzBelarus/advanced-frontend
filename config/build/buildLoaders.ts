import { RuleSetRule } from 'webpack';
import MiniCSSExtractPlugin from 'mini-css-extract-plugin';

import { IBuildOptions } from "./types/config";

export function buildLoaders(options: IBuildOptions): RuleSetRule[] {
  const { isDevelopment } = options;
  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };
  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ['@babel/preset-env'],
        "plugins": [
          ["i18next-extract", { locales: ['ru', 'en'], keyAsDefaultValueForDerivedKeys: true }],
        ]
      }
    }
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
  return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader]
}
