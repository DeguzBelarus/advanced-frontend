import { type ResolveOptions } from 'webpack';
import { type IBuildOptions } from './types/config';

export const buildResolvers = (options: IBuildOptions): ResolveOptions => {
  const { paths } = options;
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {},
  };
};
