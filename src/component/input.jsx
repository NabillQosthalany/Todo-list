import React, {Component} from 'react';

class CRUDApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    title: 'Contoh Judul 1',
                    body: 'Ini adalah contoh teks 1.',
                    archived: false,
                    createdAt: '2023-10-01',
                },
                {
                    id: 2,
                    title: 'Contoh Judul 2',
                    body: 'Ini adalah contoh teks 2.',
                    archived: false,
                    createdAt: '2023-10-02',
                },
            ],
            newTitle: '',
            newBody: '',
        };
    }

    handleTitleChange = (e) => {
        this.setState({newTitle: e.target.value});
    };

    handleBodyChange = (e) => {
        this.setState({newBody: e.target.value});
    };

    handleCreate = () => {
        const {newTitle, newBody} = this.state;
        const newData = {
            id: Date.now(), // ID unik (dapat diganti dengan logika ID yang lebih baik)
            title: newTitle,
            body: newBody,
            archived: false,
            createdAt: new Date().toISOString(),
        };

        this.setState((prevState) => ({
            data: [...prevState.data, newData],
            newTitle: '',
            newBody: '',
        }));
    };

    handleDelete = (id) => {
        const filteredData = this.state.data.filter((item) => item.id !== id);
        this.setState({data: filteredData});
    };

    render() {
        const {data, newTitle, newBody} = this.state;

        return (
            <div>
                <h1>CRUD App</h1>
                <div>
                    <h2>Create</h2>
                    <input
                        type="text"
                        placeholder="Judul"
                        value={newTitle}
                        onChange={this.handleTitleChange}
                    />
                    <textarea
                        placeholder="Isi"
                        value={newBody}
                        onChange={this.handleBodyChange}
                    />
                    <button onClick={this.handleCreate}>Tambah Data</button>
                </div>
                <div>
                    <h2>Read</h2>
                    <ul>
                        {data.map((item) => (
                            <li key={item.id}>
                                <strong>{item.title}</strong>
                                <p>{item.body}</p>
                                <button onClick={() => this.handleDelete(item.id)}>
                                    Hapus Data
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default CRUDApp;
