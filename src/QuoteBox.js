import { useState } from "react";
import Data from "./Quotes.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faQuoteLeft, faQuoteRight} from "@fortawesome/free-solid-svg-icons"
import {faTwitterSquare} from "@fortawesome/free-brands-svg-icons";
import QuoteChanger from "./Button"

let randomIndex = Math.floor(Math.random()*103);
const quotes = Data.quotes; 
let simbols = () => {
	var letters = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
	var number = (Math.random()*15).toFixed(0);
	return letters[number];
};	
let colorHEX = () => {
	var color = "";
	for(var i=0;i<6;i++){
		color += simbols()
	}
	return "#" + color;
};

const QuoteBox = () => {
    const [index, setIndex] = useState(randomIndex);  
    const [color, setColor] = useState(colorHEX); 
    const action = () => {
        setIndex(Math.floor(Math.random()*103));
        setColor(colorHEX)        
    };
    let encodedQuote = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(quotes[index].quote) + " -" + encodeURIComponent(quotes[index].author) + "."
    
    return (
        <div className="container" style={{backgroundColor: color}}>
            <div className="quote-box">
                <FontAwesomeIcon icon={faQuoteLeft}/>
                <h3>{quotes[index].quote}</h3>
                <div className="position">
                    <FontAwesomeIcon icon={faQuoteRight} />
                </div>                       
                <p>-{quotes[index].author}</p>
                <div className="sub-container">
                    <a href={encodedQuote} target="_blank" rel="noreferrer " className="icon-position">
                        <FontAwesomeIcon icon={faTwitterSquare} className="icon"/>
                    </a>                                    
                    <QuoteChanger action={action}/>                                              
                </div>
            </div>
        </div>               
    )     
};

export default QuoteBox