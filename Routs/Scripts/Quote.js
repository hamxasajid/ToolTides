// API URL and Key
const API_URL = "https://api.api-ninjas.com/v1/quotes";
const API_KEY = "MTbW70qlq92oy2bLMDF8zw==0fjaYXlG63cEOdcT";

// Function to fetch a random quote
async function getQuote() {
  try {
    let response = await fetch(API_URL, {
      method: "GET",
      headers: { "X-Api-Key": API_KEY },
    });
    let data = await response.json();

    if (data.length > 0) {
      return { quote: data[0].quote, author: data[0].author };
    }
  } catch (error) {
    return { quote: "Failed to load quote.", author: "" };
  }
}

// Function to get Quote of the Day
async function getQuoteOfTheDay() {
  let savedDate = localStorage.getItem("quoteDate");
  let savedQuote = localStorage.getItem("quoteText");
  let savedAuthor = localStorage.getItem("quoteAuthor");

  let today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

  console.log(`Saved Date: ${savedDate}`);
  console.log(`Today: ${today}`);
  console.log(`Saved Quote: ${savedQuote}`);
  console.log(`Saved Author: ${savedAuthor}`);

  if (savedDate === today && savedQuote && savedAuthor) {
    // Use the stored quote if it's the same day
    document.getElementById(
      "quote-of-day"
    ).innerText = `"${savedQuote}" - ${savedAuthor}`;
  } else {
    // Fetch a new quote and store it
    let newQuote = await getQuote();
    console.log(`New Quote: ${newQuote.quote}`);
    console.log(`New Author: ${newQuote.author}`);

    document.getElementById(
      "quote-of-day"
    ).innerText = `"${newQuote.quote}" - ${newQuote.author}`;

    // Store new quote in localStorage with the current date
    localStorage.setItem("quoteDate", today);
    localStorage.setItem("quoteText", newQuote.quote);
    localStorage.setItem("quoteAuthor", newQuote.author);
  }
}

// Function to fetch and update Random Quote
async function updateRandomQuote() {
  let newQuote = await getQuote();
  document.getElementById("quote-display").innerText = `"${newQuote.quote}"`;
}

// Event listener for the "Get New Quote" button
document
  .getElementById("new-quote")
  .addEventListener("click", updateRandomQuote);

// Call Quote of the Day function on page load
getQuoteOfTheDay();
