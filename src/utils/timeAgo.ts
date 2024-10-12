export const timeAgo = (dateString: string): string => {
    const pastDate = new Date(dateString);

    if (isNaN(pastDate.getTime())) {
        return 'unknown'; 
    }

    const now = new Date();
    const seconds = Math.floor((now.getTime() - pastDate.getTime()) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30); 
    const years = Math.floor(months / 12); 

    if (years > 0) {
        return pastDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }); 
    } else if (months > 0) {
        return `${months}m`;
    } else if (days > 0) {
        return `${days}d`; 
    } else if (hours > 0) {
        return `${hours}h`; 
    } else if (minutes > 0) {
        return `${minutes}m`; 
    } else {
        return `${seconds}s`; 
    }
};
