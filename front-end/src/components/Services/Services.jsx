
 import{OurServices,
 ComponentTitle,
 Content,

 ListOfCard,
 Card,

 CardHeader,

 Title,
 Description ,
 Button ,

 CheckOurProducts,
 Column1 ,
 Column2,
 Column3,

 TextButton6,
 ArrowImg,

 CupBagImg,

 Bag ,
 Cup } from './Services.styles'


 const Services = () => {
    return (
        <OurServices id="services">
            <ComponentTitle>#Our services</ComponentTitle>
            <Content>
                <ListOfCard>
                    <Card>
                        <CardHeader className="fi fi-rr-calendar-day" />
                        <Title>Schedule</Title>
                        <Description>
                            Planning an office party or a coffee break with
                            friends? Let us take care of everything.
                        </Description>
                        <Button>Schedule our service</Button>
                    </Card>

                    <Card>
                        <CardHeader className="fi fi-rs-shop" />
                        <Title>Stores</Title>
                        <Description>
                            Find the nearest one and come try a new experience
                            and taste for yourself.
                        </Description>
                        <Button>Find a store near you</Button>
                    </Card>

                    <Card>
                        <CardHeader className="fi fi-rs-shipping-fast" />
                        <Title>Delivery</Title>
                        <Description>
                            With our platform, we can deliver coffee straight to
                            you, no matter where you are.
                        </Description>
                        <Button>Order coffee now</Button>
                    </Card>
                </ListOfCard>

                <CheckOurProducts>
                    <Column1>
                        <CupBagImg>
                            <Bag />
                            <Cup />
                        </CupBagImg>
                    </Column1>
                    <Column2>
                        <ArrowImg />
                    </Column2>
                    <Column3>
                        Upgrade your experience Upgrade your coffee experience.
                        Try our fresh beans and taste the rich, delicious
                        flavour for yourself. You won&#39;t be disappointed.
                        <TextButton6>Try our fresh beans</TextButton6>
                    </Column3>
                </CheckOurProducts>
            </Content>
        </OurServices>
    )
}

export default Services
