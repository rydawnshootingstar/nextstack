import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';

export const textStateAtom = atom({
	key: 'textState',
	default: 'hello',
});
const enhancedTextState = selector({
	key: 'enhancedTextState',
	get: ({ get }) => {
		const text = get(textStateAtom);
		return `${text} PLUS 1 BABY`;
	},
});

export default function TextState() {
	const textStateText = useRecoilValue(textStateAtom);
	const enhancedStateText = useRecoilValue(enhancedTextState);
	return (
		<div>
			<h1>this is coming from an atom: {textStateText}</h1>
			<Tester>YO BIG BOI</Tester>
			<h2>this is selector on the atom: {enhancedStateText}</h2>
		</div>
	);
}

const Tester = styled.h1`
	background: papayawhip;
	font-size: 5em;
`;
