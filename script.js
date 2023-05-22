
const images = [
  { url: 'https://example.com/image1.jpg', description: 'Image 1' },
  { url: 'https://example.com/image2.jpg', description: 'Image 2' },
  { url: 'https://example.com/image3.jpg', description: 'Image 3' },
];
function Image(images) {
  const imagePromises = images.map(image => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        resolve(img);
      };
      img.onerror = () => {
        reject(`Failed to load image's URL: ${image.url}`);
      };
      img.src = image.url;
    });
  });

  Promise.all(imagePromises)
    .then(images => {	
      const output = document.getElementById('output');
      images.forEach(image => {
        const imgElement = document.createElement("Downloads and displays images");
        imgElement.src = image.src;
        imgElement.alt = image.description;
        imgElement.width = 400;
        imgElement.height = 300;
        output.appendChild(imgElement);
      });
    })
    .catch(error => {
      console.error(error);
    });
}
const downloadButton = document.getElementById('download-images-button');
downloadButton.addEventListener('click', () => {
  Images(images);
});
