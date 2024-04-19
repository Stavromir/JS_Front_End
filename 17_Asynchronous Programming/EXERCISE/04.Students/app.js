async function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/collections/students';

    const tableBody = document.querySelector('tbody');
    const addStudentButton = document.getElementById('submit');
    addStudentButton.addEventListener('click', addNewStudent)


    const response = await fetch(baseUrl);
    const data = await response.json();

    Object.values(data).forEach(student => {
        fillRowData(student);
    })

    async function addNewStudent() {
        const inputFields = document.querySelectorAll('input');
        const firstName = inputFields[0].value;
        const lastName = inputFields[1].value;
        const facultyNumber = inputFields[2].value;
        const grade = inputFields[3].value;

        const areFilledProper = firstName !== '' && lastName !== '' && facultyNumber !== ''
            && grade !== '';

        if (areFilledProper) {
            const newStudent = {
                firstName,
                lastName,
                facultyNumber,
                grade
            }

            const response = await fetch(baseUrl, {
                method: 'post',
                body: JSON.stringify(newStudent)
            });

            fillRowData(newStudent);
        }


    }

    function fillRowData(student) {
        const tableRow = document.createElement('tr');
        tableRow.innerHTML = `
    <tr>
        <td>${student.firstName}</td>
        <td>${student.lastName}</td>
        <td>${student.facultyNumber}</td>
        <td>${student.grade}</td>
    </tr>
   `
        tableBody.appendChild(tableRow);
    }
}

attachEvents();