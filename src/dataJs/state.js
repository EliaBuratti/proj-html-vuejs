export default {
    activePicture: 0,

    next(targhet) {

        const albumPicture = document.querySelectorAll(`.${targhet} .eb_product `);
        this.activePicture++;

        if (targhet === 'eb_find-products') {
            this.activePicture = this.activePicture + 1;
        }
        console.log(this.activePicture, 'next');

        if (this.activePicture > albumPicture.length - 1) {
            this.activePicture = 0;
        }

        albumPicture[this.activePicture].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });

        console.log(albumPicture[this.activePicture]);
    },

    prev(targhet) {

        const albumPicture = document.querySelectorAll(`.${targhet} .eb_product `);
        this.activePicture--;

        if (targhet === 'eb_find-products') {
            this.activePicture = this.activePicture - 1;
        }

        console.log(this.activePicture, 'prev');

        if (this.activePicture < 0) {
            this.activePicture = albumPicture.length - 1;
        }


        albumPicture[this.activePicture].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });

        console.log(albumPicture[this.activePicture]);
    },
}