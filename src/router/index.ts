import App from '@/App';
import AppLayout from '@/layouts/AppLayout';
import AuthLayout from '@/layouts/AuthLayout';
import HomePage from '@/pages/HomePage';
import SigninPage from '@/pages/auth/SigninPage';
import SignupPage from '@/pages/auth/SignupPage';
import AuthorIndexPage from '@/pages/author/IndexPage';
import AuthorFormPage from '@/pages/author/FormPage';
import { RootRoute, Route, Router } from '@tanstack/react-router';

const rootRoute = new RootRoute({
  component: App,
});

const AppLayoutRoute = new Route({
  getParentRoute: () => rootRoute,
  id: 'app-layout',
  component: AppLayout,
});

// #region Auth routes
const AuthLayoutRoute = new Route({
  getParentRoute: () => rootRoute,
  id: 'auth-layout',
  component: AuthLayout,
});

const SignupRoute = new Route({
  getParentRoute: () => AuthLayoutRoute,
  path: 'signup',
  component: SignupPage,
});

const SigninRoute = new Route({
  getParentRoute: () => AuthLayoutRoute,
  path: 'signin',
  component: SigninPage,
});

// #endregion

// Home routes
const HomeRoute = new Route({
  getParentRoute: () => AppLayoutRoute,
  path: '/',
  component: HomePage,
});

// #region author routes

const AuthorIndexRoute = new Route({
  getParentRoute: () => AppLayoutRoute,
  path: 'author',
  component: AuthorIndexPage,
});

const AuthorFormRoute = new Route({
  getParentRoute: () => AppLayoutRoute,
  path: 'author/create',
  component: AuthorFormPage,
});

// #endregion

const routeTree = rootRoute.addChildren([
  AuthLayoutRoute.addChildren([SignupRoute, SigninRoute]),
  AppLayoutRoute.addChildren([HomeRoute, AuthorIndexRoute, AuthorFormRoute]),
]);

export const router = new Router({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
