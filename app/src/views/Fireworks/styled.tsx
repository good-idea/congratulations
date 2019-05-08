import * as React from 'react'
import styled, { css, keyframes } from 'styled-components'

const fadeIn = keyframes`
	0% { opacity: 0 };
	100% { opacity: 1 };
`

interface LayerProps {
	duration?: string
	delay?: string
}

const Layer = styled.div`
	${({ duration, delay }: LayerProps) => css`
		position: absolute;
		pointer-events: none;
		z-index: 0;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		opacity: 0;
		animation: ${fadeIn} ${duration || '8s'};
		animation-delay: ${delay || '0s'};
		animation-iteration-count: 1;
		animation-fill-mode: forwards;
	`}
`

const Darken = styled(Layer)`
	background-color: #281938;
`

const Sunset = styled(Layer)`
	background: linear-gradient(#d28a06, #c70000 20%, transparent 70%);
`

const SkyWrapper = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	font-size: 25px;
`

interface Props {
	children: React.ReactNode
}

export const Sky = ({ children }: Props) => (
	<SkyWrapper>
		<Darken />
		<Sunset delay="3s" />
		{children}
	</SkyWrapper>
)

export const ClickableSky = styled.button`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 10;
	border: none;
	margin: 0;
	padding: 0;
	overflow: visible;
	cursor: none;

	background: transparent;

	/* inherit font & color from ancestor */
	color: inherit;
	font: inherit;

	line-height: normal;

	/* Corrects font smoothing for webkit */
	-webkit-font-smoothing: inherit;
	-moz-osx-font-smoothing: inherit;

	-webkit-appearance: none;
`

export const TextContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	pointer-events: none;
	opacity: 0;
	animation: ${fadeIn} 4s;
	animation-delay: 3s;
	animation-iteration-count: 1;
	animation-fill-mode: forwards;
	color: white;
`
