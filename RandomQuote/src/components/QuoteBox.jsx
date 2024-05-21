// src/components/QuoteBox.js
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const QuoteBox = () => {
	const [quote, setQuote] = useState("");
	const [author, setAuthor] = useState("");

	const fetchQuote = async () => {
		const response = await fetch("https://api.quotable.io/random");
		const data = await response.json();
		setQuote(data.content);
		setAuthor(data.author);
	};

	useEffect(() => {
		fetchQuote();
	}, []);

	return (
		<div id="quote-box" className="quote-box">
			<div id="text">{quote}</div>
			<div id="author">{author}</div>
			<button id="new-quote" onClick={fetchQuote}>
				New Quote
			</button>
			<a
				id="tweet-quote"
				href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
					`"${quote}" - ${author}`
				)}`}
				target="_blank"
				rel="noopener noreferrer"
			>
				<FontAwesomeIcon icon={faTwitter} /> Tweet Quote
			</a>
		</div>
	);
};

export default QuoteBox;
