import { useState } from 'react';
import { SnakeCell } from '../snake-game-types';

/**
 * Custom hook for collision detection in the Snake Game.
 *
 * @param {number} numRows - Number of rows in the game grid.
 * @param {number} numColumns - Number of columns in the game grid.
 * @param {SnakeCell[]} snake - Array representing the current positions of the snake cells.
 * @returns {{ hasCollided: boolean, setHasCollided: (value: boolean) => void }} - Object containing collision status and a setter function.
 */
const useCollisionDetection = (
	numRows: number,
	numColumns: number,
	snake: SnakeCell[]
) => {
	// State to track the collision status
	const [hasCollided, setHasCollided] = useState(false);

	// Check for collisions on every update of the snake positions
	if (snake.length > 0 && !hasCollided) {
		const head = snake[0];

		// Check if the snake's head hit the boundary walls
		if (head.x < 0 || head.x >= numRows) {
			setHasCollided(true);
		} else if (head.y < 0 || head.y >= numColumns) {
			setHasCollided(true);
		} else {
			// Check if the snake has bitten itself (collision with its own body)
			const hasBittenItself = snake.some(
				(cell) => cell !== head && cell.x === head.x && cell.y === head.y
			);
			if (hasBittenItself) setHasCollided(true);
		}
	}

	// Return the collision status and the setter function to update it
	return { hasCollided, setHasCollided };
};

export default useCollisionDetection;
