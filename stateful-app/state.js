state = {
    "todo": [],
    "doing" : [],
    "done" : [],
}

function initState(data){
    data.map(d => add(d['status'], d));
    console.log("initialized state");
}

function add(selector, task){
    let id = "#"+selector
    state[selector].push(task)
    console.log(`adding new item to ${selector}`)
    $(id).trigger('data:dirty')
}

function remove(selector, task){
    let id = "#"+selector
    state[selector] = state[selector].filter(x => x != task)
    console.log(`deleting item from ${selector}`)
    $(id).trigger('data:dirty')
}

const statuses = ['todo', 'doing', 'done']