export const ROUTES = {
  // Public routes
  HOME: '/property',
  SIGNIN: '/',
  SIGNUP: '/signup',
  
  // Property routes
  PROPERTIES: '/property',
  PROPERTY_DETAIL: (id: string | number) => `/property/${id}`,
} as const;

export type RouteKey = keyof typeof ROUTES;
