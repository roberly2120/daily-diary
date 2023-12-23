import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";

const defaultFormValues = {title: '', text: ''}

export default function Journal({formValues, setFormValues, posts, setPosts}) {
    const navigate = useNavigate()

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setFormValues({...formValues, [name]: value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const newPost = {
            id: v4().slice(0,6),
            date: Date.now(),
            title: formValues.title,
            text: formValues.text,
        }
        setPosts([...posts, newPost])
        setFormValues(defaultFormValues)
        navigate('/posts')
    }
    return (
        <div>
            <form className="journal-container" onSubmit={(e) => handleSubmit(e)}>
                <h1>New Journal Entry</h1>
                <input
                    type='text'
                    name='title'
                    value={formValues.title}
                    placeholder="Enter Title"
                    onChange={(e) => handleInputChange(e)}
                />
                <textarea
                    type='text'
                    name='text'
                    value={formValues.text}
                    placeholder="begin typing..."
                    onChange={(e) => handleInputChange(e)}
                />
                <button type='submit'>
                    Submit
                </button>
            </form>
        </div>
    )
}