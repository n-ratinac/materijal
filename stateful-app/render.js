function buildDynamicDOM(state){
    state = Object.entries(state)
    console.log(state)
    state.forEach(([key, value]) => {
        $div = $(`<div class='col' id=${key}></div>`)
        $div.on("dirty", () => render(key))
        $('#root').append(`<div class='col' id=${key} ></div>`)
    });
}

function renderTask(task){
    $card = $(`<div class='card'></div>`)
    $cardBody = $(`<div class='card-body'>${task['title']}</div>`)
    $card.append($cardBody)
    return $cardBody
}

function render(selector){
    $(selector).html('');
    data = state[selector]
    data.map(d => $(selector).append(renderTask(d)))
}