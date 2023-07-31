import { I18nMessage } from '@/i18n/types';
import useIntersectionObserver from '@/utils/hooks/use-intersection-observer';
import {
	Fragment,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react';
import { useIntl } from 'react-intl';

type Props = {
	/** text to be shown as commented block */
	text: I18nMessage;
};

/**
 * @returns - commented styled text block
 */
const CommentedText = ({ text }: Props) => {
	const intl = useIntl();
	const textBlocks = useMemo(
		() => intl.formatMessage(text).split(/<br\/?>/),
		[intl, text]
	);

	const [lineCount, setLineCount] = useState(0);

	const commentRef = useRef<HTMLDivElement>(null);
	const textContainerRef = useRef<HTMLDivElement>(null);

	/** calculates the number of lines in the text container */
	const countLines = useCallback(() => {
		if (!textContainerRef.current || !commentRef.current) return;
		const style = window.getComputedStyle(textContainerRef.current);
		// Line height of each line inside the given text block
		const lineHeight = parseInt(style.lineHeight);

		// Overall height of the text container including margin and padding
		const maxHeight = textContainerRef.current.offsetHeight;

		// Max height / line height gives the num of lines in text-container
		setLineCount(Math.ceil(maxHeight / lineHeight) + 1);

		// Setting the line count and comment star containing div to the same height as text container beside it
		commentRef.current.style.height = style.height;
	}, []);

	// Count the number of lines whenever ref becomes visible
	useIntersectionObserver(textContainerRef, countLines);

	useEffect(() => {
		countLines();
		window.addEventListener('resize', countLines);

		return () => {
			window.removeEventListener('resize', countLines);
		};
	}, [countLines, text]);

	return (
		<div className="grid grid-cols-12 font-fira_regular text-menu-text lg:h-[calc(100%_-_3rem)] lg:overflow-auto lg:px-8 lg:py-4">
			<div className={`col-span-2 grid  w-full grid-cols-2`} ref={commentRef}>
				{(() => {
					let i = 0;
					const rows = [];
					while (++i <= lineCount) {
						rows.push(
							<Fragment key={i}>
								<div>{i}</div>
								<div
									className={`flex justify-center ${
										i === lineCount ? 'pl-2' : ''
									}`}
								>
									{i === 1 && '/**'}
									{i > 1 && i < lineCount && '*'}
									{i === lineCount && '*/'}
								</div>
							</Fragment>
						);
					}
					return rows;
				})()}
			</div>
			<div className="col-span-10 break-words">
				<div ref={textContainerRef}>
					{textBlocks.map((text, i) => (
						<p key={i}>
							{text} <br />
						</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default CommentedText;
