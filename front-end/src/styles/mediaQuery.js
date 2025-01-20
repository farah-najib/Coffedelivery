import screens from './screens'

const mediaQuery = (key) => {
    return (style) => `@media (max-width: ${screens[key]}px) { ${style} }`
}

export default mediaQuery
