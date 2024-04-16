function attachEventsListeners() {

    const daysBtn = document
        .getElementById('daysBtn');
    const hoursBtn = document
        .getElementById('hoursBtn');
    const minutesBtn = document
        .getElementById('minutesBtn');
    const secondsBtn = document
        .getElementById('secondsBtn');

    daysBtn.addEventListener('click', convertFromDays);
    hoursBtn.addEventListener('click', convertFromHours);
    minutesBtn.addEventListener('click', convertFromMinutes);
    secondsBtn.addEventListener('click', convertFromSeconds);


    function convertFromDays(e) {
        const days = Number(e.currentTarget.parentNode.querySelector('#days').value);
        document.getElementById('hours').value = days * 24;
        document.getElementById('minutes').value = days * 24 * 60;
        document.getElementById('seconds').value = days * 24 * 60 * 60;
    }

    function convertFromHours(e) {
        const hours = Number(e.currentTarget.parentNode.querySelector('#hours').value);
        document.getElementById('days').value =hours / 24;
        document.getElementById('minutes').value = hours  * 60;
        document.getElementById('seconds').value = hours * 60 * 60;
    }

    function convertFromMinutes(e) {
        const minutes = Number(e.currentTarget.parentNode.querySelector('#minutes').value);
        document.getElementById('days').value = (minutes / 60) / 24;
        document.getElementById('hours').value = minutes / 60;
        document.getElementById('seconds').value = minutes * 24 * 60 * 60;
    }

    function convertFromSeconds(e) {
        const seconds = Number(e.currentTarget.parentNode.querySelector('#seconds').value);
        document.getElementById('days').value = ((seconds / 60) /60) / 24;
        document.getElementById('hours').value = (seconds / 60) / 60;
        document.getElementById('minutes').value = seconds / 60;

    }
}