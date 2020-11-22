class StopWatch {
    constructor(element) {
        this.timer = element;
        this.time = 0;//10ms 100분의 1초
        this._render();
    }
    get isStart() {
        return !!this.intervalId;//어떤 값을 boolean(true나 false)으로 바꿈
    }
    start() {
        this.intervalId = setInterval(() => {
            this.time++;
            this._render();
        }, 10)
    }
    stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;//false로평가
        }
    }
    clear() {
        this.stop();
        this.time = 0;
        this._render();
    }
    _render() {
        const tenMs = `${this.time % 100
            }`.padStart(2, '0');
        const sec = `${parseInt(this.time / 100) % 60}`.padStart(2, '0');
        const min = `${parseInt(this.time / 6000)}`.padStart(2, '0');
        this.timer.innerHTML = `${min}:${sec}:${tenMs}`;
    }
}