function solve (speed, area) {
    let isInLimit = true;
    let speedLimit;
    let speedOverTheLimit;
    let status;
    if (area === "motorway") {
        speedLimit = 130;
        if (speed > speedLimit) {
            isInLimit = false;
            speedOverTheLimit = speed - speedLimit;
            status = takeStatus(speedOverTheLimit);
        }

    } else if (area === "interstate") {
        speedLimit = 90;
        if (speed > speedLimit) {
            isInLimit = false;
            speedOverTheLimit = speed - speedLimit;
            status = takeStatus(speedOverTheLimit);
        }
    } else if (area === "city") {
        speedLimit = 50;
        if (speed > speedLimit) {
            isInLimit = false;
            speedOverTheLimit = speed - speedLimit;
            status = takeStatus(speedOverTheLimit);
        }
    } else if (area === "residential") {
        speedLimit = 20;
        if (speed > speedLimit) {
            isInLimit = false;
            speedOverTheLimit = speed - speedLimit;
            status = takeStatus(speedOverTheLimit);
        }
    }

    if (isInLimit) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else {
        console.log(`The speed is ${speedOverTheLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
}

function takeStatus(speedOverTheLimit) {
    let status;
    if (speedOverTheLimit <= 20) {
        status = "speeding";
    } else if (speedOverTheLimit > 20 && speedOverTheLimit <= 40) {
        status = "excessive speeding";
    } else {
        status = "reckless driving";
    }
    return status;
}


solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');