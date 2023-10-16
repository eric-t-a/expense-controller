export function formatDate(dateString) {
    const date = dateString.split(' ')[0];

    const dia = date.split('-')[2];
    const mes = date.split('-')[1];

    return dia+'/'+mes;
}

