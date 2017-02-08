export const addHeader = (title, author, coverImageUrl, key) => {
    return{
        type: 'ADD_HEADER',
        title: title,
        author: author,
        url: coverImageUrl,
        key: key
    }
}

export const addSubhead = (text, key) => {
    return{
        type: 'ADD_SUBHEAD',
        subhead: text,
        key: key
    }
}

export const addImage = (src, credit, caption,key) => {
    return {
        type: 'ADD_IMAGE',
        src: src,
        credit: credit,
        caption: caption,
        key: key
    }
}

export const addQuote = (quote, quoteMaker,key) => {
	return {
		type: 'ADD_QUOTE',
		quoteText: quote,
		quoteSource: quoteMaker,
        key: key
	}
}

export const addText = (text,key) => {
    return {
        type: 'ADD_TEXT',
        text: text,
        key: key
    }
}

export const addMetatags = (title, og_image) => {
    return {
        type: 'NEW_HEADER',
        title: title,
        og_title: title,
        og_image: og_image,
        og_description: "",

    }
}