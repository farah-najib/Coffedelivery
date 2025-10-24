import screens from './screens'

// mediaQuery('desktop') => min-width: 1440px
// mediaQuery('largeTablet', 'max') => max-width: 768px

const mediaQuery = (key, type = 'min') => {
  const width = screens[key]
  if (!width) {
    console.warn(`Unknown breakpoint key: ${key}`)
    return () => ''
  }

  return (style) => `
    @media (${type}-width: ${width}px) {
      ${style}
    }
  `
}

export default mediaQuery
