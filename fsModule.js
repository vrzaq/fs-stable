// fsModule.js
import { readFileSync, readFile } from 'fs';
import { readFile as readFilePromises } from 'fs/promises';

const customReadFile = (path, options, callback) => {
  console.log(`Reading file from path: ${path}`);
  return readFile(path, options, callback);
};

const customReadFileSync = (path, options) => {
  console.log(`Reading file synchronously from path: ${path}`);
  return readFileSync(path, options);
};

const customReadFilePromises = (path, options) => {
  console.log(`Reading file with promises from path: ${path}`);
  return readFilePromises(path, options);
};

export const fs = {
  readFile: customReadFile,
  readFileSync: customReadFileSync,
  readFilePromises: customReadFilePromises
};
