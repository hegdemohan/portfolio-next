import { getFormattedMessage } from '@/i18n/i18n-provider';
import IconComponent, { iconTypes } from '@/utils/icons';
import Link from 'next/link';
import { HTMLProps, useCallback, useRef, useState } from 'react';
import SnakePlayArea from './snake-play-area';
import { SnakeDirection } from './snake-game-types';
import useSnakeDirection from './hooks/use-snake-direction';
import { TOTAL_FOODS } from './snake-game-constants';

const NailIcons: (keyof typeof iconTypes)[] = ['nailUpLeft', 'nailUpLeft', 'nailUpLeft', 'nailUpLeft'];

const GameButton = ({
	direction,
	iconStyle,
}: {
	direction: SnakeDirection;
	iconStyle?: HTMLProps<HTMLElement>['className'];
}) => {
	const handleButtonClick = useCallback(() => {
		// Simulate a keyboard arrow event
		const arrowEvent = new KeyboardEvent('keydown', {
			key: `Arrow${direction.charAt(0).toUpperCase() + direction.slice(1)}`,
			bubbles: true,
			cancelable: true,
		});

		// Dispatch the event on the document
		document.dispatchEvent(arrowEvent);
	}, [direction]);

	return (
		<button
			className={`flex h-8 w-full items-center justify-center rounded-md bg-dark-bg`}
			onClick={handleButtonClick}
		>
			<IconComponent name="snakeGameArrow" className={`w-3 ${iconStyle}`} />
		</button>
	);
};

const FoodCount = ({ numOfFoodEaten }: { numOfFoodEaten: number }) => {
	const foodArray = [];
	for (let index = 0; index < TOTAL_FOODS; index++) {
		foodArray.push(
			<IconComponent
				key={index}
				name="food"
				className={`w-4 ${index < numOfFoodEaten ? 'opacity-100' : 'opacity-30'}`}
			/>
		);
	}
	return <div className="grid grid-cols-5 gap-5">{foodArray}</div>;
};

const SnakeGame = () => {
	const [numOfFoodEaten, setNumOfFoodEaten] = useState(0);
	useSnakeDirection();
	return (
		<div className="relative z-20 flex h-96 max-w-3xl grow items-center gap-2 rounded-xl border border-black bg-gradient-to-b from-green to-darkGreen p-6">
			{NailIcons.map((icon, index) => (
				<IconComponent
					key={index}
					name={icon}
					className={`absolute ${index < 2 ? 'top-2' : 'bottom-2'} opacity-70 odd:left-2 even:right-2`}
				/>
			))}

			{/* Game panel */}
			<div className="h-full flex-1 grow">
				<SnakePlayArea numOfFoodEaten={numOfFoodEaten} setNumOfFoodEaten={setNumOfFoodEaten} />
			</div>
			{/* Controls and instructions panel */}
			<div className="flex h-full flex-1 grow flex-col gap-1 text-sm text-slate-300">
				<div className="rounded-xl bg-card-bg/30  p-4">
					<p>
						{getFormattedMessage({
							id: 'game.instructions.key',
							defaultMessage: '// use your keyboard',
						})}
					</p>
					<p>
						{getFormattedMessage({
							id: 'game.instructions.arrow',
							defaultMessage: '// arrows to play',
						})}
					</p>
					<div className="flex w-full flex-col items-center gap-1  p-2">
						<div className="grid w-full grid-cols-3 items-stretch gap-1">
							<span className="col-start-2">
								<GameButton direction="up" />
							</span>
						</div>
						<div className="grid w-full grid-cols-3 items-stretch gap-1">
							<GameButton direction="left" iconStyle="-rotate-90" />
							<GameButton direction="down" iconStyle="rotate-180" />
							<GameButton direction="right" iconStyle="rotate-90" />
						</div>
					</div>
				</div>
				<div className="p-4">
					<p className="mb-4">
						{getFormattedMessage({
							id: 'game.foodLeft',
							defaultMessage: '// food left',
						})}
					</p>
					<FoodCount numOfFoodEaten={numOfFoodEaten} />
				</div>
				<Link
					href={'/about'}
					className="flex  items-center justify-center self-end rounded-lg border  border-slate-300 px-4 py-2 hover:border-white hover:bg-white/20 hover:text-white"
				>
					{getFormattedMessage({ id: 'game.skip', defaultMessage: 'skip' })}
				</Link>
			</div>
		</div>
	);
};

export default SnakeGame;
