import { useLoaderData } from "react-router-dom";


const Checkout = () => {
    const loadData = useLoaderData()
    console.log(loadData)

    return (

                    <form className="card-body">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Full Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Last Name</span>
                            </label>
                            <input type="Text" placeholder="Last Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="text" name="phone" placeholder="Phone" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                  </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Order Conform" />
                        </div>
                    </form>
    );
};

export default Checkout;