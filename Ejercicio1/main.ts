type Quote = {
  quoteText: string,
  quoteAuthor: string,
  quoteGenre: string,
}

const fetchData: () => Promise<void> = async (): Promise<void> => {
  try {
    const response = await fetch(
      "https://quote-garden.onrender.com/api/v3/quotes?limit=30"
    );

    const data: { data: Quote[] } = await response.json();
    // console.log("API Response: ", data);
    data.data.forEach((quote: Quote): void => {
      console.log("---------------------------------")
      console.log("Genre: " + quote.quoteGenre);
      console.log("Author: " + quote.quoteAuthor);
      console.log("Quote: " + quote.quoteText);
    })

    console.log("\nTotal Quotes fetched: " + data.data.length);
  } catch (error) {
    console.log(error);
  }
};

await fetchData();