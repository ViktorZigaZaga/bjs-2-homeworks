class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (time === undefined || callback === undefined || time === null) throw new Error('Отсутствуют обязательные аргументы');
        if (this.alarmCollection.some((alarm) => alarm.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
        }
        this.alarmCollection.push({time: time, canCall: true, callback: callback});
    }

    removeClock(time) {
        if (this.alarmCollection.filter((alarm) => alarm.time === time)) {
            this.alarmCollection = this.alarmCollection.filter((alarm) => alarm.time !== time);
            return true;
        }
        return false;
    }

    getCurrentFormattedTime () {
        return new Date().getHours() + ":" + new Date().getMinutes();
    }

    start() {
        if(this.intervalId != null) return;
        this.intervalId = setInterval(this.alarmCollection.forEach((alarm) => {
            if(alarm.time === this.getCurrentFormattedTime()) {
                alarm.canCall = false;
                alarm.callback();
            }
        }), 1000);
    }

    stop() {
        if(this.intervalId != null) {
            clearInterval(this.intervalId);
            this.intervalId = null;
       }
    }

    resetAllCalls() {
        this.alarmCollection.forEach(alarm => alarm.canCall = true);
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}