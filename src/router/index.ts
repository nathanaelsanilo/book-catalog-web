import App from '@/App';
import { StorageKey } from '@/const';
import AppLayout from '@/layouts/AppLayout';
import AuthLayout from '@/layouts/AuthLayout';
import HomePage from '@/pages/HomePage';
import SigninPage from '@/pages/auth/SigninPage';
import SignupPage from '@/pages/auth/SignupPage';
import AuthorDetailPage from '@/pages/author/DetailPage';
import AuthorFormPage from '@/pages/author/FormPage';
import AuthorIndexPage from '@/pages/author/IndexPage';
import CategoryIndexPage from '@/pages/category/IndexPage';
import CategoryFormPage from '@/pages/category/FormPage';
import { RootRoute, Route, Router, redirect } from '@tanstack/react-router';

const rootRoute = new RootRoute({
  component: App,
});

const AppLayoutRoute = new Route({
  getParentRoute: () => rootRoute,
  id: 'app-layout',
  component: AppLayout,
  beforeLoad: async () => {
    const token = localStorage.getItem(StorageKey.AccessToken);
    if (!token) {
      throw redirect({
        to: '/signin',
      });
    }
  },
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

const AuthorRoute = new Route({
  getParentRoute: () => AppLayoutRoute,
  path: 'author',
});

const AuthorIndexRoute = new Route({
  getParentRoute: () => AuthorRoute,
  path: '/',
  component: AuthorIndexPage,
});

const AuthorCreateRoute = new Route({
  getParentRoute: () => AuthorRoute,
  path: 'create',
  component: AuthorFormPage,
});

const AuthorEditRoute = new Route({
  getParentRoute: () => AuthorRoute,
  path: '$authorId/edit',
  component: AuthorFormPage,
});

const AuthorDetailRoute = new Route({
  getParentRoute: () => AuthorRoute,
  path: '$authorId',
  component: AuthorDetailPage,
});

// #endregion

// #region category routes

const CategoryRoute = new Route({
  getParentRoute: () => AppLayoutRoute,
  path: 'category',
});

const CategoryIndexRoute = new Route({
  getParentRoute: () => CategoryRoute,
  path: '/',
  component: CategoryIndexPage,
});

const CategoryCreateRoute = new Route({
  getParentRoute: () => CategoryRoute,
  path: '/create',
  component: CategoryFormPage,
});

// #endregion

const routeTree = rootRoute.addChildren([
  AuthLayoutRoute.addChildren([SignupRoute, SigninRoute]),
  AppLayoutRoute.addChildren([
    HomeRoute,
    AuthorRoute.addChildren([
      AuthorIndexRoute,
      AuthorDetailRoute,
      AuthorCreateRoute,
      AuthorEditRoute,
    ]),
    CategoryRoute.addChildren([CategoryIndexRoute, CategoryCreateRoute]),
  ]),
]);

export const router = new Router({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
