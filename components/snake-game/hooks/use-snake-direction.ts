import { useCallback, useEffect, useMemo } from 'react';
import { SnakeDirection } from '../snake-game-types';

const useSnakeDirection = (isGameLive: boolean = false) => {
	// Making the direction a stack so that quick key events are clearly recorded and the snake changes direction accordingly
	const direction: SnakeDirection[] = useMemo(() => ['up'], []);

	const handleKeyDown = useCallback(
		(event: KeyboardEvent) => {
			switch (event.key) {
				case 'ArrowUp':
					if (direction[0] !== 'down') direction.push('up');
					break;
				case 'ArrowDown':
					if (direction[0] !== 'up') direction.push('down');
					break;
				case 'ArrowLeft':
					if (direction[0] !== 'right') direction.push('left');
					break;
				case 'ArrowRight':
					if (direction[0] !== 'left') direction.push('right');
					break;
			}
		},
		[direction]
	);

	const getDirection = (): SnakeDirection => {
		return direction.length > 1 ? direction.splice(0, 1)[0] : direction[0];
	};

	const resetDirection = () => {
		direction.splice(0, direction.length, 'up');
	};

	/** Manages the keyboard events */
	useEffect(() => {
		if (isGameLive) {
			// Add event listener for arrow keys when the game is live
			window.addEventListener('keydown', handleKeyDown);
		} else {
			// Remove event listener when the game is not live
			window.removeEventListener('keydown', handleKeyDown);
		}

		// Cleanup the event listener on component unmount
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [handleKeyDown, isGameLive]);

	return { getDirection, resetDirection };
};

export default useSnakeDirection;
