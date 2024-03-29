document.getElementById('form-suhu').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const suhu = parseFloat(document.getElementById('suhu').value);
    const tipeSuhu = document.getElementById('tipe-suhu').value;
  
    if (isNaN(suhu)) {
        alert('Masukkan suhu yang valid');
        return;
    }
  
    let hasilKonversi;
  
    if (tipeSuhu === 'celsius') {
        hasilKonversi = (suhu * 9/5) + 32;
    } else {
        hasilKonversi = (suhu - 32) * 5/9;
    }
  
    document.getElementById('hasil-konversi').textContent = `Hasil Konversi: ${hasilKonversi.toFixed(2)} ${tipeSuhu === 'celsius' ? 'Fahrenheit' : 'Celsius'}`;
  });