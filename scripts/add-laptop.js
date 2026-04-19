function generateLaptopId() {
    const laptops = JSON.parse(localStorage.getItem('laptops')) || [];
    const existingIds = laptops.map(l => l.id);

    let newId;
    do {
        newId = Math.floor(Math.random() * 15000) + 1;
    } while (existingIds.includes(newId));

    return newId;
}

function saveLaptopInfo(event){
    event.preventDefault();

    let $name = $('#name').val();
    let laptopID = generateLaptopId();
    let $processor = $('#processor').val();
    let $ram = $('#ram').val();
    let $storage = $('#storage').val();
    let $graphics = $('#graphics').val();
    let $display = $('#display').val();
    let $system = $('#system').val();
    let $year = $('#year').val();
    let $stock = $('#stock').val();
    let $price = $('#price').val();

    let newLaptop = {
        id: laptopID,
        productId: String(laptopID).padStart(5, '0'),   // ← now just 5 digits
        name: $name,
        processor: $processor,
        ram: $ram,
        storage: $storage,
        graphics: $graphics,
        display: $display,
        system: $system,
        year: $year,
        stock: $stock,
        price: $price
    };

    let laptops = JSON.parse(localStorage.getItem('laptops')) || [];
    laptops.push(newLaptop);
    localStorage.setItem('laptops', JSON.stringify(laptops));

    alert('Laptop added successfully!');
    window.location.href = 'index.html';
}