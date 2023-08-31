const dataForm = document.getElementById('dataForm');
const alertDiv = document.getElementById('alert');

dataForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(dataForm);
    try {
        const response = await fetch('/', {
            method: 'POST',
            body: formData
        });
        if (response.ok) {
            alertDiv.classList.add('alert-success');
            alertDiv.textContent = 'Data has been successfully saved.';
            dataForm.reset();
        } else {
            alertDiv.classList.add('alert-danger');
            alertDiv.textContent = 'An error occurred while saving the data.';
        }
    } catch (error) {
        alertDiv.classList.add('alert-danger');
        alertDiv.textContent = 'An error occurred while saving the data.';
    }
    alertDiv.style.display = 'block';
    setTimeout(() => {
        alertDiv.style.display = 'none';
        alertDiv.textContent = '';
        alertDiv.classList.remove('alert-success', 'alert-danger');
    }, 2000);
});

function refresh() {
    location.reload();
}
