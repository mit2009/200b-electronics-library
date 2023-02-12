// convert kebab case to camel case
export function kebabToCamel(str: string): string {
  return str?.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

// given a pathname split by / and return all parts that aren't empty
export function splitPath(path: string): string[] {
  return path.split('/').filter((p) => p !== '');
}
