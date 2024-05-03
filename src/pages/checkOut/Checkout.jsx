import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Checkout = () => {
    const services = useLoaderData()
    const { title, _id, price, img } = services

    const { user } = useContext(AuthContext)

    const handleBookService = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        console.log(name, date, email)
        const order = {
            customarName: name,
            email,
            date,
            img,
            price: price,
            service: title,
            survice_id: _id
        }
        console.log(order)

        fetch('http://localhost:5000/bookings', {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    alert('survice added successfully')
                }
                console.log(data)
            })
    }

    return (

        <div>
            <div>
                <h1 className="text-center text-3xl">Book For Services : {title}</h1>
            </div>
            <form onSubmit={handleBookService} className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={user?.displayName} placeholder="Full Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date </span>
                        </label>
                        <input type="date" placeholder="Date" name="date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={user?.email} placeholder="Phone" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="Price" defaultValue={'$' + price} placeholder="Price" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit" value="Order Conform" />
                </div>
            </form>
        </div>
    );
};

export default Checkout;