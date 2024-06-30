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
    else if (numerators == 4 && denominators == 20) {
        var img = document.createElement("img");
        img.src = "./pic/MJYE9Qr8DS1sDCnnxJEWimHjmWroL077.gif"; // 在此處替換成你想要顯示的圖片的 URL
        img.alt = "4/20";
        resultDiv.appendChild(img);// 將 img 元素添加到 resultDiv 中
        resultImage.style.display = "block";
    }
    else if (numerators == 2 && denominators == 28) {
        var img = document.createElement("img");
        img.src = "./pic/b1e0c06e-45c6-487e-96cf-583e22340e24.gif"; // 在此處替換成你想要顯示的圖片的 URL
        img.alt = "2/28";
        resultDiv.appendChild(img);// 將 img 元素添加到 resultDiv 中
        resultImage.style.display = "block";
    }
    else if (numerators == 5 && denominators == 20) {
        var img = document.createElement("img");
        img.src = "./pic/tsai.gif"; // 在此處替換成你想要顯示的圖片的 URL
        img.alt = "5/20";
        resultDiv.appendChild(img);// 將 img 元素添加到 resultDiv 中
        resultImage.style.display = "block";
    }
    else if (numerators == 8 && denominators == 6) {
        var img = document.createElement("img");
        img.src = "./pic/587ceb05caba7a91c5630b6bfda0f4e8.gif"; // 在此處替換成你想要顯示的圖片的 URL
        img.alt = "8/6";
        resultDiv.appendChild(img);// 將 img 元素添加到 resultDiv 中
        resultImage.style.display = "block";
    }
    else if (numerators == 8 && denominators == 9) {
        var img = document.createElement("img");
        img.src = "./pic/587ceb05caba7a91c5630b6bfda0f4e8.gif"; // 在此處替換成你想要顯示的圖片的 URL
        img.alt = "8/9";
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