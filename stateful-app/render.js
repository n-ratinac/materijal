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
    $buttonLeft = $(`<button class='btn btn-primary'><i class="fa-solid fa-chevron-left"></i></button>`)
    $buttonRight= $(`<button class='btn btn-primary'><i class="fa-solid fa-chevron-right"></i></button>`)
    $buttons = $(`<div class='d-flex justify-content-evenly'></div>`)

    $buttonRight.on('click', () => {
        selector = task['status']
        remove(selector , task)
        nextSelectorIdx = statuses.indexOf(selector) + 1
        nextSelector = statuses[nextSelectorIdx]
        task['status'] = nextSelector
        add(nextSelector, task)
    })
    $buttonLeft.on('click', () => {
        selector = task['status']
        remove(selector , task)
        nextSelectorIdx = statuses.indexOf(selector) - 1
        nextSelector = statuses[nextSelectorIdx]
        task['status'] = nextSelector
        add(nextSelector, task)
    })
    switch (task['status']) {
        case 'todo':
            $buttons.append($buttonRight)
            break;
        case 'doing':
            $buttons.append($buttonLeft).append($buttonRight)
            break;
        case 'done':
            $buttons.append($buttonLeft)
            break;
    }
    $cardFooter = $(`<div class='card-footer'></div>`)
    $cardFooter.append($buttons)
    $card.append($cardFooter)
    return $card
}

function render(selector){
    let id = "#"+selector
    $(id).html('');
    data = state[selector]
    data.map(d => $(id).append(renderTask(d)))
}