export const getStatusColors = (statusName: string) => {
    let color: number[];
    statusName = statusName.toLowerCase();
    switch (statusName) {
        case 'pending':
            color = [255, 143, 0]
            break;
        case 'paid':
            color = [51, 214, 159]
            break;
        case 'draft':
            color = [55, 59, 83]
            break;
        default:
            color = []
            break;
    }
    return color;
}