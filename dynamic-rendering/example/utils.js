function sortBy(criteria){
    return (a, b) => {
        if (a[criteria] > b[criteria])
            return 1;
        else if (a[criteria] < b[criteria])
            return -1;
        else
            return 0;
    }
}

function sort(arr, criteria){
    arr.sort(sortBy(criteria))
}