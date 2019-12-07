export const currency = (value) => {
    return (value !== null) ? value.toLocaleString() + " €" : null;
}
export const date = (value) => {
    if (value !== null) {
        let dateValue = new Date(value);
        return dateValue.getDate() + '/' + (dateValue.getMonth() + 1) + '/' + dateValue.getFullYear() + ' ' + dateValue.toLocaleTimeString();
    }
}