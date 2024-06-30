function division_condition(event){
    event.preventDefault(); // 阻止表單提交
    var numerators = document.getElementById("numerator").value;
    var denominators = document.getElementById("denominator").value;
    var resultDiv = document.getElementById("result");

    // 清除先前的結果
    resultDiv.innerHTML = "";

    if (numerators == 9 && denominators == 11) {
        var img = document.createElement("img");
        img.src = "./pic/HqEuSE.gif"; // 在此處替換成你想要顯示的圖片的 URL
        img.alt = "9/11";
        resultDiv.appendChild(img);// 將 img 元素添加到 resultDiv 中
        resultImage.style.display = "block";
    } 
    else if (numerators == 6 && denominators == 4) {
        var img = document.createElement("img");
        img.src = "./pic/tank-trying-to-stop.gif"; // 在此處替換成你想要顯示的圖片的 URL
        img.alt = "6/4";
        resultDiv.appendChild(img);// 將 img 元素添加到 resultDiv 中
        resultImage.style.display = "block";
    }
    else {
        if (denominators != 0) {
            var result = numerators / denominators;
            resultDiv.innerHTML ="<p>結果: " + numerators + " / " + denominators + " = " + result + "</p>";
        } else {
            resultDiv.innerHTML += "<p>除數不能為0</p>";
        }
    }
    return false; // 阻止表單默認提交行為
}