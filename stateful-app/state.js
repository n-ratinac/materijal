state = {
    "todo": [],
    "doing" : [],
    "done" : [],
}

function initState(data){
    data.map(d => add(d['status'], d));
}

function add(selector, task){
    state[selector].push(task)
    $(selector).trigger('dirty')
}

