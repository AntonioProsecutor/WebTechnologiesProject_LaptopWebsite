function loadLaptopInfo() {
    const laptopId = parseInt(localStorage.getItem('laptopToDeleteId'));

    if (!laptopId) {
        alert('No laptop selected for deletion');
        window.location.href = 'index.html';
        return;
    }

    const laptops = JSON.parse(localStorage.getItem('laptops')) || [];
    const laptop = laptops.find(l => l.id === laptopId);

    if (!laptop) {
        alert('Laptop not found');
        window.location.href = 'index.html';
        return;
    }

    // Show exactly what you asked for
    $('#infoName').text(laptop.name);
    $('#infoId').text(laptop.productId);
    $('#infoProcessor').text(laptop.processor);
    $('#infoSystem').text(laptop.system);
}

function confirmDelete() {
    const laptopId = parseInt(localStorage.getItem('laptopToDeleteId'));
    let laptops = JSON.parse(localStorage.getItem('laptops')) || [];

    laptops = laptops.filter(l => l.id !== laptopId);

    localStorage.setItem('laptops', JSON.stringify(laptops));
    localStorage.removeItem('laptopToDeleteId');

    alert('Laptop deleted successfully!');
    window.location.href = 'index.html';
}

$(document).on('DOMContentLoaded', function() {
    loadLaptopInfo();

    $('#confirmDeleteBtn').on('click', confirmDelete);
});