import { v1 as uuidv1 } from 'uuid'
let tasks = []

export const addTask = (desc) => {
    if (desc === '') {
        return
    }

    let tmp = {
        id: uuidv1,
        desc: desc,
    }
    tasks.push(tmp)
}

export const removeTask = (id) => {
    let index = tasks.findIndex((task) => {
        return task.id === id
    }) 
    tasks.splice(index,1)
}


export { tasks }