class Clock {
    constructor() {
        this.date = new Date();
        this.hour = this.date.getHours();
        this.minute = this.date.getMinutes();
        this.second = this.date.getSeconds();
        debugger
        this.printTime();
        setInterval(this._tick, 1000);
    }

    printTime() {
        console.log(`${this.hour}: ${this.minute}: ${this.second}`);
    }

    _tick() {
        this.second++;
        if (this.second == 60) {
            this.second = 0; this.minute++;
            if (this.minute == 60) {
                this.minute = 0; this.hour++;
                if (this.hour == 24) this.hour = 0;
            }
        }
        this.printTime();
    }
}

const clock = new Clock();