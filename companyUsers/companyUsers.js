function companyUsers(data){
    object = {

    }
    
    for(let el of data){
        
        let [name,Id] = el.split(" -> ")
        if(!object.hasOwnProperty(name)){
            object[name] = []
        }
        if(!object[name].includes(Id)){
            object[name].push(Id)
        }    
    }
    let arr = []
    for(let [name,value] of Object.entries(object)){
        
        arr.push(name)
    } 
    let sortedArr = arr.sort((a,b) => a.localeCompare(b))

    for(let el of sortedArr){
        console.log(el)
        for(let ids of object[el]){
            console.log(`-- ${ids}`)
        }
    }

}

companyUsers(['Acer -> AA12345','Lenovo -> BB12345', 'Microsoft -> CC12345','HP -> BB12345'
    ])