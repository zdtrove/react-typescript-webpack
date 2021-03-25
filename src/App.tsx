import './styles.css'
import IMAGE from './react.png'
import LOGO from './logo.svg'

export const App = () => {
    return <>
        <h1>React Typescript Webpack - {process.env.NODE_ENV} - {process.env.name}</h1>
        <img src={IMAGE} alt="React logo" width="300" />
        <img src={LOGO} alt="React logo" width="300" />
    </>
}