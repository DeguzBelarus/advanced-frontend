import { ResolveOptions } from 'webpack';
import { IBuildOptions } from "./types/config";


export function buildResolvers(options: IBuildOptions): ResolveOptions {
  const { paths } = options;
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {},
  }
}