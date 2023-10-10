import React, {useState} from 'react';
import {AiOutlineSearch} from "react-icons/ai";

function SearchInput({onSearch}) {
    const [searchData, setSearchData] = useState('')
    const handleChange = (e) => {
        const {value} = e.target
        setSearchData(value)
        onSearch(value)
    }
    return (
        <div className="flex items-center justify-center mt-5">
            <div className="relative">
                <AiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2"/>
                <input value={searchData} onChange={handleChange}
                       className="py-3 pl-10 pr-5 text-black outline-none rounded-lg" type="text"
                       placeholder="Search Data"/>
            </div>

        </div>
    )
}

export default SearchInput;
