import { css } from '@emotion/react';

interface BaseFlexProps {
	children: React.ReactNode | React.ReactNode[];
	className?: string;
	flex?: number;
}

interface FlexContainerProps extends BaseFlexProps {
	flexDirection?: 'row' | 'column';
	justifyContent?:
		| 'flex-start'
		| 'flex-end'
		| 'center'
		| 'space-between'
		| 'space-evenly';
	alignItems?: 'flex-start' | 'flex-end' | 'center';
	flexWrap?: 'wrap' | 'nowrap';
}

interface FlexChildProps extends BaseFlexProps {
	alignSelf?: 'flex-start' | 'flex-end' | 'center';
	justifySelf?: 'flex-start' | 'flex-end' | 'center';
}

const FlexBox: React.FC<FlexContainerProps | FlexChildProps> = (props) => {
	const { children, className, flex = 1 } = props;
	const {
		flexDirection,
		justifyContent,
		alignItems,
		flexWrap = 'wrap',
	} = props as FlexContainerProps;
	const { alignSelf, justifySelf } = props as FlexChildProps;
	return (
		<div
			className={className}
			css={css`
				display: flex;
				flex: ${flex};
				flex-direction: ${flexDirection};
				justify-content: ${justifyContent};
				align-items: ${alignItems};
				flex-wrap: ${flexWrap};
				align-self: ${alignSelf};
				justify-self: ${justifySelf};
			`}
		>
			{children}
		</div>
	);
};

export default FlexBox;
