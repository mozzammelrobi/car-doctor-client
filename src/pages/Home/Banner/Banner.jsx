import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'


const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] rounded-xl">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full " />
                <div className="absolute h-full flex items-center left-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white  space-y-7 pl-4 '>
                        <h2 className='text-6xl font-bold w-96'>Affordable Price For Car Servicing</h2>
                        <p className='w-7/12'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className='btn btn-primary mr-5'>Discover More</button>
                        <button className='btn btn-outline btn-secondary'>Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex bottom-4 right-4">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full " />
                <div className="absolute h-full flex items-center left-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white  space-y-7 pl-4 '>
                        <h2 className='text-6xl font-bold w-96'>Affordable Price For Car Servicing</h2>
                        <p className='w-7/12'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className='btn btn-primary mr-5'>Discover More</button>
                        <button className='btn btn-outline btn-secondary'>Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex bottom-4 right-4">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full " />
                <div className="absolute h-full flex items-center left-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white  space-y-7 pl-4 '>
                        <h2 className='text-6xl font-bold w-96'>Affordable Price For Car Servicing</h2>
                        <p className='w-7/12'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className='btn btn-primary mr-5'>Discover More</button>
                        <button className='btn btn-outline btn-secondary'>Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex bottom-4 right-4">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full " />
                <div className="absolute h-full flex items-center left-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white  space-y-7 pl-4 '>
                        <h2 className='text-6xl font-bold w-96'>Affordable Price For Car Servicing</h2>
                        <p className='w-7/12'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className='btn btn-primary mr-5'>Discover More</button>
                        <button className='btn btn-outline btn-secondary'>Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex bottom-4 right-4">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;