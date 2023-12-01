function buildDynamicDOM(state){
    state = Object.entries(state)
    console.log(state)
    state.forEach(([key, value]) => {
        $div = $(`<div class='col' id=${key}></div>`)
        $div.on("data:dirty", () => {
            render(key); 
            console.log("Finished rendering");
        })
        $('#root').append($div)
    });
}

function renderTask(task){
    $card = $(`<div class='card'></div>`)
    $cardBody = $(`<div class='card-body'>${task['title']}</div>`)
    $card.append($cardBody)
    return $cardBody
}

function render(selector){
    let id = "#"+selector
    $(id).html('');
    data = state[selector]
    data.map(d => $(id).append(renderTask(d)))
}