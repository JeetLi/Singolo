//Окрашивание при наведении и скролле главной страницы
const newOnScroll = (event) => {
    const sections = document.querySelectorAll('section');
    const headerA = document.querySelectorAll('.header_a');
    const heightCoursor = event.pageY;

    sections.forEach((section, key) => {
        if (heightCoursor >= section.offsetTop) {
            headerA.forEach((item) => {
                item.classList.remove('ActiveHover');
            });
            headerA[key].classList.add('ActiveHover');
        }
    });
};
window.addEventListener('mousemove', newOnScroll);
//Окрашивание при наведении и скролле бургера

const hoverOnScroll = (event) => {
    const sections = document.querySelectorAll('section');
    const burgerLi = document.querySelectorAll('.burger__a');
    const heightCoursor = event.pageY;

    sections.forEach((section, key) => {
        if (heightCoursor >= section.offsetTop) {
            burgerLi.forEach((item) => {
                item.classList.remove('ActiveHover');
            });
            burgerLi[key].classList.add('ActiveHover');
        }
    });
};
window.addEventListener('mousemove', hoverOnScroll);
// Слайды
const slider = document.getElementById('slider2');
const leftBtn = document.getElementById('leftBtns');
const rightBtns = document.getElementById('rightBtns');
const contentWrap = document.querySelector('.btns');
const wrapper = document.querySelectorAll('.content');
const arrayBtns = document.querySelectorAll('.content__button');

const changeImg = () => {
    const showImg = document.querySelector('.showSlide');
    const hideImg = document.querySelector('.hideSlide');

    showImg.classList.remove('showSlide');
    showImg.classList.add('hideSlide');
    hideImg.classList.remove('hideSlide');
    hideImg.classList.add('showSlide');

    wrapper.forEach((item) => item.classList.toggle('blueShadow'));
    arrayBtns.forEach((item) => item.classList.toggle('blueClr'));
};

arrayBtns.forEach((item) => item.addEventListener('click', changeImg));

/////////////////////////////////////////////////////////////////////////////////////////////// Выключение экранов
const verticalPhone = document.querySelector('.verticalPhone');
const horizontPhone = document.querySelector('.horizontPhone');

function switchScreenVerticalPhone() {
    const screenVertical = document.querySelector('.screenVerticalPhone');
    screenVertical.classList.toggle('showScreenVertical');
}
function switchscreenHorizontPhone() {
    const screenHorizont = document.querySelector('.screenHorizontPhone');
    screenHorizont.classList.toggle('showScreenHorizont');
}
verticalPhone.addEventListener('click', switchScreenVerticalPhone);
horizontPhone.addEventListener('click', switchscreenHorizontPhone);

// Добавление бордера на кнопки portfolio
const portfolioBtn = document.querySelectorAll('.switchButtons > button');

function addBorderForButton(event) {
    portfolioBtn.forEach((item) => {
        if (event.target.classList.contains('activeButton')) {
           return;
        }
        item.classList.remove('activeButton');
    });
    event.target.classList.toggle('activeButton');
    console.log('done');
}
portfolioBtn.forEach((elem) => elem.addEventListener('click',addBorderForButton ));
// Добавление бордера на картинки portfolio

const portfolioImgs = document.querySelectorAll('.portfolio-img > img');
const portfolioImg = document.querySelector('portfolio-item');

function addBorderOnClick(event) {
    portfolioImgs.forEach((item) => {
        // если другой,то убираем   КОД РАБОЧИЙ
        if (event.target.classList.contains('borderForImg')) {
            return;
        }
        item.classList.remove('borderForImg');
    });
    event.target.classList.toggle('borderForImg');
}
portfolioImgs.forEach((elem) => elem.addEventListener('click', addBorderOnClick));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const activeBorder = document.querySelector('.borderForImg'); // КОД РАБОЧИЙ  v2
// if (activeBorder?.classList.contains('borderForImg')) {
//     activeBorder.classList.remove('borderForImg');
//     if (activeBorder !== event.target) {
//         event.target.classList.toggle('borderForImg');
//     }
// } else {
//     event.target.classList.toggle('borderForImg');
// }
//}
//PortfolioImgs.forEach((elem) => elem.addEventListener('click', addBorderOnClick));

//  Рандомные картинки
const switchAlbumButtons = document.querySelectorAll('.switchButtons > button');

const switchImagesOnAlbum = () => {
    const img = document.querySelectorAll('.portfolio-img > img ');
    const randomIndex = Math.floor(Math.random() * img.length);
    const cutImg = img[randomIndex];
    const newImg = [...img].filter((el, index) => index !== randomIndex);
    newImg.push(cutImg);
    const portfolioImgs = document.querySelector('.portfolio-img');
    portfolioImgs.innerHTML = '';
    newImg.forEach((img) => portfolioImgs.appendChild(img));
};

switchAlbumButtons.forEach((elem) => (elem.onclick = switchImagesOnAlbum));

//  Модальное окно
const changeModalWindow = document.querySelector('.submitBtn');

changeModalWindow.addEventListener('click', (e) => {
    // Открываем модальное окно
    e.preventDefault();
    modalWindow.classList.remove('hide');
    modalWindow.classList.add('show');

    // Добавляем текст в модальное окно
    let textSubject = document.forms.form.elements.ThreeForm.value;
    let textDescription = document.forms.form.elements.fourthForm.value;
    

    if (textSubject.length < 1 && textDescription.length < 1 ) {
        textSubject = "Без темы"; 
        textDescription = "Без описания"; 
    } else if (textDescription.length < 1 ){
        textDescription = "Без описания";
    } else if (textSubject.length > 1 ){
        textDescription = "Без описания";
    } else if (textSubject.length < 1) {
        textSubject = "Без темы";}
    const modal__subject = document.getElementById('modal__subject');
    const modal__description = document.getElementById('modal__description');

    modal__subject.innerHTML = `Subject: ${textSubject}`;
    modal__description.innerHTML = `Description: ${textDescription}`;
});

// закрываем модальное окно
const modalWindow = document.querySelector('.modal');
const modalWall = document.querySelector('.modal__wall');
const modalCloseBtn = document.querySelector('[data-close]');

function closeModal() {
    modalWindow.classList.add('hide');
    modalWindow.classList.remove('show');
}

modalCloseBtn.addEventListener('click', closeModal);

modalWindow.addEventListener('click', (e) => {
    if (e.target === modalWall) {
        closeModal();
    }

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modalWindow.classList.contains('show')) {
            closeModal();
        }
    });
});

// бургер

const burger = document.querySelector('.header__burger-menu');
const burgerButton = document.querySelector('.burger__bottom');
const burger__li = document.querySelectorAll('.burger__li');
const burger__text = document.querySelector('.burger__text');
// const page = document.querySelector.

function hideBurger() {
    burger.classList.toggle('hide');
}

burgerButton.addEventListener('click', (e) => {
    hideBurger();
});

burger.addEventListener('click', (e) => {
    if (e.target === burger) {
        hideBurger();
    }
});

burger__li.forEach((elem) => (elem.onclick = hideBurger));

const textForClipboard = document.querySelectorAll('.clipBoard');
const writeTextForClipboard = (event) => {
    navigator.clipboard.writeText(event.target.textContent);
};

textForClipboard.forEach((elem) => elem.addEventListener('click', writeTextForClipboard));
