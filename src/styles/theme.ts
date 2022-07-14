
export const theme ={
    colors: {
        primary: '#A169E9',
        white: '#fff',
        black: '#111',
        lightGray: '#ebecf0',
        gray: '#bbb',
        darkGray: '#666',
        glass: {
          regular: '#091e183a',
          dimmed: '#091e4214',
        },
      },
      rounding: {
        sm: 5,
        lg: 12,
      }
} as const

export type Theme = typeof theme;