import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { routes } from './route.config'

const App = (): JSX.Element => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        {routes.map(({ key, path, component: Component }) => (
          <Route key={key} path={path} element={<Component />} />
        ))}
      </Routes>
    </Suspense>
  )
}

export default App
