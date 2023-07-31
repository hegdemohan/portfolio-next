import { useInterval } from '@/utils/hooks/use-interval';
import { Dispatch, SetStateAction, useCallback, useEffect, useRef, useState } from 'react';
import { useWindowResizeHandler } from '../../utils/hooks/use-resize-handler';
import useBuildCells from './hooks/use-build-cells';
import useCollisionDetection from './hooks/use-collision-detection';
import useSnakeDirection from './hooks/use-snake-direction';
import { SnakeCell } from './snake-game-types';
import { getInitialSnake, moveSnake, selectFoodCell } from './snake-game-utils';
import { getFormattedMessage } from '@/i18n/i18n-provider';
import { INITIAL_FOOD_CELL, INITIAL_SNAKE_SPEED, SPEED_INCREMENTS, TOTAL_FOODS } from './snake-game-constants';

type Props = {
	/** Number of food eaten */
	numOfFoodEaten: number;

	/** State function to update the number of food eaten */
	setNumOfFoodEaten: Dispatch<SetStateAction<number>>;
};

const SnakePlayArea = ({ numOfFoodEaten, setNumOfFoodEaten }: Props) => {
	const playAreaRef = useRef<HTMLDivElement | null>(null);
	const containerDimension = useWindowResizeHandler(playAreaRef);

	const [snake, setSnake] = useState<SnakeCell[]>([]);
	const [food, setFood] = useState<SnakeCell>(INITIAL_FOOD_CELL);
	const [isGameLive, setIsGameLive] = useState(false);

	const snakeSpeed = useRef<number>(INITIAL_SNAKE_SPEED);

	// The function from the hook which returns the current direction of the snake
	const { getDirection, resetDirection } = useSnakeDirection(isGameLive);

	// Builds the cells of the playing area
	const { cells, numRows, numColumns } = useBuildCells(
		playAreaRef,
		containerDimension.width,
		containerDimension.height,
		snake,
		food
	);

	const { hasCollided, setHasCollided } = useCollisionDetection(numRows, numColumns, snake);

	/** Updates the snake on eating the food and creates new food å*/
	const handleSnakeOnEatingFood = () => {
		setNumOfFoodEaten(numOfFoodEaten + 1);
		setSnake((prevSnake) => {
			const updatedSnake = [food, ...prevSnake];
			return [...moveSnake(updatedSnake, getDirection())];
		});
		setFood(selectFoodCell(snake, numRows, numColumns));

		snakeSpeed.current = SPEED_INCREMENTS[numOfFoodEaten];
	};

	// Ticker which builds the snake and cells on a given interval
	useInterval(
		() => {
			// Need to create a new array to make the setState inside useInterval work
			if (snake.length > 0 && snake[0].x === food.x && snake[0].y === food.y) handleSnakeOnEatingFood();
			else setSnake((prevSnake) => [...moveSnake(prevSnake, getDirection())]);
		},
		isGameLive ? snakeSpeed.current : null
	);

	// Initialize snake
	useEffect(() => {
		setSnake(getInitialSnake(numRows, numColumns));
	}, [numColumns, numRows]);

	// Initialize the food on creating the playing area
	useEffect(() => {
		if ((!numRows && !numColumns) || food.x !== -1 || food.y !== -1) return;
		setFood(selectFoodCell(snake, numRows, numColumns));
	}, [food, numColumns, numRows, snake]);

	// On collision reset the game
	useEffect(() => {
		if (hasCollided) {
			setIsGameLive(false);
		}
	}, [hasCollided]);

	// Handle on game successfully completed
	useEffect(() => {
		if (numOfFoodEaten === TOTAL_FOODS) {
			setIsGameLive(false);
		}
	}, [numOfFoodEaten]);

	/** Prepares the game on clicking of start game */
	const handleStartGame = useCallback(() => {
		setIsGameLive(true);
		setHasCollided(false);
		setSnake(getInitialSnake(numRows, numColumns));
		resetDirection();
		snakeSpeed.current = INITIAL_SNAKE_SPEED;
		setNumOfFoodEaten(0);
	}, [numColumns, numRows, resetDirection, setHasCollided]);

	return (
		<div className="relative h-full w-full font-fira_semibold" ref={playAreaRef}>
			<div className="absolute flex grow flex-wrap rounded-xl bg-black-bg">{cells.map((element) => element)}</div>
			{numOfFoodEaten === TOTAL_FOODS && (
				<div className="pointer-events-none absolute flex h-full w-full items-center justify-center text-slate-300">
					<div className="flex w-full flex-col items-center gap-4 bg-dark-bg bg-opacity-50 p-8">
						<p className="text-xl">
							{getFormattedMessage({ id: 'game.congratulations', defaultMessage: 'Congratulations' })}
						</p>
						<p className="text-xl">
							{getFormattedMessage({ id: 'game.youWon', defaultMessage: 'You won!! 🎊' })}
						</p>
					</div>
				</div>
			)}

			{hasCollided && (
				<div className="pointer-events-none absolute flex h-full w-full items-center justify-center text-slate-300">
					<div className="flex w-full flex-col items-center gap-4 bg-dark-bg bg-opacity-50 p-8">
						<p className="text-xl">
							{getFormattedMessage({ id: 'game.gameOver', defaultMessage: 'Game over' })}
						</p>
						<p className="text-sm">
							{getFormattedMessage({ id: 'game.score', defaultMessage: 'score: ' })}
							{numOfFoodEaten}
						</p>
					</div>
				</div>
			)}

			{!isGameLive && (
				<div className="pointer-events-none absolute flex h-full w-full items-end justify-center">
					<button
						className="pointer-events-auto mb-10 rounded-lg border border-gray-950/50 bg-br-active px-4 py-1 font-fira_regular text-sm"
						onClick={handleStartGame}
					>
						start-game
					</button>
				</div>
			)}
		</div>
	);
};

export default SnakePlayArea;
