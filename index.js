function distanceFromHqInBlocks(pickupBlock){
    const hqBlock = 42;
    return(pickupBlock - hqBlock);
}

function distanceFromHqInFeet(pickupBlock){
    const blockLength = 264;
    return distanceFromHqInBlocks(pickupBlock) * blockLength;
}

function distatanceTravelledInFeet(startBlock, endBlock){
    const blockLength = 264;
    return(startBlock - endBlock) * blockLength;
}

function calculatesFarePrice(startBlock, endBlock){
    const distance = distatanceTravelledInFeet(startBlock, endBlock);

    if(distance <= 400){
        return 0;
    }else if(distance > 400 && distance <= 2000){
        return(distance - 400) * 0.02;
    }else if(distance > 2000 && distance < 2500){
        return 25;
    }else {
        return 'cannot travel that far';
    }
}
