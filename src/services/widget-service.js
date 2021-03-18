//const TOPICS_URL = "https://wbdv-generic-server.herokuapp.com/api/mmorshed2/topics";
//const WIDGETS_URL = "http://localhost:8080/api/widgets";
const TOPICS_URL = "http://localhost:8080/api/topics";
const WIDGETS_URL = "http://localhost:8080/api/widgets";

export const createWidgetForTopic = (topicId, type, size, text) =>
    fetch(`${TOPICS_URL}/${topicId}/widgets`, {
        method: "POST",
        body: JSON.stringify({type: "PARAGRAPH", size: 1, text: "New Widget"}),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findWidgetsForTopic = (topicId) =>
    fetch(`${TOPICS_URL}/${topicId}/widgets`)
        .then(response => response.json())


export const deleteWidget = (widgetId) =>
    fetch(`${WIDGETS_URL}/${widgetId}`, {
        method: "DELETE"
    })
        .then(response => response.json())


export const updateWidget = (wid, widget) =>
    fetch(`${WIDGETS_URL}/${wid}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())


export default {
    findWidgetsForTopic, createWidgetForTopic, deleteWidget, updateWidget
}