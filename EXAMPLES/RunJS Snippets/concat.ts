function concat<
  N extends number[],
  S extends string[]
>(nums: [...N], strs: [...S]): [...N, ...S] {
  return [...nums, ...strs];
}

concat([1,2,3], ['hello world']);