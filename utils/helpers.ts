import { NestedStringJSON } from './types';

/**
 * @returns - index of an object in a array
 * @param array - array of objects in which needs to be searched
 * @param key - key of the object whose index need to be found
 * @param value - value of the key to match with
 */
export const findIndexByKeyValue = <T, K extends keyof T>(
	array: T[],
	key: K,
	value: T[K]
): number => {
	const index = array.findIndex((item) => item[key] === value);
	if (index === -1) {
		throw new Error(`Object not found with ${key.toString()} = ${value}`);
	}
	return index;
};

/**
 * Function to flatten a given object
 * @param obj - object to be flattened
 */
export const flatten = (obj: NestedStringJSON): Record<string, string> => {
	const result: Record<string, string> = {};

	const flatten = (
		currentObj: Record<string, any>,
		path: string = ''
	): void => {
		for (const key in currentObj) {
			const newPath = path ? `${path}.${key}` : key;
			if (typeof currentObj[key] === 'object') {
				flatten(currentObj[key], newPath);
			} else {
				result[newPath] = currentObj[key];
			}
		}
	};

	flatten(obj);

	return result;
};
