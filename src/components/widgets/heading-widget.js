import React, {useState} from 'react'

const HeadingWidget = ({widget, editing, updated, updateWidget, deleteWidget, newText, setNewText, newSize, setNewSize, newType, setNewType}) => {
    //setNewText("hello");
    //console.log(newText);
    const [headingType, setHeadingType] = useState(true);

    return(
        <>
            {
                editing &&
                    <>

                        <select value={newType} onChange={(event) => {setNewType(event.target.value);setHeadingType(false)}}
                                                                        className="form-control">
                                                    <option value={"HEADING"}>Heading</option>
                                                    <option value={"PARAGRAPH"}>Paragraph</option>
                                                    <option value={"LIST"}>LIST</option>
                                                    <option value={"IMAGE"}>IMAGE</option>

                        </select>

                        {/*<input value={newText} onChange={(event) => setNewText(event.target.value)}
                        className="form-control"/>*/}
                        { headingType &&
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

                        { !headingType &&
                            <textarea value={newText} onChange={(event) => setNewText(event.target.value)} className="form-control"></textarea>


                        }


                        {/*<i onClick={() => deleteWidget(widget)}
                        className="fas fa-2x fa-trash float-right"></i>*/}
                    </>
            }
            {
                !editing &&
                    <>
                        {widget.size == 1 && <h1>{widget.text}</h1>}
                        {widget.size == 2 && <h2>{widget.text}</h2>}
                        {widget.size == 3 && <h3>{widget.text}</h3>}
                        {widget.size == 4 && <h4>{widget.text}</h4>}
                        {widget.size == 5 && <h5>{widget.text}</h5>}
                        {widget.size == 6 && <h6>{widget.text}</h6>}
                    </>
            }








        </>
    )
}

export default HeadingWidget