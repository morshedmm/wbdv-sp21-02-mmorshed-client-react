import React, {useState, useEffect} from 'react'
import {connect} from "react-redux";
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom";
import widgetService from '../../services/widget-service'

const WidgetList = (
    {
            widgets=[],
            findWidgetsForTopic,
            createWidgetForTopic,
            deleteWidget,
            updateWidget
            //resetTopic
        }

) => {
    // TODO: move state management to widgets-reducer.js
    //const {topicId} = useParams();
    const {layoutId, courseId, moduleId, lessonId, topicId} = useParams();

    //const [widgets, setWidgets] = useState([])
    const [editingWidget, setEditingWidget] = useState({});
    //const [updated, setUpdated] = useState(false);
    const [newText, setNewText] = useState("")
    const [newSize, setNewSize] = useState()
    const [newType, setNewType] = useState()
    //console.log(newText)
    useEffect(() => {
    findWidgetsForTopic(topicId);
        // TODO: move server communication to widget-service.js
        // fetch("http://localhost:8080/api/widgets")
        //fetch(`http://localhost:8080/api/topics/${topicId}/widgets`)
        //    .then(response => response.json())
        //    .then(widgets => setWidgets(widgets))
    }, [moduleId, lessonId, topicId])
    //const createWidgetForTopic = () => {
    //    // TODO: move server communication to widget-service.js
    //    fetch(`http://localhost:8080/api/topics/${topicId}/widgets`, {
    //        method: "POST",
    //        body: JSON.stringify({type: "PARAGRAPH", size: 1, text: "New Widget"}),
    //        headers: {
    //            'content-type': 'application/json'
    //        }
    //    })
    //        .then(response => response.json())
    //        .then(actualWidget => {
    //            setWidgets(widgets => ([...widgets, actualWidget]))
    //        })
    //}
    //const deleteWidget = (wid) =>
    //    fetch(`http://localhost:8080/api/widgets/${wid}`, {
    //        method: "DELETE",
    //    }).then(response => {
    //        setWidgets((widgets) => widgets.filter(w => w.id !== wid))
    //    })
    //const updateWidget = (wid, widget) =>
    //    fetch(`http://localhost:8080/api/widgets/${wid}`, {
    //        method: "PUT",
    //        body: JSON.stringify(widget),
    //        headers: {
    //            'content-type': 'application/json'
    //        }
    //    }).then(response => {
    //        setWidgets((widgets) => widgets.map(w => w.id !== wid ? w : widget))
    //        setEditingWidget({})
    //    })

    return(
        <div>
            <i onClick={() => createWidgetForTopic(topicId)} className="fas fa-plus fa-2x float-right"></i>
            {/*<h2>Widget List ({widgets.length}) {editingWidget.id}</h2>*/}
            <ul className="list-group">
                {
                    widgets.map(widget =>
                    <li className="list-group-item" key={widget.id}>
                        {
                            editingWidget.id === widget.id &&
                                <>
                                    <i onClick={() => {
                                        updateWidget({...editingWidget, text:newText, size:newSize, type:newType});
                                        findWidgetsForTopic(topicId); setEditingWidget({});
                                    }} className="fas fa-2x fa-check float-right"></i>
                                    <i onClick={() => deleteWidget(widget)}
                                    className="fas fa-2x fa-trash float-right"></i>
                                </>
                        }
                        {
                            editingWidget.id !== widget.id &&
                            <i onClick={() => {setEditingWidget(widget); setNewText(widget.text);
                            setNewSize(widget.size); setNewType(widget.type)}} className="fas fa-2x fa-cog float-right"></i>
                        }
                        {
                            widget.type === "HEADING" &&
                            <HeadingWidget
                                newText = {newText}
                                newSize = {newSize}
                                newType = {newType}
                                editing={editingWidget.id === widget.id}
                                updateWidget = {updateWidget}
                                deleteWidget = {deleteWidget}
                                setNewText = {setNewText}
                                setNewSize = {setNewSize}
                                setNewType = {setNewType}
                                widget={widget}/>
                        }
                        {
                            widget.type === "PARAGRAPH" &&
                            <ParagraphWidget
                                newText = {newText}
                                editing={editingWidget.id === widget.id}
                                setNewText = {setNewText}
                                widget={widget}/>
                        }

                    </li>
                    )
                }
            </ul>
            {/*{JSON.stringify(widgets)}*/}
        </div>
    )
}

const stpm = (state) => ({
    widgets: state.widgetReducer.widgets
})
const dtpm = (dispatch) => ({
    findWidgetsForTopic: (topicId) => {

        widgetService.findWidgetsForTopic(topicId)
            .then(widgets => dispatch({
                type: "FIND_WIDGETS",
                widgets
            }))
    },
    createWidgetForTopic: (topicId) => {
        //console.log("CREATE TOPIC FOR LESSON: " + lessonId)
        widgetService
            .createWidgetForTopic(topicId, {type: "PARAGRAPH", size: 1, text: "New Widget4"})
            .then(widget => dispatch({
                type: "CREATE_WIDGET",
                widget
            }))
    },
    updateWidget: (widget) =>
            widgetService.updateWidget(widget.id, widget)
               .then(status => dispatch({
                   type: "UPDATE_WIDGET",
                   widget
            })),
    deleteWidget: (widget) => {
        widgetService.deleteWidget(widget.id)
        .then(status => dispatch({
            type: "DELETE_WIDGET",
            widgetToDelete:widget
        }))
    },

})


export default connect(stpm, dtpm)(WidgetList);