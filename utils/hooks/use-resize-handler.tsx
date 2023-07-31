import { MutableRefObject, useEffect, useState } from 'react';

/**
 * Hook to return the height and width of the give ref element on window resize
 */
export const useWindowResizeHandler = (
	ref: MutableRefObject<HTMLElement | null>
) => {
	const [dimension, setDimension] = useState<{
		width: number;
		height: number;
	}>({ width: 0, height: 0 });

	useEffect(() => {
		if (!ref.current) return;
		const element = ref.current;
		const { width, height } = ref.current.getBoundingClientRect();
		setDimension({ width, height });
		const handleResize = () => {
			// Reset height and width
			element.style.width = '100%';
			element.style.height = '100%';
			const { width, height } = element.getBoundingClientRect();
			setDimension({ width, height });
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [ref]);

	return dimension;
};
