

import {
    ScheduleComponent,
    ComponentTitle,
    Container,
    LeftSection,
    Img1,
    RightSection,
    Img2,
    Hashtag,
    MiddletSection,
    Heading,
    Text,
    Button
} from './Schedule.styles'
const Schedule = () => {
    return (
        <ScheduleComponent>
            <ComponentTitle>#schedule your order</ComponentTitle>
            <Container>
                <LeftSection>
                    <Img1 />
                    <Hashtag>#Friends</Hashtag>
                </LeftSection>

                <MiddletSection>
                    <Heading>
                        Grab a cup of coffee with your buds or at the office.
                    </Heading>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur. Justo faucibus
                        fusce urna faucibus. Blandit sociis pulvinar habitasse
                        aliquam arcu massa at mi consectetur.
                    </Text>
                    <Button>Order Now and Schedule Your Delivery</Button>
                </MiddletSection>

                <RightSection>
                    <Img2 />
                    <Hashtag>#Work</Hashtag>
                </RightSection>
            </Container>
        </ScheduleComponent>
    )
}
export default Schedule
