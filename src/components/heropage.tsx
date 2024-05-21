import * as React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
    children: React.ReactNode;
    className: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => {
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
};

const HeroSection: React.FC = () => {
    return (
        <section className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
                <div className="flex z-10 flex-col self-stretch px-5 my-auto text-2xl max-md:mt-10 max-md:max-w-full">
                    <h1 className="text-8xl font-bold text-black max-md:max-w-full max-md:text-4xl">
                        Financial Freedom, Redefined
                    </h1>
                    <p className="mt-11 font-medium text-black max-md:mt-10 max-md:max-w-full">
                        Experience unparalleled control and convenience with our innovative online banking platform – Financial Freedom, Redefined
                    </p>
                    <div className="flex gap-2  mt-7 max-w-full w-[382px]">
                        <Button className="justify-center px-4 py-3 text-base text-white bg-violet-500 rounded-xl max-md:px-5">
                            <Link to="/register">
                                Sign Up
                            </Link>
                        </Button>
                        <Button className="justify-center items-start text-base px-5 py-3 bg-white rounded-xl border border-black border-solid text-neutral-950 max-md:px-5">
                            Learn More
                        </Button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f9a18baa8f0352c40b330df9fb84939ac9b9d166ce5163723d48d11d7e27395?apiKey=f0c7f3edffe4460ca2a52c85cd1fec66&"
                    alt="Promotional banner for Financial Freedom, Redefined"
                    className="grow w-full aspect-square max-md:max-w-full"
                />
            </div>
        </section>
    );
};

const HeroPage: React.FC = () => {
    return (
        <div>
            <HeroSection />
        </div>
    );
};
export default HeroPage;