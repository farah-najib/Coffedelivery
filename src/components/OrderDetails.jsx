 import styled from 'styled-components'

 const OrderDetailContainer = styled.div`
     //  max-width: 600px;
     //  margin: 0 auto;
     //  padding: 2rem;
     //  font-family: Arial, sans-serif;
     //  color: #333;

     position: absolute;
     //top: 50px; /* Adjust position from the top */
     //left: 50px; /* Adjust position from the left */
     width: 428px; /* Set width */
     height: 700px; /* Set height */
     font-family: Arial, sans-serif;
     padding: 20px;
     max-width: 400px;
     //margin: auto;
     border: 1px solid #ccc;
     border-radius: 8px;
     margin: 30px 0 0 100px;
     z-index: 31;
     background: pink;
     overflow: scroll;
 `

 const Section = styled.div`
     margin-bottom: 2rem;
     padding-bottom: 1rem;
     border-bottom: 1px solid #eee;
 `

 const FlexRow = styled.div`
     display: flex;
     justify-content: space-between;
     align-items: center;
     margin-bottom: 1rem;
 `

 const Timeline = styled.ul`
     list-style: none;
     padding-left: 1.5rem;
     border-left: 2px solid #eee;
     margin: 1rem 0;
 `

 const TimelineItem = styled.li`
     position: relative;
     margin-bottom: 1.5rem;
     padding-left: 1.5rem;

     &::before {
         content: '';
         position: absolute;
         left: -0.6rem;
         top: 0.4rem;
         width: 12px;
         height: 12px;
         border-radius: 50%;
         background-color: ${(props) => (props.confirmed ? '#4CAF50' : '#ccc')};
     }
 `

 const SubItems = styled.div`
     padding-left: 2rem;
     margin-top: 0.5rem;
 `

 const SummaryRow = styled.div`
     display: flex;
     justify-content: space-between;
     margin-bottom: 0.5rem;
 `

 const BoldText = styled.span`
     font-weight: bold;
 `

 const OrderDetails = () => {
     return (
         <OrderDetailContainer>
             <Section>
                 <FlexRow>
                     <div>15 km Distance</div>
                     <div>
                         Chamberlain Avenue, 360, Winnipeg, MB, Canada, R2W 0K3
                     </div>
                 </FlexRow>
             </Section>

             <Section>
                 <h3>Delivery details</h3>
                 <Timeline>
                     <TimelineItem confirmed>
                         <div>Waiting for transaction confirm</div>
                         <div>05:54pm</div>
                     </TimelineItem>
                     <TimelineItem confirmed>
                         <div>Transaction confirmed</div>
                         <div>05:55pm</div>
                     </TimelineItem>
                     <TimelineItem>
                         <div>Waiting for coffee shop confirmation</div>
                         <SubItems>
                             <div>Preparing your coffee</div>
                             <div>Delivering your coffee</div>
                             <div>Coffee delivered</div>
                         </SubItems>
                     </TimelineItem>
                 </Timeline>
             </Section>

             <Section>
                 <h3>Instructions</h3>
                 <p>
                     Lorem ipsum dolor sit amet consectetur. Pulvinar dictum
                     laoreet eu amet nisi vel. Sit orci nibh dictumst vitae
                     aliquet enim.
                 </p>
             </Section>

             <Section>
                 <FlexRow>
                     <h3>Estimated time</h3>
                     <div>11 min</div>
                 </FlexRow>
             </Section>

             <Section>
                 <h3>Order Summary</h3>
                 {[1, 2, 3].map((item) => (
                     <div key={item} style={{ marginBottom: '1rem' }}>
                         <SummaryRow>
                             <div>1x Traditional Coffee</div>
                             <div>$17.59</div>
                         </SummaryRow>
                         <div>Size: Medium</div>
                         <div>Roasting: medium</div>
                     </div>
                 ))}
             </Section>

             <Section>
                 <h3>Payment Summary</h3>
                 <SummaryRow>
                     <div>Paid with</div>
                     <div>Credit card</div>
                 </SummaryRow>
                 <SummaryRow>
                     <div>Product Subtotal</div>
                     <div>$17.59</div>
                 </SummaryRow>
                 <SummaryRow>
                     <div>Delivery Fee</div>
                     <div>$17.59</div>
                 </SummaryRow>
                 <SummaryRow>
                     <div>GST</div>
                     <div>$17.59</div>
                 </SummaryRow>
                 <SummaryRow>
                     <div>PST</div>
                     <div>$17.59</div>
                 </SummaryRow>
                 <SummaryRow>
                     <BoldText>Total (CAD)</BoldText>
                     <BoldText>$17.59</BoldText>
                 </SummaryRow>
             </Section>
         </OrderDetailContainer>
     )
 }

 export default OrderDetails
