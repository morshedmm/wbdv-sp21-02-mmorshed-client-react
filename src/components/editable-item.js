import React, {useState} from 'react'
import {Link} from "react-router-dom";

const EditableItem = (
    {
        to="/somewhere/to/go",
        deleteItem,
        updateItem,
        item={title: "Some Title", _id:"ABC"},
        active
    }) => {
    const [editing, setEditing] = useState(false)
    const [cachedItem, setCahedItem] = useState(item)
    return (
        <>
            {
                !editing &&
                <div className="row">
                    <div className="col-9">
                    <Link className={`nav-link ${active?'active':''}`} to={to}>
                        {item.title} {JSON.stringify(active)}
                    </Link>
                    </div>
                    <div className="">
                    <span className="float-right">
                    <i onClick={() => setEditing(true)} className="fas fa-edit"></i>
                    </span>
                    </div>
                </div>
            }
            {
                editing &&
                <>
                    <input
                        onChange={(e) =>
                            setCahedItem({
                                ...cachedItem,
                                title: e.target.value
                            })}
                        value={cachedItem.title}/>
                    <i onClick={() => {
                        setEditing(false)
                        updateItem(cachedItem)
                    }} className="fas fa-check"></i>
                    <i onClick={() => deleteItem(item)} className="fas fa-times"></i>
                </>
            }
        </>
    )
}

export default EditableItem