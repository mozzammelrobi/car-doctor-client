/* eslint-disable react/prop-types */


const ServiceCard = ({service}) => {
    const {title, img, price} = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{title}</h2>
               <div className="flex justify-between">
               <p className="text-[#FF3811]">Price ${price}</p>
               <button className="text-2xl text-[#FF3811]">→</button>
               </div>
            </div>
        </div>
    );
};

export default ServiceCard;