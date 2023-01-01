import _ from "lodash";

const formElements = (rawData) => {
    const data = sortKeys(rawData);
    let formedElements = '<div style="padding: 5px;">';
    for(let i = 0; i < data.length; i++){
        const status = data[i];
        const key = status.name;
        const value = status.value;
        formedElements += formElement(key, value);
        if(i + 1 < data.length){
            formedElements += "<hr\>"
        }
    }
    formedElements += '</div>';
    return formedElements;
}

const formElement = (key, value) => {
    return `<div style="${addColor(value)}"><span>${key}</span><span style="float:right">${value}</span></div>`
}

const addColor = (value) => {
    if(value == "false" || value == false || value == "null" || value == null){
        return "background-color: red;"
    } else if (value == "true" || value == true){
        return "background-color: green;"
    }
}

const sortKeys = (data) => {
    const items = [];
    const keys = Object.keys(data);
    for(const key of keys){
        const item = {
            name: key,
            value: data[key]
        }
        items.push(item);
    }
    const sortedValues = _.sortBy(items, ['name']);
    return sortedValues;
}

export default (data) => {
    const statusItems = formElements(data);
    return `
        <html style="background-color: black; color: whitesmoke;">
            <body>${statusItems}</body>
        </html>
    `
}