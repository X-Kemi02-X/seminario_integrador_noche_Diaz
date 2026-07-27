import { useState } from 'react'
import { useAuth } from './context/AuthContext'
import WelcomeBanner from './components/WelcomeBanner'
import UserGreeting from './components/UserGreeting'
import DigitalCounter from './useState/DigitalCounter'
import UserProfileForm from './useState/UserProfileForm'
import TaskManager from './useState/TaskManager'
import DocumentTitle from './useEffect/DocumentTitle'
import FetchUser from './useEffect/FetchUser'
import AutoFocusForm from './useRef/AutoFocusForm'
import InlineEditor from './useRef/InlineEditor'
import BasicCounter from './useReducer/BasicCounter'
import RegistrationForm from './useReducer/RegistrationForm'
import ThemeToggle from './UseContext/ThemeToggle'
import LoginForm from './UseContext/LoginForm'
import AppHeader from './UseContext/AppHeader'
import UserBadge from './UseContext/UserBadge'
import FilteredCatalog from './useMemo/FilteredCatalog'
import PrimeSieve from './useMemo/PrimeSieve'
import OrderMetrics from './useMemo/OrderMetrics'
import MultiTagFilter from './useMemo/MultiTagFilter'
import ThemeSelector from './hooks/ThemeSelector'
import StockCounter from './moviles/useState/StockCounter'
import PhoneForm from './moviles/useState/PhoneForm'
import OrderManager from './moviles/useState/OrderManager'
import StoreTitle from './moviles/useEffect/StoreTitle'
import PhoneList from './moviles/useEffect/PhoneList'
import SearchPhone from './moviles/useRef/SearchPhone'
import PriceEditor from './moviles/useRef/PriceEditor'
import CartCounter from './moviles/useReducer/CartCounter'
import CheckoutForm from './moviles/useReducer/CheckoutForm'
import StoreThemeToggle from './moviles/useContext/StoreThemeToggle'
import StoreLoginForm from './moviles/useContext/StoreLoginForm'
import StoreHeader from './moviles/useContext/StoreHeader'
import PhoneBadge from './moviles/useContext/PhoneBadge'
import PhoneFilter from './moviles/useMemo/PhoneFilter'
import PriceRange from './moviles/useMemo/PriceRange'
import SalesMetrics from './moviles/useMemo/SalesMetrics'
import MultiTagPhone from './moviles/useMemo/MultiTagPhone'

const options = [
  { value: 1,  label: '1  WelcomeBanner' },
  { value: 2,  label: '2  UserGreeting' },
  { value: 20, label: '20 DigitalCounter (useState)' },
  { value: 21, label: '21 UserProfileForm (useState)' },
  { value: 22, label: '22 TaskManager (useState)' },
  { value: 30, label: '30 DocumentTitle (useEffect)' },
  { value: 31, label: '31 FetchUser (useEffect)' },
  { value: 32, label: '32 AutoFocusForm (useRef)' },
  { value: 33, label: '33 InlineEditor (useRef)' },
  { value: 50, label: '50 BasicCounter (useReducer)' },
  { value: 51, label: '51 RegistrationForm (useReducer)' },
  { value: 60, label: '60 ThemeToggle (useContext)' },
  { value: 61, label: '61 UserBadge (useContext)' },
  { value: 62, label: '62 LoginForm (useContext)' },
  { value: 63, label: '63 AppHeader (useContext)' },
  { value: 64, label: '64 PrimeSieve (useMemo)' },
  { value: 65, label: '65 FilteredCatalog (useMemo)' },
  { value: 66, label: '66 OrderMetrics (useMemo)' },
  { value: 67, label: '67 MultiTagFilter (useMemo)' },
  { value: 71, label: '71 ThemeSelector (hooks)' },
  { value: 80, label: '80 StockCounter (useState) - MÓVILES' },
  { value: 81, label: '81 PhoneForm (useState) - MÓVILES' },
  { value: 82, label: '82 OrderManager (useState) - MÓVILES' },
  { value: 83, label: '83 StoreTitle (useEffect) - MÓVILES' },
  { value: 84, label: '84 PhoneList (useEffect) - MÓVILES' },
  { value: 85, label: '85 SearchPhone (useRef) - MÓVILES' },
  { value: 86, label: '86 PriceEditor (useRef) - MÓVILES' },
  { value: 87, label: '87 CartCounter (useReducer) - MÓVILES' },
  { value: 88, label: '88 CheckoutForm (useReducer) - MÓVILES' },
  { value: 89, label: '89 StoreThemeToggle (useContext) - MÓVILES' },
  { value: 90, label: '90 StoreLoginForm (useContext) - MÓVILES' },
  { value: 91, label: '91 StoreHeader (useContext) - MÓVILES' },
  { value: 92, label: '92 PhoneBadge (useContext) - MÓVILES' },
  { value: 93, label: '93 PhoneFilter (useMemo) - MÓVILES' },
  { value: 94, label: '94 PriceRange (useMemo) - MÓVILES' },
  { value: 95, label: '95 SalesMetrics (useMemo) - MÓVILES' },
  { value: 96, label: '96 MultiTagPhone (useMemo) - MÓVILES' },
]

const selectStyle = {
  width: '100%',
  padding: 10,
  borderRadius: 6,
  border: '1px solid #ccc',
  fontSize: 14,
  marginBottom: 24,
  background: '#f9f9f9',
}

export default function App() { 
  const [paso, setPaso] = useState(80)
  const { state } = useAuth()

  const content =
    paso ===  1 ? <WelcomeBanner /> : 
    paso ===  2 ? <UserGreeting name="Ana García" occupation="Desarrolladora Frontend" /> :

    paso === 20 ? <DigitalCounter initialValue={2} label="Cantidad de servidores:" step={1} /> :
    paso === 21 ? <UserProfileForm /> :
    paso === 22 ? <TaskManager /> :
    paso === 30 ? <DocumentTitle /> :
    paso === 31 ? <FetchUser /> :
    paso === 32 ? <AutoFocusForm /> :
    paso === 33 ? <InlineEditor /> :

    paso === 50 ? <BasicCounter /> :
    paso === 51 ? <RegistrationForm /> :

    paso === 60 ? <ThemeToggle /> :
    paso === 61 ? <UserBadge /> :
    paso === 62 ? <LoginForm /> :
    paso === 63 ? <AppHeader /> :
    paso === 64 ? <PrimeSieve /> :
    paso === 65 ? <FilteredCatalog /> :
    paso === 66 ? <OrderMetrics /> :
    paso === 67 ? <MultiTagFilter /> :
    paso === 71 ? <ThemeSelector /> :

    paso === 80 ? <StockCounter /> :
    paso === 81 ? <PhoneForm /> :
    paso === 82 ? <OrderManager /> :
    paso === 83 ? <StoreTitle /> :
    paso === 84 ? <PhoneList /> :
    paso === 85 ? <SearchPhone /> :
    paso === 86 ? <PriceEditor /> :
    paso === 87 ? <CartCounter /> :
    paso === 88 ? <CheckoutForm /> :
    paso === 89 ? <StoreThemeToggle /> :
    paso === 90 ? <StoreLoginForm /> :
    paso === 91 ? <StoreHeader /> :
    paso === 92 ? (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <PhoneBadge name="Galaxy S25" price={1200} category="smartphone" inStock={true} />
        <PhoneBadge name="iPhone 16" price={1299} category="smartphone" inStock={false} />
        <PhoneBadge name="Funda Silicona" price={25} category="accesorio" inStock={true} />
      </div>
    ) :
    paso === 93 ? <PhoneFilter /> :
    paso === 94 ? <PriceRange /> :
    paso === 95 ? <SalesMetrics /> :
    paso === 96 ? <MultiTagPhone /> :

    <p style={{ color: '#e00' }}>Paso {paso}: componente no implementado</p>

  return (
    <main style={{ maxWidth: 600, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      <select value={paso} onChange={e => setPaso(Number(e.target.value))} style={selectStyle}>
        {options.map(o => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
      {paso === 63 ? content : (
        <>
          {state.user && (
            <p style={{ marginBottom: 16, fontSize: 14, color: '#6b7280' }}>
              Sesión activa: <strong>{state.user.name}</strong>
            </p>
          )}
          {content}
        </>
      )}
    </main>
  )
}
