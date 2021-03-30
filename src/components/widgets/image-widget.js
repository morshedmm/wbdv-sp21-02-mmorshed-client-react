import React from 'react'

const ImageWidget = ({widget, setWidget, editing, newUrl, setNewUrl, newWidth, setNewWidth, newHeight, setNewHeight}) => {
    return (
        <div>
            {/*<h2>Image Widget</h2>*/}
            <img width={widget.width} height={widget.height} src= {widget.url}/>
            {
                editing &&
                    <div>
                        URL
                        <input value={newUrl} onChange={(event) => {setNewUrl(event.target.value); setNewWidth(); setNewHeight();}} className="form-control"/>
                        width
                        <input value={newWidth} onChange={(event) => setNewWidth(event.target.value)} className="form-control"/>
                        height
                        <input value={newHeight} onChange={(event) => setNewHeight(event.target.value)} className="form-control"/>
                    </div>
            }
        </div>
    )
}

export default ImageWidget