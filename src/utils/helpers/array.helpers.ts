import { OrderType } from '@/types/interfaces';
import { List, orderBy } from 'lodash';

/**
 * Creates a new array of the specified length and fills it with the given value.
 * @param length The length of the array to be created.
 * @param value The value to fill the array with.
 * @returns An array filled with the specified value.
 */
export function fillArray(length: number, value: unknown): unknown[] {
  return Array(length).fill(value);
}

/**
 * Orders an array of objects by the specified keys and directions.
 *
 * @param data - The array of objects to be ordered.
 * @param keys - The keys to order the objects by.
 * @param directions - The directions to order the objects in (either 'asc' or 'desc').
 * @returns The ordered array of objects.
 */
export const orderArrayOfObjectsBy = (
  data: List<unknown> | null | undefined,
  keys: string[],
  directions: OrderType[],
) => {
  return orderBy(data, keys, directions);
};
