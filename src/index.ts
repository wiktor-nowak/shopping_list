const world = "world is the best";

export function hello(who: string = world): string {
  return `Hello ${who}! `;
}
