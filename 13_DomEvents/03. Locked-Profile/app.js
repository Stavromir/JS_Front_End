function lockedProfile() {

    const profileButtons = document
        .querySelectorAll('button');


    for (let button of profileButtons) {
        button.addEventListener('click', profileInfo);
        console.log(button);
    }

    function profileInfo(e) {
        const parentDiv = e.currentTarget.parentNode;
        const buttonText = parentDiv.querySelector('button').textContent;
        let profileIsLocked = parentDiv
            .querySelector("input[type='radio']").checked;
        let hiddenInfo = parentDiv.querySelector('div');

        if (!profileIsLocked && buttonText === 'Show more') {
            hiddenInfo.style.display = 'block';
            parentDiv.querySelector('button').textContent = 'Hide it';
        }

        if (!profileIsLocked && buttonText === 'Hide it') {
            hiddenInfo.style.display = 'none';
            parentDiv.querySelector('button').textContent = 'Show more';
        }
    }

}