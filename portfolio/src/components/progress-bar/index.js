const ProgressBar = ({percentage}) =>{
    return(
        <div className="w-full bg-gray-200 rounded-full h-5 border-4 border-double border-blue-500 ">
            <div className="bg-blue-600 h-3  rounded-full" style={{width:`${percentage}%`}}></div>
        </div>
    )
}
export default ProgressBar;