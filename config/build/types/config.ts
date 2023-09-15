export type BuildModeType = 'production' | 'development';

export interface IBuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
}

export interface IBuildOptions {
  mode: BuildModeType;
  paths: IBuildPaths;
  isDevelopment: boolean;
  port: number;
}

export interface IBuildEnvs {
  mode: BuildModeType;
  PORT?: number;
}