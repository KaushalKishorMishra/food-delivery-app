import React from 'react'

interface UserProps {
    name: string;
    image: string;
    testimonial: string;

}

const Testimonial: React.FC<UserProps> = ({ name, image, testimonial }) => {
    return (
        <div className="card card-side shadow-xl w-1/2  p-5 items-center">
            <figure><img src={image} alt="Movie" className='testimonial-border-radius w-[250px]' /></figure>/
            <div className="card-body text-white">
                <h2 className="card-title text-4xl font-Madimi hover:text-cs-ascent">{testimonial}</h2>
                <p className='font-serif tracking-widest text-xl'>- {name}</p>
            </div>
        </div>
    )
}

export default Testimonial
