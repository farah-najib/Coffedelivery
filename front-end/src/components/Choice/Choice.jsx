
import{WhereverYouAre3,ComponentTitle,Description,GridRow,StepDescription,Column1,Column2,Column3,ColdBeverageImg} from './Choice.styles'
const column1Data = [
    'Which size? Our coffees are carefully selected for quality, flavor, and social impact',
    'Try our special blends. Our coffees are carefully selected for quality, flavor, and social impact',
    'Check out our menu. Our coffees are carefully selected for quality, flavor, and social impact'
]
const column3Data = [
    'Upgrade your coffee. Our coffees are carefully selected for quality, flavor, and social impact',
    'Variety of milk. Our coffees are carefully selected for quality, flavor, and social impact',
    'Do you need more one? Our coffees are carefully selected for quality, flavor, and social impact'
]

const Choice = () => {
    return (
        <>
            <WhereverYouAre3>
                <ComponentTitle>#variety of choices</ComponentTitle>
                <Description>
                    <Column1>
                        <GridRow>
                            {column1Data.map((text, index) => (
                                <StepDescription key={index}>
                                    {text}
                                </StepDescription>
                            ))}
                        </GridRow>
                    </Column1>
                    <Column2>
                        <GridRow>
                            <ColdBeverageImg />
                        </GridRow>
                    </Column2>
                    <Column3>
                        <GridRow>
                            {column3Data.map((text, index) => (
                                <StepDescription key={index}>
                                    {text}
                                </StepDescription>
                            ))}
                        </GridRow>
                    </Column3>
                </Description>
            </WhereverYouAre3>
        </>
    )
}

export default Choice
