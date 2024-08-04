document.getElementById('calcForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var var1 = parseFloat(document.getElementById('var1').value);
    var var2 = parseFloat(document.getElementById('var2').value);
    var var3 = parseFloat(document.getElementById('var3').value);

    var result;
    
    // Chọn công thức dựa trên giá trị của biến thứ ba
    switch(var3) {
        case 5:
            // Công thức cho biến thứ ba là 5
            result = 210000*(var1*var2/10000);
            break;
        case 7:
            // Công thức cho biến thứ ba là 7
            result = 230000*(var1*var2/10000);
            break;
        case 9:
            // Công thức cho biến thứ ba là 9
            result = 300000*(var1*var2/10000);
            break;
        default:
            result = 'Lỗi: Giá trị không hợp lệ';
    }

    document.getElementById('result').innerText = 'Kết quả: ' + result;
});