export const addImage = (src, credit, caption) => {
    return {
        type: 'ADD_IMAGE',
        src: src,
        credit: credit,
        caption: caption,
    }
}