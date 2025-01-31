import styled from 'styled-components'

const CupBagImg = styled.div`
    // position: relative;
    width: ${({ width }) => width || '243px'};
    height: ${({ height }) => height || '388px'};
 

`

const Bag = styled.div`
    position: absolute;
    width: ${({ bagWidth }) => bagWidth || '198px'};
    height: ${({ bagHeight }) => bagHeight || '388px'};
    top: 0;
    left: 0;
    background: url(${({ bagImage }) => bagImage}) no-repeat center;
    background-size: cover;
`

const Cup = styled.div`
    position: absolute;
    width: ${({ cupWidth }) => cupWidth || '172px'};
    height: ${({ cupHeight }) => cupHeight || '261px'};
    top: ${({ cupTop }) => cupTop || '93px'};
    left: ${({ cupLeft }) => cupLeft || '117px'};
    background: url(${({ cupImage }) => cupImage}) no-repeat center;
    background-size: cover;
`

const CupBagComponent = ({
    bagImage,
    cupImage,
    width,
    height,
    bagWidth,
    bagHeight,
    cupWidth,
    cupHeight,
    cupTop,
    cupLeft
}) => {
    return (
        <CupBagImg width={width} height={height}>
            <Bag
                bagImage={bagImage}
                bagWidth={bagWidth}
                bagHeight={bagHeight}
            />
            <Cup
                cupImage={cupImage}
                cupWidth={cupWidth}
                cupHeight={cupHeight}
                cupTop={cupTop}
                cupLeft={cupLeft}
            />
        </CupBagImg>
    )
}

export default CupBagComponent
