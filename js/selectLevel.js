import {
    getUserId
} from "./getParameter.js";

import gamestart from "./gamestart.js";

export default function selectLevel() {
    /* userId 보여주기 */

    const userId = getUserId();

    document.getElementById('userIdShow').textContent = userId;
    document.getElementById('userId').value = userId;

    /* 파일 업로드 부분 */
    const fileInput = document.getElementById('chooseFile');

    let monsterImgSrc;

    fileInput.addEventListener('change', e => {
        const fileReader = new FileReader();

        fileReader.readAsDataURL([...fileInput.files][0]);

        fileReader.onload = e => {
            monsterImgSrc = fileReader.result;
        }
    });

    /* 난이도 선택 버튼 이벤트 구현 */
    const levelBtns = [...document.querySelectorAll('.level')];

    for (let i = 0; i < 3; i++) {
        levelBtns[i].onclick = e => {
            document.querySelector('.wrap').style.display = 'block';
            document.querySelector('.selectLevel').style.display = 'none';
            gamestart(3 - i, monsterImgSrc);
        }
    }

}