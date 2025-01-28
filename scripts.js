document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector(button.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
function requestService(service) {
    alert(`You have selected the ${service} service. Proceed to the request form.`);
    // Redirect to a request form page or open a modal
    // window.location.href = 'request-form.html?service=' + encodeURIComponent(service);
}
function openForm(service) {
    document.getElementById('serviceName').value = service;
    document.getElementById('serviceFormModal').style.display = 'block';
}

function closeForm() {
    document.getElementById('serviceFormModal').style.display = 'none';
}

document.getElementById('serviceForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Service request submitted!');
    closeForm();
});
document.getElementById('serviceForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        alert('Thank you! Your request has been taken.');
        // Optionally, you can reset the form or close the modal
        this.reset();
        closeForm(); // Close the modal if needed
    });

    function closeForm() {
        document.getElementById('serviceFormModal').style.display = 'none';
    }
document.getElementById('serviceForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        const messageContainer = document.createElement('div');
        messageContainer.textContent = 'Thank you! Your request has been taken.';
        messageContainer.className = 'confirmation-message';
        document.body.appendChild(messageContainer);
        // Reset form or close modal if needed
        this.reset();
        closeForm(); // Close the modal if needed
    });

    function closeForm() {
        document.getElementById('serviceFormModal').style.display = 'none';
    }

