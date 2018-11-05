import { isFunction } from "./utils";

export function mergeInstance<A, B, C, D, E, F, G, H, I, J>(
  a: A, b: B, c?: C, d?: D, e?: E, f?: F, g?: G, h?: H, i?: I, j?: J)
  : A & B & C & D & E & F & G & H & I & J {
  const args: any[] = [...arguments];
  return args
    .map(arg => deepKeys(arg)
      .filter(key => key !== "constructor" && isFunction(arg[key]))
      .map(key => [key, arg[key].bind(arg)])
    )
    .reduce((sum, kvPair) => sum.concat(kvPair))
    .reduce((sum: any, [key, value]) => {
      sum[key] = value;
      return sum;
    }, {})
}

function deepKeys(instance: any): string[] {
  const proto = Object.getPrototypeOf(instance);
  if (proto.constructor === Object) {
    return Object.getOwnPropertyNames(instance)
  }
  return [...deepKeys(proto), ...Object.getOwnPropertyNames(instance)]
}
