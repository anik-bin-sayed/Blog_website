import React from 'https://cdn.jsdelivr.net/npm/react@18/umd/react.development.js';
import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18/umd/react-dom.development.js';

const SophiaEllisComponent = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between bg-gray-200 p-6 min-h-screen">
            <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
                <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-auto">
                    <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
                        <img
                            src="https://via.placeholder.com/300x400"
                            alt="Sophia Ellis at work"
                            className="w-full h-auto object-cover rounded-lg shadow-md"
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <img
                            src="https://via.placeholder.com/300x400"
                            alt="Sophia Ellis hiking"
                            className="w-full h-auto object-cover rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full md:w-auto mt-6 md:mt-0">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="p-4">
                        <p className="text-3xl font-bold text-gray-800">15</p>
                        <p className="text-gray-600">Countries Explored</p>
                    </div>
                    <div className="p-4">
                        <p className="text-3xl font-bold text-gray-800">10+</p>
                        <p className="text-gray-600">Years in Marketing</p>
                    </div>
                    <div className="p-4">
                        <p className="text-3xl font-bold text-gray-800">200</p>
                        <p className="text-gray-600">Blog Posts Published</p>
                    </div>
                    <div className="p-4">
                        <p className="text-3xl font-bold text-gray-800">30</p>
                        <p className="text-gray-600">Books Read Annually</p>
                    </div>
                    <div className="p-4">
                        <p className="text-3xl font-bold text-gray-800">3</p>
                        <p className="text-gray-600">Languages Spoken</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(<SophiaEllisComponent />, document.getElementById('root'));