async function openModal() {
    const modal = document.getElementById('modal');
    const modalBackground = document.getElementById('modal-background');

    document.getElementById('body').classList.add('scrollFreeze');

    
    modal.classList.remove('hidden');
    modalBackground.classList.remove('hidden');

    modal.classList.add('movein');
    modalBackground.classList.add('fadein');

    await delay(500);

    modal.classList.remove('movein');
    modalBackground.classList.remove('fadein');
}


async function closeModal() {
    const modal = document.getElementById('modal');
    const modalBackground = document.getElementById('modal-background');

    document.getElementById('body').classList.remove('scrollFreeze');

    modal.classList.add('moveoff');
    modalBackground.classList.add('fadeout');

    await delay(500);

    modal.classList.add('hidden');
    modalBackground.classList.add('hidden');

    modal.classList.remove('moveoff');
    modalBackground.classList.remove('fadeout');
}


function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}