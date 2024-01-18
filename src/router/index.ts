import App from '@/App';
import AuthLayout from '@/layouts/AuthLayout';
import SigninPage from '@/pages/auth/SigninPage';
import SignupPage from '@/pages/auth/SignupPage';
import { RootRoute, Route, Router } from '@tanstack/react-router';

const rootRoute = new RootRoute({
  component: App,
});

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

const routeTree = rootRoute.addChildren([
  AuthLayoutRoute.addChildren([SignupRoute, SigninRoute]),
]);

export const router = new Router({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
