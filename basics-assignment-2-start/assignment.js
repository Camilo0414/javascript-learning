const task3Element = document.getElementById('task-3');

function show() {
    alert('This means war!')
}

function showName(name) {
    alert(name)
}

showName('jhon');
task3Element.addEventListener('click', show);

function combo(str1,str2,str3) {
    return `${str1} ${str2} ${str3}`
}

result = combo('hola','mundo','cruel');

alert(result)