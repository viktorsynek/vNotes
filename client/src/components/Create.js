import Navbar from './Navbar'
import '../static/styles/main.css'
import {useState} from 'react';

const Create = () => {
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescChange = (event) => {
        setDescription(event.target.value);
    };

    const createNew = () => {
        fetch('CHANGE THIS', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, description }),
        })
            .then((res) => {
                
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return ( 
        <>
            <Navbar></Navbar>
            <form onSubmit={createNew} className='create'>
                <div className="txt_field">
                    <p>Title</p>
                    <input
                    type="text"
                    name="title"
                    placeholder=""
                    required
                    value={title} 
                    onChange={handleTitleChange}
                    />
                </div>
                <div className="txt_field">
                    <p>Description</p>
                    <textarea name="desc" id="desc" value={description} onChange={handleDescChange} cols="50" rows="5"></textarea>
                </div>
                <div>
                    <input type="submit" value="Create" />
                </div>
            </form>
        </>
     );
}
 
export default Create;