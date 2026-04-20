function loadLaptopData() {
    const laptopId = parseInt(localStorage.getItem('laptopToEditId'));

    if (!laptopId) {
        alert('No laptop selected for editing');
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

    // Populate the form
    $('#productId').val(laptop.productId);
    $('#name').val(laptop.name);
    $('#processor').val(laptop.processor);
    $('#ram').val(laptop.ram);
    $('#storage').val(laptop.storage);
    $('#graphics').val(laptop.graphics);
    $('#display').val(laptop.display);
    $('#system').val(laptop.system);
    $('#year').val(laptop.year);
    $('#stock').val(laptop.stock);
    $('#price').val(laptop.price);
}

function updateLaptop(event) {
    event.preventDefault();

    const laptopId = parseInt(localStorage.getItem('laptopToEditId'));
    let laptops = JSON.parse(localStorage.getItem('laptops')) || [];
    const laptopIndex = laptops.findIndex(l => l.id === laptopId);

    if (laptopIndex === -1) {
        alert('Laptop not found');
        window.location.href = 'index.html';
        return;
    }

    // Update the laptop
    laptops[laptopIndex] = {
        id: laptopId,
        productId: $('#productId').val(),
        name: $('#name').val().trim(),
        processor: $('#processor').val().trim(),
        ram: parseInt($('#ram').val()),
        storage: $('#storage').val().trim(),
        graphics: $('#graphics').val().trim(),
        display: $('#display').val().trim(),
        system: $('#system').val().trim(),
        year: parseInt($('#year').val()),
        stock: parseInt($('#stock').val()),
        price: parseFloat($('#price').val())
    };

    localStorage.setItem('laptops', JSON.stringify(laptops));
    localStorage.removeItem('laptopToEditId');

    alert('Laptop updated successfully!');
    window.location.href = 'index.html';
}

$(document).on('DOMContentLoaded', function() {
    loadLaptopData();
});