import React from 'react'

const ListWidget = ({widget, setWidget, editing, newText, setNewText, newOrder, setNewOrder, newType, setNewType,
                    newUrl, setNewUrl, newWidth, setNewWidth, newHeight, setNewHeight}) => {
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

                    <select value={newType} onChange={(event) => {setNewType(event.target.value);}}
                                                                                            className="form-control">
                                      <option value={"HEADING"}>Heading</option>
                                      <option value={"PARAGRAPH"}>Paragraph</option>
                                      <option value={"LIST"}>LIST</option>
                                      <option value={"IMAGE"}>IMAGE</option>

                    </select>

                    <input type="checkbox" checked={newOrder} onChange={(event) => {setNewOrder(event.target.checked);}} /> Ordered
                    <br/>
                    List Items
                    <textarea placeholder="Enter one list item per line" rows={10} value={newText} onChange={(event) => setNewText(event.target.value)} className="form-control">

                    </textarea>
                </div>
            }
            {/*<textarea></textarea>*/}
        </div>
    )
}

export default ListWidget
