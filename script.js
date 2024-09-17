document.addEventListener('DOMContentLoaded', function() {
    const options = document.querySelectorAll('#option .option');
    const thicknessOptions = document.querySelectorAll('#thickness .option');
    let selectedOption = null;
    let selectedThickness = null;

    options.forEach(option => {
        option.addEventListener('click', function() {
            options.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
            selectedOption = parseInt(this.getAttribute('data-value'));
        });
    });

    thicknessOptions.forEach(option => {
        option.addEventListener('click', function() {
            thicknessOptions.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
            selectedThickness = parseInt(this.getAttribute('data-value'));
        });
    });

    document.getElementById('calcForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        var var1 = parseFloat(document.getElementById('var1').value);
        var var2 = parseFloat(document.getElementById('var2').value);

        // Kiểm tra điều kiện chiều dài và chiều rộng
        if (var1 <= var2) {
            alert('Chiều dài phải lớn hơn chiều rộng.');
            return;
        }
        
        if (var1 <= 100) {
            alert('Chiều dài phải lớn hơn 100.');
            return;
        }

        if (var2 <= 50) {
            alert('Chiều rộng phải lớn hơn 50.');
            return;
        }

        if (selectedOption === null) {
            alert('Vui lòng chọn một tùy chọn.');
            return;
        }

        if (selectedThickness === null) {
            alert('Vui lòng chọn độ dày.');
            return;
        }

        var result;
        var day5 = 210000;
        var day7 = 260000;
        var day9 = 310000;
        if(var1 >= 200)
        {
            day5=day5+50000;
            day7=day7+50000;
            day9=day9+50000;
        }
        switch(selectedOption) 
        {
            case 1:
                
                break;
            case 2:
                day5=day5+20000;
                day7=day7+20000;
                day9=day9+20000;
                break;
            case 3:
                day5=day5+60000;
                day7=day7+60000;
                day9=day9+60000;
                break;
            default:
                result = 'Lỗi: Tùy chọn không hợp lệ';
        }
        // Chọn công thức dựa trên giá trị của độ dày
        switch(selectedThickness) {
            case 5:
                result = day5 * (var1 * var2 / 10000);
                break;
            case 7:
                result = day7 * (var1 * var2 / 10000);
                break;
            case 9:
                result = day9 * (var1 * var2 / 10000);
                break;
            default:
                result = 'Lỗi: Giá trị không hợp lệ';
        }

        // Thêm giá trị cho mỗi tùy chọn
        
        result = Math.ceil(result / 10000) * 10000;
        if (typeof result === 'number') {
            result = result.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'});
        }

        document.getElementById('result').innerText = 'Giá bán : ' + result;
    });
});