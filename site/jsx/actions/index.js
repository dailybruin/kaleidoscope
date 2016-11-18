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
		quote: quote,
		quoteMaker: quoteMaker,
	}
}