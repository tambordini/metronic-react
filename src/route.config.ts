import React, { ComponentType, LazyExoticComponent } from 'react'

interface IRoute {
  key: string
  path: string
  component: LazyExoticComponent<ComponentType<AnyValue>>
}

export const routes: IRoute[] = [
  {
    key: 'login',
    path: '/login',
    component: React.lazy(() => import('./pages/login/Login')),
  },
]
