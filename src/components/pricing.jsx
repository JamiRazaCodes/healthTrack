import Button from "./Button";
import { Link } from 'react-router-dom';

function Pricing({ pricing }) {
    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
                        Pricing
                    </h1>
                    <div className="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
                        <button className="py-1 px-4 bg-indigo-500 text-white focus:outline-none">
                            Monthly
                        </button>
                    </div>
                </div>
                <div className="flex flex-wrap m-4">
                    {pricing.map((data) => (
                        <div key={data.id} className="p-4 xl:w-1/4 md:w-1/2 w-full">
                            <div className="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
                                {data.status && (
                                    <span className="bg-indigo-500 text-white px-8 py-3 tracking-widest text-xl absolute right-0 top-0 rounded-bl">
                                        {data.status}
                                    </span>
                                )}
                                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">{data.plan}</h2>
                                <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                    <span>{data.price}</span>
                                    <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
                                </h1>
                                {data.features.map((ft, index) => (
                                    <p key={index} className="flex items-center text-gray-600 mb-2">
                                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2.5"
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </span>
                                        {ft}
                                    </p>
                                ))}
                                <Link to={`/Billing/${data.plan.toLowerCase()}`}>
                                    <Button label={"JOIN NOW"} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Pricing;
