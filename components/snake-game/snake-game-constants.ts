import { SnakeCell } from './snake-game-types';

export const CELL_SIZE = 10;

export const INITIAL_FOOD_CELL: SnakeCell = { x: -1, y: -1 };

export const TOTAL_FOODS = 10;

export const INITIAL_SNAKE_SPEED = 200;

/** Array to hold the speed values for each food eaten */
export const SPEED_INCREMENTS = [INITIAL_SNAKE_SPEED, 160, 130, 110, 100, 90, 80, 70, 60, 50];
