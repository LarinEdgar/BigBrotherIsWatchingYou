const leftEye = document.querySelector('.LeftEyeball');
const rightEye = document.querySelector('.RightEyeball');

document.onmousemove = function (event) {
    let xCursorCord = event.x;
    let yCursorCord = event.y;

    let xLeftEyeCord = leftEye.offsetLeft + (leftEye.clientWidth / 2);
    let yLeftEyeCord = leftEye.offsetTop + (leftEye.clientHeight / 2);

    let xRightEyeCord = rightEye.offsetLeft + (rightEye.clientWidth / 2);
    let yRightEyeCord = rightEye.offsetTop + (rightEye.clientHeight / 2);

    let leftEyeRotationAngle = Math.atan2((yCursorCord - yLeftEyeCord), (xCursorCord - xLeftEyeCord));
    let rightEyeRotationAngle = Math.atan2((yCursorCord - yRightEyeCord), (xCursorCord - xRightEyeCord));

    document.querySelector('.LeftEyeball').style.transform = `rotate(${leftEyeRotationAngle}rad)`;
    document.querySelector('.RightEyeball').style.transform = `rotate(${rightEyeRotationAngle}rad)`;
}