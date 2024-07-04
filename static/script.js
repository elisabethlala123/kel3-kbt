// Memuat model TensorFlow.js dari file CalorieFood.h5
let model;
async function loadModel() {
    model = await tf.loadLayersModel('path/to/CalorieFood/model.json');
    console.log('Model loaded successfully');
}

// Fungsi untuk memproses gambar yang diunggah dan melakukan prediksi
async function predictCalories() {
    const foodImage = document.getElementById('foodImage').files[0];
    const img = new Image();
    img.src = URL.createObjectURL(foodImage);
    img.onload = async function() {
        const tensor = tf.browser.fromPixels(img)
            .resizeNearestNeighbor([224, 224])
            .toFloat()
            .expandDims();
        
        const predictions = await model.predict(tensor).data();
        const caloriePrediction = predictions[0];
        const foodTypePrediction = predictions[1]; // Adjust index based on your model output
        
        document.getElementById('caloriePrediction').innerText = `Prediksi Kalori: ${caloriePrediction} kkal`;
        document.getElementById('foodPreview').src = img.src;
        document.getElementById('result').classList.remove('hidden');
    }
}

// Memanggil loadModel saat halaman dimuat
loadModel();
