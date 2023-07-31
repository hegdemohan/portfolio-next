import { useEffect } from 'react';
/**
 * A custom hook that observes the intersection of an element with its parent and invokes a callback function.
 * @param elementRef - The reference to the element that will be observed.
 * @param callback - The callback function to be invoked when the element intersects with its parent.
 * @returns The elementRef object.
 */
const useIntersectionObserver = (
	elementRef: React.MutableRefObject<Element | null>,
	callback: () => void
) => {
	useEffect(() => {
		const handleIntersection: IntersectionObserverCallback = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					callback(); // Invoke the provided callback function
				}
			});
		};

		const observer = new IntersectionObserver(handleIntersection, {
			root: null, // Use the viewport as the root
			rootMargin: '0px', // No additional margin
			threshold: 0, // Trigger when the element is fully visible
		});

		const element = elementRef.current;

		if (element) {
			observer.observe(element);
		}

		return () => {
			if (element) {
				observer.unobserve(element);
			}
		};
	}, [callback, elementRef]);

	return elementRef;
};

export default useIntersectionObserver;
