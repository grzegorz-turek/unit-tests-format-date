const formatDate = (timeInSeconds) => {

    const secondsCount = timeInSeconds % 60;
    const minutesCount = Math.floor((timeInSeconds / 60) % 60);
    const hoursCount = Math.floor(timeInSeconds / 3600);

    if(!timeInSeconds) {
        return `0s`
    }

    if(hoursCount === 0 && minutesCount === 0) {
        return `${secondsCount}s`
    }

    if(hoursCount === 0 && minutesCount !== 0 && secondsCount !== 0) {
        return `${minutesCount}m ${secondsCount}s`
    }

    if(hoursCount === 0 && minutesCount !== 0 && secondsCount === 0) {
        return `${minutesCount}m`
    }

    if(hoursCount !== 0 && minutesCount === 0 && secondsCount === 0) {
        return `${hoursCount}h`
    }

    if(hoursCount !== 0 && minutesCount !== 0 && secondsCount === 0) {
        return `${hoursCount}h ${minutesCount}m`
    }

    if(hoursCount !== 0 && minutesCount === 0 && secondsCount !== 0) {
        return `${hoursCount}h ${secondsCount}s`
    }

    return `${hoursCount}h ${minutesCount}m ${secondsCount}s`
}

module.exports = formatDate;