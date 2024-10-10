function Button({label, txtcolor}){
        
    return(
        <button className={` px-4 py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 ${txtcolor ? txtcolor: "text-white"}  font-bold rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-opacity-50`}>
            {label}
            </button>
    );
}

export default Button;