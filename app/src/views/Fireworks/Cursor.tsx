import * as React from 'react'
import { useMousePosition } from 'react-browser-hooks'

interface CursorProps {
	cursor: string
}

export const Cursor = ({ cursor }: CursorProps) => {
	const { x, y } = useMousePosition()

	const cursorStyle = {
		position: 'absolute' as 'absolute',
		zIndex: 100,
		opacity: x > 0 && y > 0 ? 1 : 0,
		pointerEvents: 'none' as 'none',
		top: `calc(${y}px - 0.5em)`,
		left: `calc(${x}px - 0.5em)`,
	}

	return <span style={cursorStyle}>{cursor}</span>
}
