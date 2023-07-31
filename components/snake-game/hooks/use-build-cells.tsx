import { useMemo } from 'react';
import { MutableRefObject } from 'react';
import { CELL_SIZE } from '../snake-game-constants';
import { SnakeCell } from '../snake-game-types';
import { getOpacity } from '../snake-game-utils';

/**
 * Custom hook to build the array of cells for the Snake game based on the provided dimensions, snake, and food.
 *
 * @param {MutableRefObject<HTMLElement | null>} playAreaRef - The reference to the HTML element whose area needs to be filled with cells.
 * @param {number} width - The width of the given HTML element.
 * @param {number} height - The height of the given HTML element.
 * @param {SnakeCell[]} snake - The array representing the snake cells.
 * @param {SnakeCell} food - The cell representing the food.
 * @returns {Object} An object containing the array of cells, number of rows, and number of columns.
 * - cells: The array of JSX elements representing the cells.
 * - numRows: The number of rows in the grid.
 * - numColumns: The number of columns in the grid.
 */
const useBuildCells = (
	playAreaRef: MutableRefObject<HTMLElement | null>,
	width: number,
	height: number,
	snake: SnakeCell[],
	food: SnakeCell
) => {
	const cells = useMemo(() => {
		if (!playAreaRef.current || !width || !height) {
			return [];
		}

		const container = playAreaRef.current;
		const numColumns = Math.floor(width / CELL_SIZE);
		const numRows = Math.floor(height / CELL_SIZE);
		container.style.width = `${numColumns * CELL_SIZE}px`;
		container.style.height = `${numRows * CELL_SIZE}px`;

		const cells = [];

		for (let i = 0; i < numRows; i++) {
			for (let j = 0; j < numColumns; j++) {
				const snakeCellIndex = snake.findIndex((c) => c.x === i && c.y === j);
				const isFoodCell = food.x === i && food.y === j;

				cells.push(
					<div
						key={`${i}-${j}`}
						id={`${i}-${j}${isFoodCell ? '-food' : ''}${
							snakeCellIndex !== -1 ? '-snake' : ''
						}`}
						className={`h-2.5 w-2.5 ${
							snakeCellIndex !== -1 ? `bg-neon-green` : ''
						} ${
							isFoodCell
								? 'rounded-full bg-neon-green shadow-[0_0_10px_#43D9AD]'
								: ''
						}`}
						style={{
							...(snakeCellIndex !== -1 && {
								opacity: getOpacity(snakeCellIndex, snake.length),
							}),
						}}
					/>
				);
			}
		}

		return cells;
	}, [playAreaRef, width, height, snake, food]);

	const numRows = useMemo(() => Math.floor(height / CELL_SIZE), [height]);
	const numColumns = useMemo(() => Math.floor(width / CELL_SIZE), [width]);

	return { cells, numRows, numColumns };
};

export default useBuildCells;
