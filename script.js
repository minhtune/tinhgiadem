document.getElementById('calcForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var var1 = parseFloat(document.getElementById('var1').value);
    var var2 = parseFloat(document.getElementById('var2').value);
    var var3 = parseFloat(document.getElementById('var3').value);

    // Thay thế bằng công thức tính toán của bạn
    var result = var1 + var2 + var3;

    document.getElementById('result').innerText = 'Kết quả: ' + result;
});
