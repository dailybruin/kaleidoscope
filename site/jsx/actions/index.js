export const addHeader = (title, author, coverImageUrl, key,button) => {
    return{
        type: 'ADD_HEADER',
        title: title,
        author: author,
        url: coverImageUrl,
        key: key,
        button: button,
    }
}

export const addSubhead = (text, key, button) => {
    return{
        type: 'ADD_SUBHEAD',
        subhead: text,
        key: key,
        button: button,
    }
}

export const addImage = (src, credit, caption,key, button) => {
    return {
        type: 'ADD_IMAGE',
        src: src,
        credit: credit,
        caption: caption,
        key: key,
        button: button,

    }
}

export const addQuote = (quote, quoteMaker,key,button) => {
	return {
		type: 'ADD_QUOTE',
		quoteText: quote,
		quoteSource: quoteMaker,
        key: key,
        button: button, 
	}
}

export const addText = (text,key, button) => {
    return {
        type: 'ADD_TEXT',
        text: text,
        key: key,
        button: button,
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

export const deleteComponent = (id) => {
    return {
        type: 'DELETE_COMPONENT',
        database_id:id,
    }
}

// export const updateComponent = ()