import {bresenhamLine, getImage, toBlob} from "./helpers.js";

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d', {
    desynchronized: true
});

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = 'black';

let previousPoint = null;
canvas.addEventListener('pointerdown', event => {
    previousPoint = { x: ~~event.offsetX, y: ~~event.offsetY };
});
canvas.addEventListener('pointermove', event => {
    if (previousPoint) {
        const currentPoint = { x: ~~event.offsetX, y: ~~event.offsetY };
        for (const {x, y} of bresenhamLine(previousPoint.x, previousPoint.y, currentPoint.x, currentPoint.y)) {
            ctx.fillRect(x, y, 2, 2);
        }
        previousPoint = currentPoint;
    }
});
canvas.addEventListener('pointerup', event => {
    previousPoint = null;
});

const txtColor = document.querySelector('#color');
txtColor.addEventListener('change', () => {
    ctx.fillStyle = txtColor.value;
});

const fileOptions = {
    types: [{
        description: 'PNG files',
        accept: {'image/png': ['.png']}
    }]
};
const btnSave = document.querySelector('#save');
btnSave.addEventListener('click', async () => {
    const blob = await toBlob(canvas);
    const handle = await window.showSaveFilePicker(fileOptions);
    const writable = await handle.createWritable();
    await writable.write(blob);
    await writable.close();
});
