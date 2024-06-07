
const imagesData = [
    { src: './img/1.png', description: '물의 온도 95℃를 표준으로 세탁할 수 있다.<br>삶을 수 있다.<br>세탁기로 세탁할 수 있다.(손세탁 가능)<br>세제 종류에 제한을 받지 않는다.' },
    { src: './img/2.png', description: '물의 온도 60℃를 표준으로 하여 세탁기로 세탁할 수 있다(손세탁 가능).<br>세제 종류에 제한을 받지 않는다.' },
    { src: './img/3.png', description: '물의 온도 40℃를 표준으로 하여 세탁기로 세탁할 수 있다(손세탁 가능).<br>세제 종류에 제한을 받지 않는다.' },
    { src: './img/4.png', description: '물의 온도 40℃를 표준으로 하여 세탁기로 약하게 세탁 또는 약한 손세탁도 할 수 있다.<br>세제 종류에 제한을 받지 않는다.' },
    { src: './img/5.png', description: '물의 온도 30℃를 표준으로 하여 세탁기로 약하게 세탁 또는 약한 손세탁도 할 수 있다.<br>세제 종류는 중성 세제를 사용한다.' },
    { src: './img/6.png', description: '물의 온도 30℃를 표준으로 하여 약하게 손세탁할 수 있다(세탁기 사용불가).<br>세제 종류는 중성 세제를 사용한다.' },
    { src: './img/7.png', description: '물세탁은 안된다.' },
    { src: './img/8.png', description: '염소계 표백제로 표백할 수 있다.' },
    { src: './img/9.png', description: '염소계 표백제로 표백할 수 없다.' },
    { src: './img/10.png', description: '산소계 표백제로 표백할 수 있다.' },
    { src: './img/11.png', description: '산소계 표백제로 표백할 수 없다.' },
    { src: './img/12.png', description: '염소계, 산소계 표백제로 표백할 수 있다.' },
    { src: './img/13.png', description: '염소계, 산소계 표백제로 표백할 수 없다.' },
    { src: './img/14.png', description: '다리미의 온도 180~210℃로 다림질을 할 수 있다.' },
    { src: './img/15.png', description: '다림질은 헝겊을 덮고 온도 180~210℃로 다림질을 할 수 있다.' },
    { src: './img/16.png', description: '다리미의 온도 140~160℃로 다림질을 할 수 있다.' },
    { src: './img/17.png', description: '다림질은 헝겊을 덮고 온도 140~160℃로 다림질을 할 수 있다.' },
    { src: './img/18.png', description: '다리미의 온도 80~120℃로 다림질을 할 수 있다.' },
    { src: './img/19.png', description: '다림질은 헝겊을 덮고 온도 80~120℃로 다림질을 할 수 있다.' },
    { src: './img/20.png', description: '다림질을 할 수 없다.' },
    { src: './img/21.png', description: '드라이클리닝 할 수 있다.<br>용제의 종류는 퍼클로로에틸렌 또는 석유계를 사용한다.' },
    { src: './img/22.png', description: '드라이클리닝 할 수 있다.<br>용제의 종류는 석유계에 한한다.' },
    { src: './img/23.png', description: '드라이클리닝 할 수 없다.' },
    { src: './img/24.png', description: '드라이클리닝은 할 수 있으나 셀프 서비스는 할 수 없고 전문점에서만 할 수 있다.' },
    { src: './img/25.png', description: '손으로 짜는 경우에는 약하게 짜고, 원심 탈수기의 경우는 단시간에 짠다' },
    { src: './img/26.png', description: '짜면 안 된다.' },
    { src: './img/27.png', description: '햇빛에서 옷걸이에 걸어 건조시킨다.' },
    { src: './img/28.png', description: '옷걸이에 걸어서 그늘에 건조시킨다.' },
    { src: './img/29.png', description: '햇빛에서 뉘어서 건조시킨다.' },
    { src: './img/30.png', description: '그늘에 뉘어서 건조시킨다.' },
    { src: './img/31.png', description: '세탁 후 건조할 때 기계 건조를 할 수 있다.' },
    { src: './img/32.png', description: '세탁 후 건조할 때 기계 건조를 할 수 없다.' },
];

function createTable() {
    const tableBody = document.querySelector('#quizTable tbody');

    const randomArray = [Math.floor(Math.random() * 7), Math.floor(Math.random() * 6) + 7, Math.floor(Math.random() * 7) + 13, Math.floor(Math.random() * 4) + 20, Math.floor(Math.random() * 2) + 24, Math.floor(Math.random() * 6) + 26];

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

function checkAnswer(button, description) {
    const cell = button.parentElement;
    cell.innerHTML = description;
}

document.addEventListener('DOMContentLoaded', createTable);
