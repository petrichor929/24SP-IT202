const clearDisplay = () => {
    const display = document.querySelector("#display");
    while (display.firstChild) {
        display.firstChild.remove();
    }
}

const displayError = error => {
    clearDisplay();
    const display = document.querySelector("#display");
    const span = document.createElement('span');
    span.setAttribute('class', 'error');
    const text = document.createTextNode(error);
    span.appendChild(text);
    display.appendChild(span);
}

const displayData = data => {
    console.log(data);
    clearDisplay();
    const display  = document.querySelector("#display");
    //displsy the title
    const h3 = document.createElement('h3');
    const title = document.createTextNode(data.title);
    h3.appendChild(title);
    display.appendChild(h3);
    //display the image or video
    switch(data.media_type) {
        case "image":
            const img = document.createElement('img');
            img.setAttribute('src', data.url);
            img.setAttribute('width', 640);
            display.appendChild(img);
            break;
        case "video": //date:2024-04-14
            const iframe = document.createElement('iframe');
            iframe.setAttribute('src', data.url);
            iframe.setAttribute('width', 640);
            iframe.setAttribute('height', 360);
            display.appendChild(iframe);
            break;
    }
    //TODO
    //create a div or span html element
    //creaate a textnode with date.date
    //append to display
    const div = document.createElement('div');
    const date = document.createTextNode(data.date);
    div.appendChild(date);

    //if data.copyright is define
    //create a div or span html element
    //create a textnode with data.copyright
    //append to display
    if(data.copyright) {
        const span = document.createElement('span');
        span.setAttribute('class', 'right');
        const text = document.createTextNode("Copyright " + data.copyright);
        span.appendChild(text);
        div.appendChild(span);
    }
    display.appendChild(div);

    //create a pargraph html element
    //create a text node with data.explanation
    //append to display
    const p = document.createElement('p');
    const explanation = document.createTextNode(data.explanation);
    p.appendChild(explanation);
    display.append(p);
}

//data is the incoming json object
const displayPicture = data => {
    if(data.error) {
        displayError(data.error.message);
    } else if (data.code) {
        displayError(data.msg);
    } else {
        displayData(data);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#view_button")
        .addEventListener("click", () => {
            //get date value
            const dateInput = document.querySelector("#date");
            const dateStr = dateInput.value;

            if(dateStr) {
                //send fetch request
                const domain = `https://api.nasa.gov/planetary/apod`; //Slide 22
                const yourApiKey = "ItlmQcTO3JgPySl3zW6CoLYNm63O29By1a9jG5mP";
                const request = `?api_key=${yourApiKey}&date=${dateStr}`
                const url = domain + request;
                console.log(url);
                fetch(url)
                .then(response => response.json())
                .then(json => displayPicture(json))
                .catch(error => displayError(error.message))
            } else {
                //display error
                const msg = "Please select a valid date."
                displayError(msg);
            }
        })
});