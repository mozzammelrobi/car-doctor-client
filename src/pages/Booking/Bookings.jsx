import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const axiosSecure = useAxiosSecure()

    // const url = `https://car-doctor-server-xi-plum.vercel.app/bookings?email=${user?.email}`
    const url = `/bookings?email=${user?.email}`
    useEffect(() => {

        axiosSecure.get(url)
        .then(res => setBookings(res.data))

        // axios.get(url,{withCredentials:true})
        // .then(res => {
        //     setBookings(res.data)
        // })
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setBookings(data))
    }, [url,axiosSecure])


    const handleDelete = (id) => {
        const proced = confirm('are you sure you wnat delete')
        if (proced) {
            fetch(`https://car-doctor-server-xi-plum.vercel.app/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    if (data.deletedCount > 0) {
                        alert('delete succssfull')
                        const remaining = bookings.filter(booking => booking._id !== id)
                        setBookings(remaining)
                    }
                })
        }
    }

    const handleConform = (id) => {
        const proced = confirm('are you sure you wnat update')
        if (proced) {
            fetch(`https://car-doctor-server-xi-plum.vercel.app/bookings/${id}`, {
                method: 'PATCH',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ status: 'confirm' })
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    if (data.modifiedCount) {
                        alert('confirm succssfull')
                        const remaining = bookings.filter(booking => booking._id !== id)
                        const updated = bookings.find(booking => booking._id === id)
                        updated.status ='confirm'
                        const newBooking = [updated, ...remaining]

                        setBookings(newBooking)
                    }
                })
        }
    }


    return (
        <div>
            <h2 className="text-5xl text-center">YOur booking: {bookings.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Service </th>
                            <th>email</th>
                            <th>
                                Price
                            </th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            bookings.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleConform={handleConform}
                            ></BookingRow>)
                        }


                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default Bookings;