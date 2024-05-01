import parts from '../../../assets/images/about_us/parts.jpg';
import person from '../../../assets/images/about_us/person.jpg';

const About = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2  right-5 top-1/2 border-8 border-white absolute rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2 p-4'>
                    <h4 className='text-orange-500 font-bold text-3xl'>About us</h4>
                    <h1 className="text-4xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p className="mb-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button className="btn bg-[#FF3711] text-white">Get More info</button>
                </div>
            </div>
        </div>
    );
};

export default About;