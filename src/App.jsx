import {useEffect, useState} from 'react'
import './App.css'
import Card from "./component/Card.jsx";
import SearchInput from "./component/Search";
import Form from "./component/form.jsx";


function App() {
    const [activeNotes, setActiveNotes] = useState([])
    const [archivedNotes, setArchivedNotes] = useState([])
    const [searchInput, setSearchInput] = useState('');
    const [data, setData] = useState([
        {
            id: 1,
            title: 'Contoh Judul',
            body: 'Ini adalah isi catatan.',
            archived: true,
            createdAt: '2023-10-10',
        },
    ])
    const handleAddData = (newItem) => {
        const id = Date.now().toString()
        setData([...data, {id, ...newItem}])
        if (!newItem.archived) {
            setActiveNotes([...activeNotes, {id, ...newItem}])
        } else {
            setArchivedNotes([...archivedNotes, {id, ...newItem}])
        }
    }
    const deleteData = (id) => {
        const updatedData = data.filter((item) => item.id !== id)
        setData(updatedData)
    }
    const toggleArchive = (id) => {
        const updatedData = data.map((item) => {
            if (item.id === id) {
                return {...item, archived: !item.archived};
            }
            return item;
        });

        setData(updatedData);

        if (!updatedData.find((item) => item.id === id).archived) {
            setActiveNotes([...activeNotes, ...archivedNotes.filter((item) => item.id !== id)]);
            setArchivedNotes(archivedNotes.filter((item) => item.id !== id));
        } else {
            setArchivedNotes([...archivedNotes, ...activeNotes.filter((item) => item.id === id)]);
            setActiveNotes(activeNotes.filter((item) => item.id !== id && item.archived === 'false'));
        }
    };
    const handleSearch = (searchData) => {
        setSearchInput(searchData)
        if (searchData === '') {
            setActiveNotes(data.filter((item) => !item.archived))
            setArchivedNotes(data.filter((item) => item.archived))

        } else {
            const filteredActiveNote = activeNotes.filter((note) =>
                note.title.toLowerCase().includes(searchData.toLowerCase())
            )
            const filteredArchivedNote = archivedNotes.filter((note) =>
                note.title.toLowerCase().includes(searchData.toLowerCase())
            )
            setActiveNotes(filteredActiveNote)
            setArchivedNotes(filteredArchivedNote)
        }
    }
    useEffect(() => {
        const activeNotesUpdated = data.filter((item) => !item.archived);
        const archivedNotesUpdated = data.filter((item) => item.archived);

        setActiveNotes(activeNotesUpdated);
        setArchivedNotes(archivedNotesUpdated);
    }, [data]);
    return (
        <>
            <Form onAddData={handleAddData}/>
            <SearchInput onSearch={handleSearch}/>
            <h1 className="text-white text-center text-3xl my-3">Catatan Aktif</h1>
            <div className="flex flex-col items-center">
                {activeNotes.length === 0 ?
                    <div className="text-red-500 text-2xl text-center">Tidak ada data Aktif</div> : null}
                <Card data={activeNotes} onDelete={deleteData} onArchive={toggleArchive}/>
            </div>
            <h1 className="text-white text-center text-3xl my-3">Catatan Arsip</h1>
            <div className="flex flex-col items-center">
                {archivedNotes.length === 0 ?
                    <div className="text-red-500 text-2xl text-center">Tidak ada data arsip</div> : null}
                <Card data={archivedNotes} onDelete={deleteData} onArchive={toggleArchive}/>
            </div>
        </>
    )
}

export default App
