function handleCheck(checkbox){
    targetClass = checkbox.getAttribute('data-target-class')
    console.log(targetClass)
    if (checkbox.checked == true){
        $(targetClass).show()
    }
    else
        $(targetClass).hide()
}