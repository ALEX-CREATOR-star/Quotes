
// DOM elements
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote-btn');

// Function to fetch a random quote
async function fetchQuote() {
  try {
    // Disable button while loading
    newQuoteBtn.disabled = true;
    newQuoteBtn.textContent = 'Loading...';
    
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    
    // Update the quote and author
    quoteText.textContent = `"${data.content}"`;
    quoteAuthor.textContent = `— ${data.author}`;
    
  } catch (error) {
    console.error('Error fetching quote:', error);
    quoteText.textContent = 'Sorry, unable to load quote at this time.';
    quoteAuthor.textContent = '';
  } finally {
    // Re-enable button
    newQuoteBtn.disabled = false;
    newQuoteBtn.textContent = 'New Quote';
  }
}

// Event listener for the button
newQuoteBtn.addEventListener('click', fetchQuote);

// Load initial quote when page loads
window.addEventListener('load', fetchQuote);
