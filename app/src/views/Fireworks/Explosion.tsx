import * as React from 'react'
import { useMediaControls } from 'react-browser-hooks'
import { Action } from '../../providers/Gun'
import { Flare } from './Flare'

const { useEffect, useRef } = React
interface ExplosionProps {
	action: Action
}

export const Explosion = ({ action }: ExplosionProps) => {
	const player = useRef(null)
	const { play } = useMediaControls(player)
	const audioSrc = `/audio/fireworks${(action.timestamp % 5) + 1}.mp3`
	useEffect(() => {
		if (player && play) play()
	}, [player, play])

	const { x, y, emoji } = action
	const wrapperStyles = {
		position: 'absolute' as 'absolute',
		left: `${x}%`,
		top: `${y}%`,
	}
	return (
		<div style={wrapperStyles}>
			<Flare>{emoji}</Flare>
			<Flare>{emoji}</Flare>
			<Flare>{emoji}</Flare>
			<Flare>{emoji}</Flare>
			<Flare>{emoji}</Flare>
			<Flare>{emoji}</Flare>
			<Flare>{emoji}</Flare>
			<Flare>{emoji}</Flare>
			<Flare>{emoji}</Flare>
			<audio ref={player} src={audioSrc} />
		</div>
	)
}
