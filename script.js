// Define an array of band names
let bandNames = [['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

// Function to remove articles from the beginning of a string
function removeArticles(name) {
  return name.replace(/^(the|an|a)\s+/i, ''); // Case-insensitive removal of articles
}

// Remove articles and sort the band names
bandNames = bandNames.map(removeArticles).sort();

// Create a ul element
const ulElement = document.createElement('ul');

// Loop through the sorted band names and create li elements
bandNames.forEach(function (bandName) {
  const liElement = document.createElement('li');
  liElement.textContent = bandName;
  ulElement.appendChild(liElement);
});

// Add the ul element to the HTML document with id 'band'
document.getElementById('band').appendChild(ulElement);
