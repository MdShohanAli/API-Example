const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddies(data))
}

const displayBuddies = person => {
    const buddies = person.results;
    const buddiesDiv = document.getElementById('budys');
    for (const buddy of buddies) {
        console.log(buddy);
        const p = document.createElement('p');
        p.innerText = `Name ${buddy.name.title} ${buddy.name.first}  ${buddy.name.last} `
        buddiesDiv.appendChild(p);
    }
}