import { useState } from "react"
import Input from "./Input";

export default function Form() {

    const [newButton, setNewButton] = useState(createNewButton());
    const [forms, setForms] = useState({
        title: '',
        description: '',
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
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4" >
                    <li>
                        <button button="true" className="text-stone-800 hover:text-stone-950">
                            Cancel
                        </button>
                    </li>
                    <li>
                        <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handleNewButton}>Save</button>
                    </li>

                </menu>
            </div>
            <div className="w-[35rem] mt-16 text-left">
                <Input
                    label="Title"
                    type="text"
                />
                <Input textarea
                    label="Description"
                    type="text"
                />
                <Input
                    label="Due Date"
                    type="date"
                />
            </div>
        </form>
    )
}