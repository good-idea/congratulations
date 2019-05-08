import * as React from 'react'
import styled from 'styled-components'
import { addHours, getMinutes, getHours, getSeconds } from 'date-fns'

export const convertToDuration = (secondsAmount: number) => {
	const normalizeTime = (time: string): string => (time.length === 1 ? `0${time}` : time)

	const SECONDS_TO_MILLISECONDS_COEFF = 1000
	const MINUTES_IN_HOUR = 60

	const milliseconds = secondsAmount * SECONDS_TO_MILLISECONDS_COEFF

	const date = new Date(milliseconds)
	const timezoneDiff = date.getTimezoneOffset() / MINUTES_IN_HOUR
	const dateWithoutTimezoneDiff = addHours(date, timezoneDiff)

	const hours = normalizeTime(String(getHours(dateWithoutTimezoneDiff)))
	const minutes = normalizeTime(String(getMinutes(dateWithoutTimezoneDiff)))
	const seconds = normalizeTime(String(getSeconds(dateWithoutTimezoneDiff)))

	const hoursOutput = hours !== '00' ? `${hours}:` : ''

	return `${hoursOutput}${minutes}:${seconds}`
}

interface WrapperProps {
	visible: boolean
}

const Wrapper = styled.div`
	${({ visible }: WrapperProps) => `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: ${visible ? 1 : 0};
      transition: 5s;
      text-align: center;
   `}
`

interface CountdownProps {
	timeLeft: number
}

export const Countdown = ({ timeLeft }: CountdownProps) => {
	const visible = timeLeft > 4
	// const now = new Date()
	const timeLeftText = convertToDuration(timeLeft)
	return (
		<Wrapper visible={visible}>
			<h1>{timeLeftText}</h1>
		</Wrapper>
	)
}
