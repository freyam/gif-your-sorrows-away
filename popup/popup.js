const prefixes = ["cute", "sleep", "laugh", "smile", "happy", "sad", "angry"];

const suffixes = [
  "kitten",
  "puppy",
  "cat",
  "dog",
  "rabbit",
  "bunny",
  "panda",
  "koala",
  "polar bear",
  "llama",
  "alpaca",
  "pig",
  "doggo",
  "catto",
  "squirrel",
  "golden retriever",
  "samoyed",
  "raccoon",
  "arctic foxes",
  "hamster",
  "red panda",
  "panda bear",
  "guinea pig",
  "deer",
  "penguin",
  "elephant",
  "dolphin",
  "hedgehog",
  "swan",
  "chick",
];

const QUERIES = [];
for (const prefix of prefixes) {
  for (const suffix of suffixes) {
    QUERIES.push(`${prefix} ${suffix}`);
  }
}

const API_KEY = "ABOEVPLHCZH1";

const gifElement = document.getElementById("gif");
const similarButton = document.getElementById("similar");
const downloadButton = document.getElementById("download");
const newButton = document.getElementById("new");

let gifs = [];
let query = "";

async function fetchGifs() {
  query = QUERIES[Math.floor(Math.random() * QUERIES.length)];
  const uri = `https://g.tenor.com/v1/search?q=${query}&key=${API_KEY}`;

  try {
    const response = await fetch(uri);
    const data = await response.json();
    gifs = data.results;
  } catch (error) {
    console.error("Error fetching gifs:", error);
    gifs = [];
  }
}

function displayRandomGIF() {
  const randomIdx = Math.floor(Math.random() * gifs.length);
  const gif = gifs[randomIdx];

  const gifUrl = gif.media[0].mediumgif.url;

  gifElement.src = gifUrl;
  gifElement.style.display = "block";
}

function downloadGIF() {
  chrome.downloads.download({
    url: gifElement.src,
    filename: query + ".gif",
  });
}

async function GYSA() {
  await fetchGifs();
  displayRandomGIF();
}

similarButton.onclick = function () {
  displayRandomGIF();
};

downloadButton.onclick = function () {
  downloadGIF();
};

newButton.onclick = async function () {
  GYSA();
};
