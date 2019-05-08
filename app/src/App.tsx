import React from 'react'
import { GunProvider } from './providers/Gun'
import { Fireworks } from './views/Fireworks'
import { Countdown } from './views/Countdown'
import { Wrapper } from './styled'
import { parse, differenceInSeconds } from 'date-fns'

import './index.css'

const { useState, useEffect } = React

const startTime = parse('2019-05-08T22:00:00-04:00')

const getTimeLeft = (): number => {
	const now = new Date()
	return Math.max(differenceInSeconds(startTime, now), 0)
}

const Main: React.FC = () => {
	const [timeLeft, setTimeLeft] = useState(getTimeLeft())

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setTimeLeft(getTimeLeft())
		}, 1000)
		return () => clearTimeout(timeoutId)
	}, [timeLeft])

	return (
		<Wrapper>
			{timeLeft === 0 && <Fireworks />}
			<Countdown timeLeft={timeLeft} />
		</Wrapper>
	)
}

const App = () => (
	<GunProvider>
		<Main />
	</GunProvider>
)
export default App
