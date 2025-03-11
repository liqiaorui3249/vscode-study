// 利用copilot生成的代码事件监听
document.addEventListener('DOMContentLoaded', () => {
    const input1 = document.createElement('input');
    input1.type = 'number';
    input1.id = 'num1';
    document.body.appendChild(input1);

    const input2 = document.createElement('input');
    input2.type = 'number';
    input2.id = 'num2';
    document.body.appendChild(input2);

    const button = document.createElement('button');
    button.textContent = 'Calculate Sum';
    document.body.appendChild(button);

    const resultDiv = document.createElement('div');
    resultDiv.id = 'result';
    document.body.appendChild(resultDiv);

    button.addEventListener('click', () => {
        const num1 = parseInt(document.getElementById('num1').value, 10);
        const num2 = parseInt(document.getElementById('num2').value, 10);
        const sum = num1 + num2;
        resultDiv.textContent = `Sum: ${sum}`;
    });

    // Randomly set values in the input fields
    input1.value = Math.floor(Math.random() * 100);
    input2.value = Math.floor(Math.random() * 100);
});