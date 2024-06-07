// script.js

// 이미지와 설명문 데이터 배열
const imagesData = [
    { src: './img/1.png', description: '물의 온도 95℃를 표준으로 세탁할 수 있다.<br>삶을 수 있다.<br>세탁기로 세탁할 수 있다.(손세탁 가능)<br>세제 종류에 제한을 받지 않는다.' },
    { src: './img/2.png', description: '' },
    { src: './img/3.png', description: '' },
    { src: './img/4.png', description: '' },
    { src: './img/5.png', description: '' },
    { src: './img/6.png', description: '' },
    { src: './img/7.png', description: '' },
    { src: './img/8.png', description: '' },
    { src: './img/9.png', description: '' },
    { src: './img/10.png', description: '' },
    { src: './img/11.png', description: '' },
    { src: './img/12.png', description: '' },
    { src: './img/13.png', description: '' },
    { src: './img/14.png', description: '' },
    { src: './img/15.png', description: '' },
    { src: './img/16.png', description: '' },
    { src: './img/17.png', description: '' },
    { src: './img/18.png', description: '' },
    { src: './img/19.png', description: '' },
    { src: './img/20.png', description: '' },
    { src: './img/21.png', description: '' },
    { src: './img/22.png', description: '' },
    { src: './img/23.png', description: '' },
    { src: './img/24.png', description: '' },
    { src: './img/25.png', description: '' },
    { src: './img/26.png', description: '' },
    { src: './img/27.png', description: '' },
    { src: './img/28.png', description: '' },
    { src: './img/29.png', description: '' },
    { src: './img/30.png', description: '' },
    { src: './img/31.png', description: '' },
    { src: './img/32.png', description: '' },
];

// 표를 동적으로 생성하는 함수
function createTable() {
    const tableBody = document.querySelector('#quizTable tbody');

    const randomArray = [Math.floor(Math.random() * 7), Math.floor(Math.random() * 6) + 7, Math.floor(Math.random() * 7) + 13, Math.floor(Math.random() * 4) + 20, Math.floor(Math.random() * 2) + 24, Math.floor(Math.random() * 6) + 26];

    // 6행 생성
    for (let i = 0; i < 6; i++) {
        const randomImage = imagesData[randomArray[i]];

        const row = document.createElement('tr');

        const imgCell = document.createElement('td');
        const img = document.createElement('img');
        img.src = randomImage.src;
        img.alt = `Random Image ${i + 1}`;
        imgCell.appendChild(img);

        const answerCell = document.createElement('td');
        const textarea = document.createElement('textarea');
        answerCell.appendChild(textarea);

        const checkCell = document.createElement('td');
        const button = document.createElement('button');
        button.textContent = '정답 확인';
        button.onclick = () => {
            checkAnswer(button, randomImage.description);
        };
        checkCell.appendChild(button);

        row.appendChild(imgCell);
        row.appendChild(answerCell);
        row.appendChild(checkCell);

        tableBody.appendChild(row);
    }
}

// 정답 확인 함수
function checkAnswer(button, description) {
    const cell = button.parentElement;
    cell.innerHTML = description;
}

// DOM이 로드되었을 때 테이블 생성
document.addEventListener('DOMContentLoaded', createTable);
