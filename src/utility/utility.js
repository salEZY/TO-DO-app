let tasks = []
let counter = 0

export const addTask = (desc) => {
    if (desc === '') {
        console.log('ne');
        
    }
    counter++
    for(let task of tasks){
        if(counter === task.id){
            counter++
        }
    }

    let tmp = {
        id: counter,
        desc: desc,
        done: false
    }
    tasks.push(tmp)
    console.log('da');
    
}

export const removeTask = (id) => {
    let index
    
    index = tasks.findIndex((task) => {
        return task.id === id
    }) 
    tasks.splice(index,1)
}


export { tasks }