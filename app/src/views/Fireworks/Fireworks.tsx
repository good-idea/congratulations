import * as React from 'react'
import { useGun } from '../../providers/Gun'
import { funEmoji } from '../../utils'
import { Sky, ClickableSky, TextContainer } from './styled'
import { Cursor } from './Cursor'
import { Explosion } from './Explosion'

const { useState } = React

export const Fireworks = () => {
	const { sendAction, actions } = useGun()
	const [cursor, setCursor] = useState(funEmoji())

	const handleClick = (e: any) => {
		const x = (e.clientX / window.innerWidth) * 100
		const y = (e.clientY / window.innerHeight) * 100
		const now = new Date()
		const timestamp = now.getTime()
		sendAction({ x, y, emoji: cursor, timestamp })
		setCursor(funEmoji())
	}

	return (
		<React.Fragment>
			<Sky>
				<TextContainer>
					<h1>Congratulations!</h1>
				</TextContainer>
				<ClickableSky onClick={handleClick} />
				<Cursor cursor={cursor} />
				{actions.map((action) => (
					<Explosion key={action.timestamp} action={action} />
				))}
			</Sky>
		</React.Fragment>
	)
}
