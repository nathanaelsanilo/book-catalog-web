export const Endpoint = {
  ME: '/user/me',
  SIGNUP: '/auth/signup',
  SIGNIN: '/auth/signin',
  AUTHOR_CREATE: '/author',
  AUTHOR_LIST: '/author',
  AUTHOR_DETAIL: (secureId: string) => `/author/${secureId}`,
  AUTHOR_UPDATE: (secureId: string) => `/author/${secureId}`,
  AUTHOR_DELETE: (secureId: string) => `/author/${secureId}`,
  CATEGORY_LIST: '/category',
  CATEGORY_CREATE: '/category',
  CATEGORY_DETAIL: (secureId: string) => `/category/${secureId}`,
} as const;
