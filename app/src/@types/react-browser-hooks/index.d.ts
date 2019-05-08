declare module 'react-browser-hooks' {
	interface MousePosition {
		x: number
		y: number
	}

	export function useMousePosition(): MousePosition

	interface MediaControls {
		play: () => void
		pause: () => void
		paused: boolean
	}
	export function useMediaControls(player: null | React.MutableRefObject<any>): MediaControls
}
