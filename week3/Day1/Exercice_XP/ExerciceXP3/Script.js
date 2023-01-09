let divat = document.getElementById('navBar')

divat.setAttribute("id","socialNetworkNavigation")
let elementDiv = divat.firstElementChild
let constli = document.createElement('li')
let consta = document.createElement('a')
let text = document.textContent = 'Soro kolo'
let divli = elementDiv.appendChild(constli)
let lia = divli.appendChild(consta)
let atext = lia.append(text)
let lastenfant = elementDiv.lastElementChild
lastenfant.setAttribute('href','#')

