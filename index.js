const count = 10;
const table = document.querySelector('table');
for (let i = 0; i < count; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < count; j++) {
        let number = i * count + j + 1;
        const cell = document.createElement('td');
        cell.innerText = number;
        row.append(cell);
    }
    table.append(row)
}
