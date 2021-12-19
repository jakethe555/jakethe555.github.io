import { WaveGroup } from "./wavegroup.js";

class App {
    constructor() {
        this.canvas = document.getElementById("DemoCanvas");
        this.ctx = this.canvas.getContext("2d");

        var canvasPlace = document.getElementById("intro");
        canvasPlace.appendChild(this.canvas);
        this.waveGroup = new WaveGroup();

        window.addEventListener("resize", this.resize(this), false);
        this.resize();

        requestAnimationFrame(this.animate.bind(this));
    }
    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = 350;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2, 2);

        this.waveGroup.resize(this.stageWidth, this.stageHeight);
    }

    animate(t) {
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        this.waveGroup.draw(this.ctx);
        requestAnimationFrame(this.animate.bind(this));
    }
}

window.onload = () => {
    new App();
};
