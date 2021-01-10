//9. Gladiator Inventory 

function gladiatorInventory(arr) {
    let gear = arr.shift().split(' ')

    arr.forEach(x => {
        if (x.split(' ')[0] == 'Buy' && (!gear.includes(x.split(' ')[1]))) {
            gear.push(x.split(' ')[1])
        } else if (x.split(' ')[0] == 'Trash' && (gear.includes(x.split(' ')[1]))) {
            let indexTrash = gear.indexOf(x.split(' ')[1])
            gear.splice(indexTrash, 1)
        } else if (x.split(' ')[0] == 'Repair' && (gear.includes(x.split(' ')[1]))) {
            let indexRepair = gear.indexOf(x.split(' ')[1])
            gear.splice(indexRepair, 1)
            gear.push((x.split(' ')[1]))
        } else if (x.split(' ')[0] == 'Upgrade' && gear.includes((x.split(' ')[1]).split('-')[0])) {
            let indexUpgrade = gear.indexOf((x.split(' ')[1]).split('-')[0])
            let insertElement = ((x.split(' ')[1]).split('-').join(':'))
            gear.splice(indexUpgrade + 1, 0, insertElement)
        }
    });
    console.log(gear.join(' '));

}

gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']
);
gladiatorInventory(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V']
);
