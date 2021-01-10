//10. Ladybugs 

function ladyBugs(arr) {
    let positions = [];
    for (let i = 0; i < Number(arr[0]); i++) {
        positions.push(0);
    }

    let occupied = arr[1].split(" ");
    for (let j = 0; j < occupied.length; j++) {
        positions[occupied[j]] = 1;
    }

    let moves = arr.length;
    for (let k = 2; k < moves; k++) {
        let move = arr[k].split(" ");
        let curPos = Number(move[0]);
        let direction = move[1];
        let step = Number(move[2]);
        if (step < 0) {
            step = Math.abs(step);
            switch (direction) {
                case "left":
                    direction = "right";
                    break;
                case "right":
                    direction = "left";
                    break;
            }
        }
        let newPos = 0;

        switch (direction) {
            case "right":
                newPos = curPos + step;
                if (curPos + newPos > Number(arr[0]) - 1) {
                    positions[curPos] = 0;
                } else {
                    positions[curPos] = 0;
                    for (let l = newPos; l < Number(arr[0]) && l >= 0; l++) {
                        if (positions[l] == 1) {
                            continue;
                        } else {
                            positions[l] = 1;
                            break;
                        }
                    }
                }
                break;
            case "left":
                newPos = curPos - step;
                if (curPos - newPos < 1) {
                    positions[curPos] = 0;
                } else {
                    positions[curPos] = 0;
                    for (let m = newPos; m >= 0 && m < Number(arr[0]); m--) {
                        if (positions[m] == 1) {
                            continue;
                        } else {
                            positions[m] = 1;
                            break;
                        }
                    }
                }
                break;
        }
    }
    console.log(positions.join(" "));
}

ladyBugs([3, "0 1", "0 right 1", "2 right 1"]);
ladyBugs([3, "0 1 2", "0 right 1", "1 right 1", "2 right 1"]);
ladyBugs([5, "3", "3 left 2", "1 left -2"]);
