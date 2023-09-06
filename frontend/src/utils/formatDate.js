export const formatDate = (date, config) => {
    const defaultOptiond = { day: 'numeric', month: 'short', year: 'numeric'};
    const optins = config ? config : defaultOptiond;

    return new Date(date).toLocaleDateString('en-US', optins);
}