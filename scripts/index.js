function loadLaptops(){
    const laptops = JSON.parse(localStorage.getItem('laptops')) || [];
    const tableBody = $('#tableBody');

    tableBody.html('');

    if (laptops.length === 0) {
        tableBody.html(`
            <tr>
                <td colspan="12" class="text-center text-muted py-4">
                    No laptops added yet. Click "+ Add Laptop" to get started.
                </td>
            </tr>
        `);
        return;
    }

    laptops.forEach((laptop) => {
        const row = `
            <tr>
                <td>${laptop.name}</td>
                <td>${laptop.productId}</td>
                <td>${laptop.processor}</td>
                <td>${laptop.ram} GB</td>
                <td>${laptop.storage}</td>
                <td>${laptop.graphics}</td>
                <td>${laptop.display}</td>
                <td>${laptop.system}</td>
                <td>${laptop.year}</td>
                <td>${laptop.stock}</td>
                <td>$${parseFloat(laptop.price).toFixed(2)}</td>
                <td>
                    <button class="btn btn-sm btn-warning me-1" onclick="editLaptop(${laptop.id})">Edit</button>
                    <button class="btn btn-sm btn-danger" onclick="deleteLaptop(${laptop.id})">Delete</button>
                </td>
            </tr>
        `;
        tableBody.append(row);
    });
}

function editLaptop(id) {
    localStorage.setItem('laptopToEditId', id);
    window.location.href = 'edit-laptop.html';
}

function deleteLaptop(id) {
    localStorage.setItem('laptopToDeleteId', id);
    window.location.href = 'delete-laptop.html';
}

$(document).on('DOMContentLoaded', () => {
    loadLaptops();
});