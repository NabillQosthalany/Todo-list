import React, {useState} from 'react';
import RadioButton from "./RadioButton.jsx";

function Form({onAddData}) {
    const [newItem, setNewItem] = useState({title: '', body: '', archived: false});

    const handleInputChange = (e) => {
        const {name, value, checked, type} = e.target;
        const newValue = type === 'radio' ? value === 'true' : value;
        setNewItem({...newItem, [name]: newValue});
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const createdAt = new Date().toLocaleDateString()
        const newItemWithDate = {...newItem, createdAt}
        onAddData(newItemWithDate)
        setNewItem({title: '', body: '', archived: false})
    }
    return (
        <form onSubmit={handleSubmit} className="max-w-lg w-full mx-auto text mt-10">
            <h1 className="text-center text-white text-xl font-semibold mb-4">Catatan</h1>
            <div className="">
                <input
                    onChange={(e) => setNewItem({...newItem, title: e.target.value})}
                    value={newItem.title}
                    className="py-3 px-5 text-black w-full outline-none rounded-lg mb-5" type="text"
                    placeholder="Judul"/>
                <textarea
                    onChange={(e) => setNewItem({...newItem, body: e.target.value})}
                    value={newItem.body}
                    className="py-3 px-5 text-black w-full outline-none rounded-lg" type="text"
                    placeholder="Isi Text"/>
                <RadioButton value={true} name="archived" label="Archived" onChange={handleInputChange}
                             checked={newItem.archived === true}/>
                <RadioButton value={false} name="archived" label="Not Archived" onChange={handleInputChange}
                             checked={newItem.archived === false}/>
                <button
                    type="Submit"
                    className="py-3 px-5 cursor-pointer text-white font-semibold bg-indigo-600 hover:bg-indigo-700 w-full rounded-full">Tambah
                </button>
            </div>
            <ul className="flex flex-col gap-4 mt-10">
            </ul>
        </form>

    );
}

export default Form;
