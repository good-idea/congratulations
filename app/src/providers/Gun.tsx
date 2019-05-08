import * as React from 'react'
import Gun from 'gun/gun'

export interface Action {
	x: number
	y: number
	emoji: string
	timestamp: number
}

interface GunContextValue {
	actions: Action[]
	sendAction: (data: any) => void
}

const GunContext = React.createContext<GunContextValue | undefined>(undefined)

export const GunConsumer = GunContext.Consumer

export const useGun = () => {
	const ctx = React.useContext(GunContext)
	if (!ctx) throw new Error('useGunContext must be used within a GunProvider')
	return ctx
}

interface Props {
	children: React.ReactNode
}

interface State {
	actions: Action[]
	initialized: boolean
}

interface AppState {
	actions: Action[]
}

export class GunProvider extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props)
		const gunClient = Gun<AppState>('https://congratulations-gun-server.now.sh/gun')
		this.gun = gunClient.get('actions')
	}

	state = {
		actions: [],
		initialized: false,
	}

	gun: any

	componentWillMount() {
		this.gun.on(this.updateActions)
	}

	updateActions = (data: any) => {
		if (!this.state.initialized) {
			this.setState({ initialized: true })
		} else {
			const { x, y, timestamp, emoji } = data
			const newAction = { x, y, timestamp, emoji }
			this.setState((prevState) => ({
				actions: [...prevState.actions, newAction],
			}))
		}
	}

	sendAction = (data: Action) => {
		this.gun.put(data)
	}

	render() {
		const value = {
			actions: this.state.actions,
			sendAction: this.sendAction,
		}

		return <GunContext.Provider value={value}>{this.props.children}</GunContext.Provider>
	}
}
