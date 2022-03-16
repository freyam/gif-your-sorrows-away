document.getElementById("gif").style.display = "none";

function httpGetAsync(URL, callback) {
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            callback(xmlHttp.responseText);
        }
    };

    xmlHttp.open("GET", URL, true);
    xmlHttp.send(null);

    return;
}

function tenor(responsetext) {
    var response_objects = JSON.parse(responsetext);

    gifs = response_objects["results"];

    var idx = Math.floor(Math.random() * gifs.length);
    var gif_url = gifs[idx]["media"][0]["gif"]["url"];

    document.getElementById("gif").src = gif_url;
    document.getElementById("link").href = gif_url;

    document.getElementById("gif").style.display = "block";

    document.getElementById("similar").onclick = function () {
        idx = Math.floor(Math.random() * gifs.length);
        gif_url = gifs[idx]["media"][0]["gif"]["url"];

        document.getElementById("gif").src = gif_url;
        document.getElementById("link").href = gif_url;
    };
}

var QUERIES = [
    "cute animals",
    "cute kitten",
    "sleeping kitten",
    "smol kitten",
    "cute puppy",
    "cute sleeping puppy",
    "cute cat",
    "cute dog",
    "cute rabbit",
    "cute bunny",
    "cute panda",
    "cute koala",
    "cute polar bear",
    "cute llama",
    "cute alpaca",
    "cute pig",
    "cute dog hug",
    "cute doggo",
    "cute catto",
    "cute squirrel",
    "cute fox",
    "cute golden retriever",
    "cute samoyed",
    "cute sand cat",
    "cute raccoon",
    "cute snake",
    "cute quokka",
    "cute arctic foxes",
    "cute hamster",
    "cute red panda",
    "cute panda bear",
    "cute guinea pig",
    "cute deer",
    "cute giraffe",
    "cute penguin",
    "cute hummingbird",
    "cute butterfly",
    "cute owl",
    "cute kitten paw",
];

function showGIF() {
    var API_KEY = "ABOEVPLHCZH1";

    var SEARCH_QUERY = QUERIES[Math.floor(Math.random() * QUERIES.length)];

    var SEARCH_URL =
        "https://g.tenor.com/v1/search?q=" + SEARCH_QUERY + "&key=" + API_KEY;

    httpGetAsync(SEARCH_URL, tenor);
}

setTimeout(function () {
    document.getElementById("banner").style.display = "none";
}, 500);

showGIF();
