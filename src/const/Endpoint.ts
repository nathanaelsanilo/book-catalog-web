export const Endpoint = {
  ME: '/user/me',
  SIGNUP: '/auth/signup',
  SIGNIN: '/auth/signin',
  AUTHOR_CREATE: '/author',
  AUTHOR_LIST: '/author',
  AUTHOR_DETAIL: (secureId: string) => `/author/${secureId}`,
  AUTHOR_UPDATE: (secureId: string) => `/author/${secureId}`,
  AUTHOR_DELETE: (secureId: string) => `/author/${secureId}`,
} as const;
