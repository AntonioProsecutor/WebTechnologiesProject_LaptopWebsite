function fetchLaptopsFromLocalStorage(){
   const laptops = JSON.parse(localStorage.getItem('laptops')) || [];
   const tableBody = $('#tableBody');


   
   tableBody.html('');


   if (laptops.length === 0) {
       tableBody.html(`
           <tr>
               <td colspan="11" class="text-center text-muted py-4">
                   No laptops to buy for now. Check again later
               </td>
           </tr>
       `);
       return;
   }


]
   students.forEach((student) => {
     const YearOfproduction=parseInt(laptops.YearOfproduction)
     const price=parseFloat(laptops.price)
     const date= new Date()
     const year= date.getFullYear()
      let current_price;
     if(year-YearOfproduction<=15)
        current_price=price*Math.pow(0.9, year-YearOfproduction);
    else current_price=price*0.2;
        
       const row = `
           <tr>
               <td>${laptop.name}</td>
               <td>${laptop.display}</td>
                <td>${laptop.productId}</td>
               <td>${laptop.processor}</td>
               <td>${laptop.ram} GB</td>
               <td>${laptop.storage} GB</td>
               <td>${laptop.productId}</td>
                <td>${laptop.GraphicsCard}</td>
                <td>${laptop.SystemType}</td>
               <td>${YearOfproduction}</td>
                <td>${laptop.stock}</td>
                 <td>${current_price} $</td>
               <td>
                   <button class="btn btn-sm btn-warning me-1" onclick="editLaptop(${student.id})">Edit</button>
                   <button class="btn btn-sm btn-danger" onclick="deleteLaptop(${student.id})">Delete</button>
               </td>
           </tr>
       `;
       tableBody.append(row);
   });

}

function editLaptop(laptopId) {
    localStorage.setItem('laptoptToEditId', studentId);
    window.location.href = 'edit-laptop.html';
}

function deletelaptop(studentId) {
    localStorage.setItem('laptopToDeleteId', studentId);
    window.location.href = 'delete-laptop.html';
}

$(document).on('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    

    fetchLaptopsFromLocalStorage(); 

});