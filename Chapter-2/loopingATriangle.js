// Make seven calls to console.log, printing #, ## etc

for (let counter = 0, triangleBuildingBlock = '#'; counter < 7; counter += 1) {
    console.log(triangleBuildingBlock);
    triangleBuildingBlock = triangleBuildingBlock + '#';
}