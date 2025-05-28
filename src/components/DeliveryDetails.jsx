
import styled from 'styled-components'

const Container = styled.div`
    position: absolute;
    //top: 50px; /* Adjust position from the top */
    //left: 50px; /* Adjust position from the left */
    width: 428px; /* Set width */
    height: 100%; /* Set height */
    font-family: Arial, sans-serif;
    padding: 20px;
    max-width: 400px;
    //margin: auto;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin: 0px 0 0 30px;
    z-index: 31;
    background:pink;
`

const Title = styled.h2`
    font-size: 24px;
    margin-bottom: 20px;
`

const Section = styled.div`
    margin-bottom: 20px;
`

const SectionTitle = styled.h3`
    font-size: 18px;
    margin-bottom: 10px;
`

const Text = styled.p`
    font-size: 14px;
    margin: 5px 0;
`

const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
`

const OrderSummary = styled.div`
    margin-top: 20px;
`

const Item = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`

const PaymentSummary = styled.div`
    margin-top: 20px;
`

const Button = styled.button`
    width: 100%;
    padding: 15px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 20px;

    &:hover {
        background-color: #45a049;
    }
`

const DeliveryDetails = () => {
    return (
        <Container>
            <Title>Delivery details</Title>

            <Section>
                <SectionTitle>Address</SectionTitle>
                <Text>
                    Chamberlain Avenue, 360, Winnipeg, MB, Canada, R2W OK3
                </Text>
            </Section>

            <Section>
                <SectionTitle>Estimated time</SectionTitle>
                <Text>10 minutes - 20 minutes</Text>
            </Section>

            <Section>
                <SectionTitle>Instructions</SectionTitle>
                <Input
                    type="text"
                    placeholder="Add an instruction for your delivery"
                />
            </Section>

            <OrderSummary>
                <SectionTitle>Order summary</SectionTitle>
                <Item>
                    <Text>1x Traditional Coffee</Text>
                    <Text>$17.59</Text>
                </Item>
                <Item>
                    <Text>Size: Medium</Text>
                </Item>
                <Item>
                    <Text>Roasting: medium</Text>
                </Item>
            </OrderSummary>

            <PaymentSummary>
                <SectionTitle>Payment summary</SectionTitle>
                <Item>
                    <Text>Product Subtotal</Text>
                    <Text>$17.59</Text>
                </Item>
                <Item>
                    <Text>Delivery Fee</Text>
                    <Text>$17.59</Text>
                </Item>
                <Item>
                    <Text>Total (CAD)</Text>
                    <Text>$40.94</Text>
                </Item>
            </PaymentSummary>

            <Button>Place order</Button>
        </Container>
    )
}

export default DeliveryDetails
