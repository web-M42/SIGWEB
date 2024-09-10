import React, { Suspense, Fragment, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Loader from './components/Loader/Loader';
import AdminLayout from './layouts/AdminLayout';

import { BASE_URL } from './config/constant';

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<Loader />}>
    <Routes>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Element = route.element;

        return (
          <Route
            key={i}
            path={route.path}
            element={
              <Guard>
                <Layout>{route.routes ? renderRoutes(route.routes) : <Element props={true} />}</Layout>
              </Guard>
            }
          />
        );
      })}
    </Routes>
  </Suspense>
);

const routes = [
  {
    exact: 'true',
    path: '/login',
    element: lazy(() => import('./views/auth/signin/SignIn1'))
  },
  {
    exact: 'true',
    path: '/auth/signin-1',
    element: lazy(() => import('./views/auth/signin/SignIn1'))
  },
  {
    exact: 'true',
    path: '/auth/signup-1',
    element: lazy(() => import('./views/auth/signup/SignUp1'))
  },
  {
    path: '*',
    layout: AdminLayout,
    routes: [
      {
        exact: 'true',
        path: '/home',
        element: lazy(() => import('./views/dashboard'))
      },
      {
        exact: 'true',
        path: '/camadas',
        element: lazy(() => import('./views/camadas'))
      },
      {
        exact: 'true',
        path: '/imoveis',
        element: lazy(() => import('./views/imoveis'))
      },
      {
        exact: 'true',
        path: '/proprietarios',
        element: lazy(() => import('./views/proprietarios'))
      },
      {
        exact: 'true',
        path: '/noticias',
        element: lazy(() => import('./views/noticias'))
      },
      {
        exact: 'true',
        path: '/user',
        element: lazy(() => import('./views/usuarios'))
      },
    ]
  }
];

export default routes;
