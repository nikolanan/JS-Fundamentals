function extract(text){
    let startIndexName = text.lastIndexOf("\\")
    let endIndexName = text.lastIndexOf(".")

    console.log(`File name: ${text.substring(startIndexName+1,endIndexName)}`)
    console.log(`File extension: ${text.substring(endIndexName +1)}`)

}
extract('C:\\Internal\\training-internal\\Template.pptx' )