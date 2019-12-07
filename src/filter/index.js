export const currency = (value) => {
    return (value !== null) ? value.toLocaleString() + " €" : null;
}
export const date = (value) => {
    if (value !== null) {
        let dateValue = new Date(value);
        return dateValue.getDate() + '/' + (dateValue.getMonth() + 1) + '/' + dateValue.getFullYear() + ' ' + dateValue.toLocaleTimeString();
    }
}
export const fillTable = (value) => {
    if (value.length == 0) {
        return;
    }
    const fill = 7 - value[0].length;
    if (fill == 0) {
        return value[0].join('');
    } else {
        const result = [];
        result.push([...value[0]]);
        result.push([...value[1]]);

        for (let index = 0; index < fill; index++) {
            result[0].push('X');
            result[1].unshift('X');
        }
        return result[0].join('') + ' - ' + result[1].join('');
    }

}