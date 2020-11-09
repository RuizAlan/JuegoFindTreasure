let getRandomNumber = size => {
    return Math.floor(Math.random() * size);
}

let getDistance = (e, target) => {
    let diffX = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

let getDistanceHint = distance => {
    if (distance < 30) {
        return 'Boiling Hot';
    }   else if (distance < 40){
            return 'Really Hot';
    }   else if (distance < 60){
            return 'Hot';
    }   else if (distance < 100){
            return 'Warm';
    }   else if (distance < 200){
            return 'Cold';
    }   else if (distance < 300){
            return 'Really cold';
    }   else {
            return 'Freezing!';
    }
}