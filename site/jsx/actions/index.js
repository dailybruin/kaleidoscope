export const addImage = (src, credit, caption) => {
    return {
        type: 'ADD_IMAGE',
        src: src,
        credit: credit,
        caption: caption,
    }
}

export const addQuote = (quote, quoteMaker) => {
	return {
		type: 'ADD_QUOTE',
		quoteText: quote,
		quoteSource: quoteMaker,
	}
}

export const addText = (text) => {
    return {
        type: 'ADD_TEXT',
        text: text
    }
}