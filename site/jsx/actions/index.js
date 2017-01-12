export const addHeader = (title, author, coverImageUrl) => {
    return{
        type: 'ADD_HEADER',
        title: title,
        author: author,
        url: coverImageUrl
    }
}

export const addSubhead = (text) => {
    return{
        type: 'ADD_SUBHEAD',
        subhead: text
    }
}

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
