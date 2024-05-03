import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])
    return (
        <div>
            <div className="text-center">
                <h4 className="text-[#FF3811] text-xl font-bold ">Services</h4>
                <h1 className="text-5xl text-[#151515] font-bold ">Our Service Area</h1>
                <p className="text-[#737373] text-base w-3/5 mx-auto my-4">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <div className="flex justify-center mt-4">
            <button className='btn btn-outline btn-secondary'>Latest Project</button>
            </div>
        </div>
    );
};

export default Services;