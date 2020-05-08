import { v1 as uuidv1 } from 'uuid'
let tasks = []

export const addTask = (desc) => {
    if (desc === '') {
        return
    }

    let tmp = {
        id: uuidv1,
        desc: desc,
        done: false
    }
    tasks.push(tmp)
}

export const removeTask = (id) => {
    let index = tasks.findIndex((task) => {
        return task.id === id
    }) 
    tasks.splice(index,1)
}

export const checkTask = (id) => {
    let index;
    for(let i = 0; i < tasks.length; i++){
        if(id === tasks[i].id){
            index = i
            break;
        }
    }
    tasks[index].done = !tasks[index].done
}


export { tasks }