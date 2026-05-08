
    let firstParagraph = document.querySelector("p");

    let text = firstParagraph.innerText;

    let words = text.split(" ");

    let wordCount = words.length;

    let readingTime = wordCount / 250;

    firstParagraph.innerHTML +=
        "<br><br><strong>Estimated Reading Time:</strong> " +
        readingTime.toFixed(2) +
        " minute(s)";
