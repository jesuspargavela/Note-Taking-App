export function formatDate(date: string): string {
    const splitDate = date.split("T")[0].split("-");

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return `${splitDate[2]} ${months[+splitDate[1] - 1]} ${splitDate[0]}`;
}