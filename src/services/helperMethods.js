export const firstCapital = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1)
}

export const positionElementToTheTop = async (element, delayInMs) => {
    // let head = document.getElementById(`publicPlansAccordionCard${index}`);
    // console.log(element);

    // let navbarHeight = document.getElementById('mainNavBar').getBoundingClientRect().height;
    let navbarHeight = 0;
    // head.scrollIntoView({ behavior: 'smooth', block: 'start' });
    await new Promise(resolve => setTimeout(resolve, delayInMs));
    var ElementTop = element.getBoundingClientRect().top;
    // console.log("headTop", headTop);

    window.scrollBy({
        top: ElementTop - navbarHeight,
        // top: headTop,
        left: 0,
        behavior: 'smooth'
    });
}

