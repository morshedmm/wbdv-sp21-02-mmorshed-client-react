import React, {useState}  from 'react'

const ParagraphWidget = ({widget, editing, newText, setNewText, newType, setNewType, newSize, setNewSize}) => {

    const [paragraphType, setParagraphType] = useState(true);
    return(
        <>
            {
                editing &&
                <>
                    <select value={newType} onChange={(event) => {setNewType(event.target.value);setParagraphType(false)}}
                                                                    className="form-control">
                                                <option value={"HEADING"}>Heading</option>
                                                <option value={"PARAGRAPH"}>Paragraph</option>
                                                <option value={"LIST"}>LIST</option>
                                                <option value={"IMAGE"}>IMAGE</option>

                    </select>


                    {   paragraphType &&
                    <textarea value={newText} onChange={(event) => setNewText(event.target.value)} className="form-control"></textarea>
                    }
                { !paragraphType &&
                <>
                                        <input value={newText} onChange={(event) => setNewText(event.target.value)}
                                                                                        className="form-control"/>
                                        <select value={newSize} onChange={(event) => setNewSize(event.target.value)}
                                        className="form-control">
                                            <option value={1}>Heading 1</option>
                                            <option value={2}>Heading 2</option>
                                            <option value={3}>Heading 3</option>
                                            <option value={4}>Heading 4</option>
                                            <option value={5}>Heading 5</option>
                                            <option value={6}>Heading 6</option>
                                        </select>
                </>
                }
                </>
            }
            {
                !editing &&
                <p>
                    {widget.text}
                </p>
            }
        </>
    )
}

export default ParagraphWidget
