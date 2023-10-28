const SearchBar = ()=>{
    return(
        <div className="mt-20">
            <input type="text" placeholder="Search for a city" className="p-2 rounded-xl w-1/2" />
            <button className="bg-blue-700 text-white py-1 px-4 rounded-xl translate-x-[-90px]">Search</button>
        </div>
    )
}
export default SearchBar