import { useState } from "react"

export default function Form() {

    const [newButton, setNewButton] = useState(createNewButton());
    const [forms, setForms] = useState({
        title: 'Name project',
        description: 'Description project',
        date: ''
    })

    function createNewButton() {
        const initialbutton = [];
        for (let i = 0; i <= 1; i++) {
            initialbutton.push({
                id: i,
                title: 'Item' + (i + 1)
            });
        }
        return initialbutton;
    }

    function handleNewButton() {
        setNewButton([
            ...newButton,
            {
                id: newButton, 
                title: forms.title
            }
        ])
    }

        return (
            <form className="mt-4 text-right ">
                <button button="true" className="text-stone-800 hover:text-stone-950">
                    Cancel
                </button>
                <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handleNewButton}>Save</button>
                <div className="w-[35rem] mt-16 text-left">
                    <label className="text-sm font-bold uppercase text-stone-500">title</label>
                    <input className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
                        type="text"
                        value={forms.title}
                        onChange={e => {
                            setForms({
                                ...forms,
                                title: e.target.value
                            })
                        }}
                    />
                    <label className="text-sm font-bold uppercase text-stone-500">Description</label>
                    <input className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
                        type="text"
                        value={forms.description}
                        onChange={e => {
                            setForms({
                                ...forms,
                                description: e.target.value
                            })
                        }}
                    />

                    <label className="text-sm font-bold uppercase text-stone-500">Due Date</label>
                    <input className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" type="date" />
                </div>
            </form>
        )
    }