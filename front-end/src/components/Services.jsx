import Calender from '../assets/calendar.svg'
import Shop from '../assets/shop.svg'
import DeliveryTruck from '../assets/delivery-truck.svg'
const Services = () => {
    return (
        <div className="services">
            #Our services Schedule Planning an office party or a coffee break
            with friends? Let us take care of everything. Schedule our service
            <img className="img-2" src={Calender} />
            Find a store near you Stores Find the nearest one and come try a new
            experience and taste for yourself.
            <img className="img-2" src={Shop} />
            <img className="img-2" src={DeliveryTruck} />
            Delivery With our platform, we can deliver coffee straight to you,
            no matter where you are. Order coffee now
        </div>
    )
}

export default Services
