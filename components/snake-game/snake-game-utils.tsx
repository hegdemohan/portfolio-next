import { INITIAL_FOOD_CELL } from './snake-game-constants';
import { SnakeCell, SnakeDirection } from './snake-game-types';

/**
 * Calculates the opacity value based on the index and length.
 *
 * @param {number} index - The index of the element.
 * @param {number} len - The length of the array.
 * @returns {number} The calculated opacity value.
 */
export const getOpacity = (index: number, len: number) => {
	const min = 0.2;
	const max = 1;
	const step = (max - min) / (len - 1);
	return step * (len - 1 - index) + min;
};

/**
 * Selects a random cell for the food, ensuring it is not part of the snake.
 *
 * @param {SnakeCell[]} snake - The array representing the snake cells.
 * @param {number} numRows - The number of rows in the grid.
 * @param {number} numColumns - The number of columns in the grid.
 * @returns {SnakeCell} The selected cell for the food.
 */
export const selectFoodCell = (snake: SnakeCell[], numRows: number, numColumns: number): SnakeCell => {
	// If the snake is not ready yet, then return a default food cell
	if (snake.length === 0) return INITIAL_FOOD_CELL;

	// Generate random row and column indices
	const x = Math.floor(Math.random() * numRows);
	const y = Math.floor(Math.random() * numColumns);

	return isSnakeCell(snake, { x, y }) ? selectFoodCell(snake, numRows, numColumns) : { x, y };
};

/**
 * Checks if a given cell is part of the snake.
 *
 * @param {SnakeCell[]} snake - The array representing the snake cells.
 * @param {SnakeCell} cell - The cell to check.
 * @returns {boolean} Returns true if the cell is part of the snake, false otherwise.
 */
export const isSnakeCell = (snake: SnakeCell[], cell: SnakeCell) => {
	return snake.some((c) => c.x === cell.x && c.y === cell.y);
};

/**
 * Returns an initial snake structure close to the center of the grid.
 *
 * @param {number} numRows - The number of rows in the grid.
 * @param {number} numColumns - The number of columns in the grid.
 * @returns {SnakeCell[]} An array representing the initial snake structure.
 */
export const getInitialSnake = (numRows: number, numColumns: number): SnakeCell[] => {
	if (!numRows || !numColumns) return [];
	const midCell: SnakeCell = {
		x: Math.round(numRows * 0.5),
		y: Math.round(numColumns * 0.5),
	};

	const snake = [
		// Top vertical part towards head starting from one cell above mid x and one cell to the left of mid y
		...Array(4)
			.fill(null)
			.map((_, i) => ({ x: midCell.x - 4 + i, y: midCell.y - 1 })),
		// center horizontal part through mid cell for three cells
		...Array(3)
			.fill(null)
			.map((_, i) => ({ x: midCell.x, y: midCell.y - 1 + i })),
		// bottom vertical part towards tail starting from one cell below mid x cell and one cell to the right of mid y
		...Array(4)
			.fill(null)
			.map((_, i) => ({ x: midCell.x + 1 + i, y: midCell.y + 1 })),
	];

	return snake;
};

/**
 * Move the snake in the specified direction by adding a new head cell and removing the last cell.
 *
 * @param {SnakeCell[]} snake - Array representing the current positions of the snake cells.
 * @param {SnakeDirection} direction - The direction in which the snake should move.
 * @returns {SnakeCell[]} - The updated array of snake cells after the movement.
 */
export const moveSnake = (snake: SnakeCell[], direction: SnakeDirection) => {
	const head = snake[0];

	// Remove last cell
	snake.pop();

	switch (direction) {
		case 'up':
			snake.unshift({ x: head.x - 1, y: head.y });
			break;
		case 'down':
			snake.unshift({ x: head.x + 1, y: head.y });
			break;
		case 'left':
			snake.unshift({ x: head.x, y: head.y - 1 });
			break;
		case 'right':
			snake.unshift({ x: head.x, y: head.y + 1 });
			break;
	}

	return snake;
};
