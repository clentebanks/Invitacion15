document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById('image-gallery');
  const totalImages = 37; // Adjust the number of images
  const imagePath = '/assets/img/sesion_fotos/'; // Path to your image folder

  function createImageElement(i) {
    // Create outer column div
    const colDiv = document.createElement('div');
    colDiv.classList.add('col-lg-4', 'col-md-4');
    
    // Create memory div
    const memoryDiv = document.createElement('div');
    memoryDiv.classList.add('memory');

    // Create memories-img div
    const memoriesImgDiv = document.createElement('div');
    memoriesImgDiv.classList.add('memories-img');

    // Create img element
    const img = document.createElement('img');
    img.src = `${imagePath}memories${i}.jpg`;  // Adjust image name if needed
    img.alt = `Memory ${i}`;

    // Create menorie-icon div
    const menorieIconDiv = document.createElement('div');
    menorieIconDiv.classList.add('menorie-icon');
    menorieIconDiv.setAttribute('href', `${imagePath}memories${i}.jpg`);

    // Create the icon (i element)
    const icon = document.createElement('i');
    icon.classList.add('ti-plus'); // Assuming 'ti-plus' is the class for the icon

    // Append the elements together
    menorieIconDiv.appendChild(icon);  // Add icon to the menorie-icon div
    memoriesImgDiv.appendChild(img);   // Add img to memories-img div
    memoriesImgDiv.appendChild(menorieIconDiv); // Add menorie-icon to memories-img
    memoryDiv.appendChild(memoriesImgDiv); // Add memories-img div to memory div
    colDiv.appendChild(memoryDiv); // Add memory div to colDiv

    // Append colDiv to the gallery container
    gallery.appendChild(colDiv);
  }

  // Loop to create and add images
  for (let i = 1; i <= totalImages; i++) {
    createImageElement(i);
  }
});
