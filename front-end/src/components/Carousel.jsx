import  { useEffect, useRef } from 'react'
import styled from 'styled-components'

import SponsoredCard from 'src/components/SponsoredCard'
import CoffeePhoto from 'assets/78626a06800a404b376fb78f515b1499a7ea0a29.png'
import Background from 'assets/996b1d78-b83e-4df0-9d5b-5ebbd2817a4c.png'

import CoffeeBag from 'assets/coffeebag.png'
import CoffeeCup from 'assets/flat.png'

const CarouselWrapper = styled.div`
    .flickity-viewport {
        border-radius: 12px;
    }
    .carousel-cell {
        width: 60%;
        margin-right: 10px;
        background: #f3f3f3;
        border-radius: 10px;
        text-align: center;
        padding: 20px;
    }
`

const Carousel = () => {
    const flickityRef = useRef(null)

    useEffect(() => {
        const script = document.createElement('script')
        script.src =
            'https://cdnjs.cloudflare.com/ajax/libs/flickity/2.3.0/flickity.pkgd.min.js'
        script.async = true
        script.onload = () => {
            if (window.Flickity) {
                new window.Flickity(flickityRef.current, {
                    wrapAround: true,
                    autoPlay: 3000,
                    pageDots: false
                })
            }
        }
        document.body.appendChild(script)
    }, [])

    return (
        <CarouselWrapper>
            <div className="gallery" ref={flickityRef}>
                <SponsoredCard
                    bgColor="#ba2d0b" // Background color of the card
                    rightRoundImage={Background} // Custom right-round image
                    showRightRound={true} // Toggle right-round image visibility
                    showEllipse={false}
                    cardImage={CoffeePhoto} // Custom card image
                    title="Custom Title Here" // Custom title
                    description="This is a dynamically set description for the sponsored card." // Custom description
                    showCupBag={false}
                />
                <SponsoredCard
                    bgColor="#385338" // Background color of the card
                    showRightRound={false} // Toggle right-round image visibility
                    cardimg={false}
                    title="Custom Title Here" // Custom title
                    description="This is a dynamically set description for the sponsored card." // Custom description
                    showCupBag={true}
                    cupBagProps={{
                        bagImage: CoffeeBag, // Corrected
                        cupImage: CoffeeCup, // Corrected
                        width: '250px',
                        height: '400px',
                        bagWidth: '104px',
                        bagHeight: ' 204px',
                        cupWidth: '88px',
                        cupHeight: '88px',
                        cupTop: '90px',
                        cupLeft: '90px'
                    }}
                />

                <SponsoredCard
                    bgColor="#ba2d0b" // Background color of the card
                    rightRoundImage={Background} // Custom right-round image
                    showRightRound={true} // Toggle right-round image visibility
                    showEllipse={false}
                    cardImage={CoffeePhoto} // Custom card image
                    title="Custom Title Here" // Custom title
                    description="This is a dynamically set description for the sponsored card." // Custom description
                    showCupBag={false}
                />

                <SponsoredCard
                    bgColor="#385338" // Background color of the card
                    showRightRound={false} // Toggle right-round image visibility
                    cardimg={false}
                    title="Custom Title Here" // Custom title
                    description="This is a dynamically set description for the sponsored card." // Custom description
                    showCupBag={true}
                    cupBagProps={{
                        bagImage: CoffeeBag, // Corrected
                        cupImage: CoffeeCup, // Corrected
                        width: '250px',
                        height: '400px',
                        bagWidth: '104px',
                        bagHeight: ' 204px',
                        cupWidth: '88px',
                        cupHeight: '88px',
                        cupTop: '90px',
                        cupLeft: '90px'
                    }}
                />
            </div>
        </CarouselWrapper>
    )
}

export default Carousel
