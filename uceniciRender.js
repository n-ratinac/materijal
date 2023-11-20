var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script);

function renderUcenika(u){
    $card = $(`<div class='card col ${u["odeljenje"]}'></div>`)
    $cardBody = $("<div class='card-body d-flex flex-column align-items-center gap-3'></div>")
    $card.append($cardBody)
    $cardBody.text(u['ime'] + " " + u['prezime'])
    $badge = $(`<span class='badge bg-primary w-auto'>Prosek: ${u['prosek']}</span>`)
    $cardBody.append($badge)
    $odeljenje = $(`<span class='badge bg-success w-auto'>${u['odeljenje']}</span>`)
    $cardBody.prepend($odeljenje)
    return $card
}

function renderListuUcenika(target, data){
    sortirajPoPrezimenu(data)
    data.map(u => $(target).append(renderUcenika(u)))
}

function sortirajPoProseku(ucenici) {
    for (i = 0; i < ucenici.length - 1; i++)
        for (j = i+1; j < ucenici.length; j++)
            if(ucenici[i]['prosek'] < ucenici[j]['prosek'])
            {
                tmp = ucenici[i]
                ucenici[i] = ucenici[j]
                ucenici[j] = tmp
            }
}
function sortirajPoPrezimenu(ucenici){
    ucenici.sort((a,b)=>a['prezime'].localeCompare(b['prezime'] ))
}



