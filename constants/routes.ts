export const ROUTES = {
    ONBOARDING: 'onboarding',
    MENU: 'menu',
    RESERVATION: 'reservation',
    POINTS: 'points',
    PROFILE: 'profile'
} as const

export type RoutesType = typeof ROUTES[keyof typeof ROUTES];
