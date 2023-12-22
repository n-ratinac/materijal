function PrikaziUcenike(ucenici){
    console.log("Prikazujem ucenike")
    ucenici.map(e => {
        if(e["odlican"]){
            document.documentElement.innerHTML += e.ime + " " + e.prezime + " 1" + "<br>" 
        }
        else{
        document.documentElement.innerHTML += e.ime + " " + e.prezime + "<br>"
        }
    })
}


function SortPo(prop) {    
    return function(a, b) {    
        if (a[prop] > b[prop]) {    
            return 1;    
        } else if (a[prop] < b[prop]) {    
            return -1;    
        }    
        return 0;    
    }    
}  

function SortirajPrezimena(ucenici) {
    
    // laksi nacin
    // ucenici.sort(SortPo("prezime"))
    // console.log(ucenici);

    for (i = 0; i < ucenici.length - 1; i++)
        for (j = i+1; j < ucenici.length; j++)
            if(ucenici[i]['prezime'] < ucenici[j]['prezime'])
            {
                tmp = ucenici[i];
                ucenici[i] = ucenici[j];
                ucenici[j] = tmp;
            }
}

function SortirajProseke(ucenici){

}

function ObeleziOdlicne(ucenici){
    for (i = 0; i < ucenici.length; i++){
        if(ucenici[i]['prosek']>=4.5){
            ucenici[i]['odlican']=true;
        }
    }
}

