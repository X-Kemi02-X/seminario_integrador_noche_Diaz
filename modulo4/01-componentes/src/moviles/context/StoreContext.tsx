import { createContext, useContext, useReducer, ReactNode } from 'react'

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
}

interface StoreState {
  user: { name: string; role: string } | null
  cart: CartItem[]
  theme: 'light' | 'dark'
}

type StoreAction =
  | { type: 'LOGIN'; payload: { name: string; role: string } }
  | { type: 'LOGOUT' }
  | { type: 'ADD_TO_CART'; payload: CartItem }
  | { type: 'REMOVE_FROM_CART'; payload: number }
  | { type: 'TOGGLE_THEME' }

const initialState: StoreState = {
  user: null,
  cart: [],
  theme: 'light',
}

function storeReducer(state: StoreState, action: StoreAction): StoreState {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload }
    case 'LOGOUT':
      return { ...state, user: null }
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] }
    case 'REMOVE_FROM_CART':
      return { ...state, cart: state.cart.filter(i => i.id !== action.payload) }
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' }
    default:
      return state
  }
}

const StoreContext = createContext<{
  state: StoreState
  dispatch: React.Dispatch<StoreAction>
}>({ state: initialState, dispatch: () => {} })

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(storeReducer, initialState)
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}

export function useStore() {
  return useContext(StoreContext)
}
