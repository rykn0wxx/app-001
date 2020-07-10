const containerFluid = () => ({ addUtilities }) => {
  addUtilities({
    '.container-fluid': {
      width: '100%',
      'padding-right': '1rem',
      'padding-left': '1rem',
      'margin-right': 'auto',
      'margin-left': 'auto'
    }
  })
}

module.exports = {
  target: 'relaxed',
  purge: {
    mode: 'all',
    content: ['./public/**/*.html']
  },
  theme: {
    extend: {
      letterSpacing: {
        extended: '0.01em'
      }
    },
    colors: {
      trans: 'transparent',
      current: 'currentColor',
      black: '#16181a',
      teal: '#3EB6A6',
      blue: '#004a77',
      green: '#88a550',
      grey: '#a3a599',
      orange: '#ff8d3f',
      purple: '#8859b6',
      red: '#f34a4a',
      cyan: '#336e7b',
      white: '#FAFBFC',
      yellow: '#fbcd4b',

      d0: '#11161e',
      d1: '#141921',
      d2: '#0e1219',
      d3: '#0b0f15',
      d4: '#F4F5F7',

      s0: '#18191A',
      s1: '#262f34',
      s2: '#1e1e20',
      s3: '#2D3033',

      f0: '#FAFBFC',
      f1: '#d4e3ef',
      f2: '#c7d5e2',
      f3: '#20232a',

      dark: '#1E1E20',
      darker: '#1A1A1C',

      active: theme => theme('colors.blue'),
      secondary: theme => theme('colors.teal'),
      desc: theme => theme('colors.f2'),
      error: theme => theme('colors.red'),
      norm: theme => theme('colors.f3'),
      info: theme => theme('colors.cyan'),
      success: theme => theme('colors.green'),
      warn: theme => theme('colors.orange')
    },
    spacing: {
      inh: 'inherit',
      px: '1px',
      0: '0',
      1: '0.2rem',
      2: '0.4rem',
      3: '0.6rem',
      4: '0.8rem',
      5: '1.0rem',
      6: '1.2rem',
      7: '1.4rem',
      8: '1.6rem',
      9: '1.8rem',
      10: '2.0rem',
      11: '2.2rem',
      12: '2.4rem',
      13: '2.6rem',
      14: '2.8rem',
      15: '3.0rem',
      16: '3.2rem',
      17: '3.4rem',
      18: '3.6rem',
      19: '3.8rem',
      20: '4.0rem',
      25: '5.0rem',
      30: '6.0rem',
      35: '7.0rem',
      40: '8.0rem',
      45: '9.0rem',
      50: '10.0rem'
    },
    flex: {
      1: '1',
      auto: '1 1 auto',
      initial: '0 1 auto',
      grow: '1 1 100%',
      nogrow: '0 1 auto',
      none: '0 0 auto',
      noshrink: '1 0 auto'
    },
    fontFamily: {
      sans: ['Roboto', 'Open Sans', 'Ubuntu', 'Arial', 'sans-serif']
    },
    minHeight: theme => ({
      auto: 'auto',
      0: '0',
      ...theme('spacing'),
      full: '100%',
      screen: '100vh'
    }),
    maxHeight: theme => ({
      auto: 'auto',
      0: '0',
      ...theme('spacing'),
      full: '100%',
      screen: '100vh'
    }),
    minWidth: theme => ({
      auto: 'auto',
      0: '0',
      ...theme('spacing'),
      33: '33%',
      66: '66%',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%'
    }),
    container: {
      center: true,
      padding: {
        default: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem'
      }
    },
    screens: {
      'lt-xs': { min: 0, max: '639px' },
      xs: { max: '639px' },
      'gt-xs': { min: '640px' },
      sm: { min: '640px', max: '767px' },
      'gt-sm': { min: '768px' },
      md: { min: '768px', max: '959px' },
      'gt-md': { min: '960px' },
      lg: { min: '960px', max: '1023px' },
      xl: { min: '1024px' }
    },
    fontSize: {
      inherit: 'inherit',
      sm: '0.875rem',
      base: '1rem',
      reg: '1.4rem',
      md: '1.6rem',
      lg: '2.0rem'
    },
    fontWeight: {
      inherit: 'inherit',
      light: '300',
      norm: '400',
      med: '500',
      semi: '600',
      bold: '700',
      blk: '900'
    },
    borderRadius: {
      none: 0,
      default: '0.3rem',
      sm: '0.2rem',
      md: '0.5rem',
      lg: '1rem',
      round: '50%'
    },
    zIndex: {
      2: '2',
      3: '3',
      20: '20',
      50: '50',
      65: '65',
      70: '70',
      80: '80',
      90: '90',
      100: '100',
      105: '105'
    },
    boxShadow: {
      neo: '-2px -2px 6px 0 rgba(255,255,255,0.1), 2px 2px 6px 0 rgba(0,0,0,0.8)',
      'neo-hov': '-2px -2px 6px 0 rgba(255,255,255,0.1), 2px 2px 6px 0 rgba(0,0,0,0.8), inset -2px -2px 6px 0 rgba(255,255,255,0.1), inset 2px 2px 6px 0 rgba(0,0,0,0.8)',
      'neo-inset': 'inset -2px -2px 6px 0 rgba(255,255,255,0.1), inset 2px 2px 6px 0 rgba(0,0,0,0.8)',
      nav: '0 0 1px 1px rgba(0, 0, 0, 0.14), 0 0 2px 2px rgba(0, 0, 0, 0.098), 0 0 5px 1px rgba(0, 0, 0, 0.084), 0 2px 4px rgba(0, 0, 0, 0.5)',
      xs: '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
      sm: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
      default: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
      md: '0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)',
      lg: '0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12)',
      xl: '0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12)'
    },
    opacity: {
      10: '0.1',
      50: '0.5',
      70: '0.7',
      90: '0.9'
    },
    lineHeight: {
      none: 1,
      tight: '1.25',
      norm: '1.5',
      relax: '1.75',
      loose: 2
    }
  },
  variants: {},
  corePlugins: {
    skew: false,
    gridRowEnd: false,
    gridRowStart: false,
    gridRow: false,
    gridTemplateRows: false,
    gridColumnEnd: false,
    gridColumnStart: false,
    gridColumn: false,
    gridTemplateColumns: false,
    borderOpacity: false,
    divideColor: false,
    divideOpacity: false,
    divideWidth: false,
    flexGrow: false,
    flexShrink: false,
    listStyleType: false
  },
  plugins: [containerFluid()]
}
