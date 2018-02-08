<template>
    <div>

        <div :id="generateId('divElement')" @click="displayViz()" class="viz-emebed viz-hover">

            <div :id="generateId('vizElement')" style="width: 100%; " class="viz"></div>
            <div :id="generateId('thumb')">
                <img :src="thumbnail" :id="generateId('vizThumb')" class="viz-img">
            </div>
            <div class="text-xs-center" :id="generateId('viz-caption')">Click visualization to load</div>
        </div>

    </div>


</template>

<script>
    export default {
        name: "Viz",
        mounted: function () {
        },
        props: [
            'uuid', 'thumbnail', 'viz'
        ],
        methods: {
            generateId: function (el) {
                return el + '-' + this.uuid
            },
            displayViz: function (e) {
                //console.log(this.uuid)
                var thumb = document.getElementById('vizThumb-' + this.uuid);
                var caption = document.getElementById('viz-caption-' + this.uuid);
                thumb.remove();
                caption.remove();
                var divElement = document.getElementById('divElement-' + this.uuid);
                divElement.classList.remove('viz-hover')
                var vizElement = document.getElementById("vizElement-" + this.uuid);
                var url = this.viz
                let options = {
                    hideTabs: true,
                    onFirstInteractive: function () {
                        console.log("Run this code when the viz has finished loading.");
                    }
                };
                if (divElement.offsetWidth > 900) {
                    vizElement.style.width = '1000px';
                    vizElement.style.height = '827px';
                    vizElement.style.marginLeft = '0px';
                } else
                    if (divElement.offsetWidth > 800) {
                        vizElement.style.width = '1000px';
                        vizElement.style.height = '827px';
                        vizElement.style.marginLeft = '-100px';
                    } else
                        if (divElement.offsetWidth > 500) {
                            vizElement.style.width = '700px';
                            vizElement.style.height = '927px';
                            vizElement.style.marginLeft = '-100px';
                        }
                        else {
                            vizElement.style.width = '350px';
                            vizElement.style.height = '927px';
                            vizElement.style.marginLeft = '-80px';
                        }
                // Create a viz object and embed it in the container div.
                console.log(divElement.offsetWidth)
                var viz = new tableau.Viz(vizElement, url, options);
            }
        },
        data() {
            return {
            };
        },
    };
</script>