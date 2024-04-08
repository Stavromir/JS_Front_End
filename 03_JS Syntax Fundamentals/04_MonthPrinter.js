const mounts = ["January", "February", "March", "April", "May", "Jun", "Jul",
    "August", "September", "October", "November", "December"];

function printMonth(num) {
    switch (num) {
        case 1: {
            console.log(mounts[0]);
        } break;
        case 2: {
            console.log(mounts[1]);
        } break;
        case 12: {
            console.log(mounts[11]);
        } break;
        default: {
            console.log("Error!");
        }
    }
}

printMonth(1);
printMonth(2);
printMonth(13);