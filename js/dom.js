console.log("Javascript - лучший язык программирования!");
window.addEventListener("DOMContentLoaded",() =>
{ 
  setTimeout(() => {

    // Поменяйте приветствие с "Привет Всем!" на "Привет Виталий Валентинович!".
    document.querySelector("#greeting").innerHTML = "Привет Виталий Валентинович!";

    // Установите фоновый цвет для каждого <li> на yellow.
    document.querySelector("#essentials").style.backgroundColor = "yellow";

    // Создайте тег изображения, установите его атрибут src на http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif, и вложите в div с идентификатором #greeting.
    let helloImage = document.createElement("img");
    helloImage.setAttribute("src", "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif");
    document.querySelector("#greeting").appendChild(helloImage); 

    // Создайте и добавьте ul элемент в конец body с классом "todo-items"
    let ulTodo = document.createElement("ul");
    ulTodo.classList.add("todo-items");
    document.body.append(ulTodo);

    // Пройдитесь по массиву ['приготовить кофе','съесть салатик','поменять подгузник ребёнку','поехать на работу'] и создайте тег li для каждого элемента, например: <li>приготовить кофе</li> Добавьте каждый созданный ранее тег li в вашу конструкцию ul с классом "todo-items".
    let array = ['приготовить кофе','съесть салатик','поменять подгузник ребёнку','поехать на работу'];
    for (let i = 0; i < array.length; i++) {
        let liTodo = document.createElement("li");
        liTodo.textContent = array[i];
        document.querySelector(".todo-items").appendChild(liTodo);
    }

    // Добавьте класс selected к <li> при щелчке по нём. Удалите его из любых других li. Измените изображение, чтобы оно было последним выбранным продуктом питания.
    const selectElement = document.querySelector("#essentials");
    selectElement.addEventListener('click', function(element)
        {
            const select = document.querySelectorAll(".selected");
            const thisEl = element.target;
            Array.from(select).forEach(select =>
                {
                    select.classList.remove('selected')
                });

                thisEl.classList.add('selected');
            let listEl =
            {
                "молоко": "images/milk.jpg",
                "мёд": "images/honey.jpg",
                "вода": "images/water.jpg",
                "вино": "images/wine.jpg",
                "пиво": "images/beer.jpg",
            }

            let text = thisEl.innerText;
            let elList = document.querySelector('#listImg');
            elList.setAttribute('src', listEl[text]);
        });

        const selectTodo = document.querySelector('.todo-items');
        selectTodo.addEventListener('click', function(element)
        {
	        const selected = document.querySelectorAll('.selected');
	        const thisTodo = element.target;
            Array.from(selected).forEach(selected =>
            {
                selected.classList.remove('selected');
            });
            thisTodo.classList.add('selected');
        });

        // Когда на серый div наводится указатель мыши, он удаляется из DOM.
        let grayDiv = document.querySelector("#ghosting");
        grayDiv.addEventListener("mouseover", deleteFromdom, false);
        function deleteFromdom() {
            document.querySelector("body").removeChild(grayDiv);
        }

        // Когда на оранжевый div наводится указатель мыши, его ширина удваивается. Когда мы уходим за пределы div, ширина возвращается к своему первоначальному размеру.
        let orangeDiv = document.querySelector("#resize");
        orangeDiv.addEventListener("mouseover",() => {orangeDiv.style.width = "400px"}, false);
        orangeDiv.addEventListener("mouseout",() => {orangeDiv.style.width = "200px"}, false);

        // Когда кнопка Reset нажата - удалите класс selected из каждого <li> и измените изображение на panic.jpg.
        let resetLi = document.querySelector("#reset")
        resetLi.addEventListener("click", clickReset, false);
        function clickReset () {
            let selectLi = document.querySelectorAll(".selected");
            selectLi.forEach(selectedEl => selectedEl.classList.remove("selected"))
            let panicImg = document.querySelector("#listImg");
            panicImg.setAttribute("src", 'images/panic.jpg');
        }

        // При нажатии клавиши 1, 2, 3, 4, 5, 6, 7, 8, 9 или 0 на странице появляется сообщение «Я НЕНАВИЖУ ЧИСЛААААА!»
        window.addEventListener("keyDownnumb", keyDown, false);
        function keyDown(element) {
            if ((element.keyCode >= 48 && element.keyCode <= 57) || (element.keyCode >= 96 && element.keyCode <= 105)) {
                alert("Я НЕНАВИЖУ ЧИСЛААААА!");    
            }  
        }
}, 2000)});
