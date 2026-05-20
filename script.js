const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#ffffff';
ctx.lineWidth = 5;
ctx.lineCap = 'round';

let drawing = false;

function setTool(tool, size) {
    ctx.globalCompositeOperation = (tool === 'eraser') ? 'destination-out' : 'source-over';
    ctx.lineWidth = size;
}

function updateColor(color) { ctx.strokeStyle = color; }

canvas.addEventListener('mousedown', () => drawing = true);
canvas.addEventListener('mouseup', () => { drawing = false; ctx.beginPath(); });
canvas.addEventListener('mousemove', (e) => {
    if(!drawing) return;
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
});

function switchView(view) { console.log("Switching to: " + view); }
function openSettings() { alert("لوحة الإعدادات الملكية"); }
