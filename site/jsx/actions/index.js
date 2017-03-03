export const addHeader = (title, author, coverImageUrl, key,button,comp_type) => {
    return{
        type: 'ADD_HEADER',
        title: title,
        author: author,
        url: coverImageUrl,
        key: key,
        button: button,
        comp_type: comp_type,
    }
}

export const addSubhead = (text, key, button, comp_type) => {
    return{
        type: 'ADD_SUBHEAD',
        subhead: text,
        key: key,
        button: button,
        comp_type: comp_type,

    }
}

export const addImage = (src, credit, caption,key, button,comp_type) => {
    return {
        type: 'ADD_IMAGE',
        src: src,
        credit: credit,
        caption: caption,
        key: key,
        button: button,
        comp_type:comp_type,
    }
}

export const addQuote = (quote, quoteMaker,key,button,comp_type) => {
        console.log('In action giver right now')
        console.log(key)
	return {
		type: 'ADD_QUOTE',
		quoteText: quote,
		quoteSource: quoteMaker,
        key: key,
        button: button,
        comp_type: comp_type,
	}
}

export const addText = (text,key, button,comp_type) => {

    return {
        type: 'ADD_TEXT',
        text: text,
        key: key,
        button: button,
        comp_type: comp_type,
    }
}

export const addMetatags = (title, og_image, key) => {
    return {
        type: 'NEW_HEADER',
        title: title,
        og_title: title,
        og_image: og_image,
        og_description: "",
        key: key,

    }
}

export const updateStyles = (css) => {
    return {
        type: 'UPDATE_STYLES',
        css: css
    }
}

export const deleteComponent = (id) => {
    return {
        type: 'DELETE_COMPONENT',
        database_id:id,
    }
}

export const updateComponentList = (new_list) => {
    return {
        type: 'UPDATE_COMPONENT_LIST',
        new_list: new_list,
    }
}

export const resetHeader = (key) => {
    return {
        type: 'RESET_HEADER',
        key: key,
    }
}

// export const updateComponent = ()