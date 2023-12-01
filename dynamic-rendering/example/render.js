function renderStudent(s){
    $card = $(`<div class='card col ${s["class"]}'></div>`)
    $cardBody = $("<div class='card-body d-flex flex-column align-items-center gap-3'></div>")
    $card.append($cardBody)
    $cardBody.text(s['name'] + " " + s['surname'])
    $badge = $(`<span class='badge bg-primary w-auto'>GPA: ${s['GPA']}</span>`)
    $cardBody.append($badge)
    $class = $(`<span class='badge bg-success w-auto'>${s['class']}</span>`)
    $cardBody.prepend($class)
    return $card
}

function renderStudentList(target, data){
    data.map(s => $(target).append(renderStudent(s)))
}





