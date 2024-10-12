export const getPrimaryColor = (imageSrc: string, opacity: number = 0.65): Promise<string> => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'Anonymous';
        img.src = `https://cors.bridged.cc/${imageSrc}`;

        img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            if (!ctx) {
                reject('Unable to get canvas context');
                return;
            }
            
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);

            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;

            const colorCount: { [key: string]: number } = {};
            let maxCount = 0;
            let dominantColor = '';

            for (let i = 0; i < data.length; i += 4) {
                const r = data[i];
                const g = data[i + 1];
                const b = data[i + 2];

                const rgb = `${r},${g},${b}`;
                colorCount[rgb] = (colorCount[rgb] || 0) + 1;

                if (colorCount[rgb] > maxCount) {
                    maxCount = colorCount[rgb];
                    dominantColor = rgb;
                }
            }

            resolve(`rgba(${dominantColor}, ${opacity})`);
        };

        img.onerror = () => {
            console.error('Image loading error:', img.src);
            reject('Image loading error');
        };
    });
};
