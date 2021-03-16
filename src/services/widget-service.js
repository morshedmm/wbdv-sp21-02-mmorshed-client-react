const TOPICS_URL = "https://wbdv-generic-server.herokuapp.com/api/mmorshed2/topics";
const WIDGETS_URL = "http://localhost:8080/api/widgets";

export const createWidgetForTopic = (topicId, widget) =>
    fetch(`${TOPICS_URL}/${topicId}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findWidgetsForTopic = (widgetId) =>
    fetch(`${TOPICS_URL}/${topicId}/widgets`)
        .then(response => response.json())


export const deleteWidget = (widgetId) =>
    fetch(`${WIDGETS_URL}/${widgetId}`, {
        method: "DELETE"
    })
        .then(response => response.json())


export const updateWidget = (widgetId, widget) =>
    fetch(`${WIDGETS_URL}/${widgetId}`, {
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