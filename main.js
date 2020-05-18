const canvas = $("#pic");
var ctx = canvas[0].getContext("2d");
var cWidth, cHeight;

ctx.font = "12px Monospace";
ctx.fillStyle = "#ffffff";

cWidth = Math.ceil(ctx.measureText("*".repeat(80)).width);
cHeight = Math.ceil(12.1 * 25); // 12.1 to account for line spacing

canvas.prop("width", cWidth);
canvas.prop("height", cHeight);

ctx.font = "12px Monospace";
ctx.fillStyle = "#ffffff";

$("#file_input").on("change", function (e) {
  let file = $(this).prop("files")[0];
  let reader = new FileReader();
  reader.readAsText(file, "UTF-8");

  reader.onload = (e) => {
    let content = e.target.result;

    ctx.clearRect(0, 0, cWidth, cHeight);
    content.split("\n").forEach((e, i) => {
      ctx.fillText(e, 0, 12 * (i + 1));
    });
  };
});

function runProgram() {
  let r = 0;
  let c = 0;
}
