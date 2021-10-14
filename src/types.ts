/**
 * file to hold all type definitions
 */
declare type Board = {
  length: number;
  height: number;
};

declare type SnakeMetaData = {
  apiversion: string;
  author?: string;
  color?: string;
  head?: string;
  tail?: string;
  version?: string;
};

export { SnakeMetaData, Board };
