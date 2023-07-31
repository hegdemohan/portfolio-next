import { GISTS } from '@/utils/data/gists-data';
import { Gist as GistType } from '@/utils/types';
import { CSSProperties, useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
type Props = {
	/** Code snippet to display */
	code?: string;

	/** True if the line numbers should be displayed */
	showLineNumbers?: boolean;

	/** Additional styling to customize the gist */
	style?: CSSProperties;
};
const Gist = ({ code, showLineNumbers, style }: Props) => {
	const [gist, setGist] = useState<GistType>();

	useEffect(() => {
		// Select a random gist
		setGist(GISTS[Math.floor(Math.random() * GISTS.length)]);
	}, []);

	if (!gist) return;

	return (
		<SyntaxHighlighter
			language={gist.language}
			wrapLongLines
			showLineNumbers={showLineNumbers}
			style={{
				...vscDarkPlus,
				'pre[class*="language-"]': {
					background: '#011221',
					width: '100%',
					border: `1px solid #1E2D3D`,
					borderRadius: 8,
					padding: 8,
					opacity: 0.8,
					...style,
				},
				'code[class*="language-"]': {
					fontSize: '14px',
					fontFamily: '"Fira Code", monospace',
					fontWeight: 400,
				},
				'.react-syntax-highlighter-line-number': {
					color: 'red', // Change this to the desired color for line numbers
				},
			}}
		>
			{code ?? gist.snippet}
		</SyntaxHighlighter>
	);
};

export default Gist;
