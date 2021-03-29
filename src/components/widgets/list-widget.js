import React from 'react'

const ListWidget = ({widget, setWidget, editing, newText, setNewText, newOrder, setNewOrder}) => {
    return (
        <div>
            {/*<h2>List Widget</h2>*/}
            {
                !editing &&
                    <>
                        {
                            widget.ordered &&
                            <ol>
                                {
                                    widget.text.split("\n").map(item => {
                                        return(
                                            <li>{item}</li>
                                        )
                                    })
                                }
                            </ol>
                        }
                        {
                            !widget.ordered &&
                            <ul>
                                {
                                    widget.text.split("\n").map(item => {
                                        return(
                                            <li>{item}</li>
                                        )
                                    })
                                }
                            </ul>
                        }
                    </>
            }
            {
                editing &&
                <div>
                    <input type="checkbox" checked={newOrder} onChange={(event) => {setNewOrder(event.target.checked);}} /> Ordered
                    <br/>
                    List Items
                    <textarea rows={10} value={newText} onChange={(event) => setNewText(event.target.value)} className="form-control">

                    </textarea>
                </div>
            }
            {/*<textarea></textarea>*/}
        </div>
    )
}

export default ListWidget
