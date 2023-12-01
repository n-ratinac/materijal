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
    state[selector].push(task)
    console.log(`adding new item to ${selector}`)
    $(`#${selector}`).trigger('data:dirty')
}

