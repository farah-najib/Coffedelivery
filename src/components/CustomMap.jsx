import{ useState } from 'react'
import styled from 'styled-components'
import { Map, Marker } from '@vis.gl/react-google-maps'

// Styled components
const AppContainer = styled.div`
    display: flex;
    padding: 5rem;
    justify-content: space-evenly;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`

const MapContainer = styled.div`
    // height: 500px;
    // width: 50%;
    width: 100%;
    height: 976px;

`

const CustomMap = () => {
    // Shows marker on London by default
    const [markerLocation, setMarkerLocation] = useState({
        lat: 51.509865,
        lng: -0.118092
    })

    return (

            <MapContainer>
                <Map
                    style={{ borderRadius: '20px' }}
                    defaultZoom={13}
                    defaultCenter={markerLocation}
                    gestureHandling={'greedy'}
                    disableDefaultUI
                >
                    <Marker position={markerLocation} />
                </Map>
            </MapContainer>

    )
}

export default CustomMap
