import * as React from 'react'
import styled, { keyframes } from 'styled-components'

const { useState, useEffect } = React

const gravity = keyframes`
   0% {
      transform: translateY(0);
   }
   85% {
      opacity: 1;
   }
   100% {
      opacity: 0;
      transform: translateY(200px);
   }
`

const Gravity = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	animation: 2.5s ${gravity} ease-in;
	animation-iteration-count: 1;
	animation-fill-mode: forwards;
`

const Explode = styled.div`
	transition: 2.5s cubic-bezier(0.04, 0.75, 0.11, 1.01);
`

interface FlareProps {
	children: React.ReactNode
}

const xWidth = 200
const yMax = 150
const rMax = 600

export const Flare = ({ children }: FlareProps) => {
	const [tx, setTx] = useState(0)
	const [ty, setTy] = useState(0)
	const [r, setR] = useState(0)

	useEffect(() => {
		setTx(Math.random() * xWidth - xWidth / 2)
		setTy(-(Math.random() * yMax))
		setR(Math.random() * rMax - rMax / 2)
	}, [])

	const explodeStyles = {
		transform: `translate(${tx}px, ${ty}px) rotate(${r}deg)`,
	}

	return (
		<Gravity>
			<Explode style={explodeStyles}>{children}</Explode>
		</Gravity>
	)
}
