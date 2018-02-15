<template>
    <div>

        <div :id="generateId('divElement')" @click="displayShiny()" class="shiny-emebed shiny-hover" style="padding: 30px; margin-top: 25px; margin-bottom: 25px;">


            <div :id="generateId('thumb')">
                <img :src="thumbnail" :id="generateId('shinyThumb')" class="shiny-img">
            </div>
            <div class="text-xs-center" :id="generateId('shiny-caption')">Click visualization to load</div>
        </div>

    </div>

</template>

<script>
    export default {
        name: "shiny",
        mounted: function () {
        },
        props: [
            'uuid', 'thumbnail', 'shiny', 'smHeight', 'lgHeight'
        ],
        methods: {
            generateId: function (el) {
                return el + '-' + this.uuid
            },
            displayShiny: function (e) {
                //console.log(this.uuid)
                var thumb = document.getElementById('shinyThumb-' + this.uuid);
                var caption = document.getElementById('shiny-caption-' + this.uuid);
                thumb.remove();
                caption.remove();
                var divElement = document.getElementById('divElement-' + this.uuid);
                divElement.classList.remove('shiny-hover')
                var shinyFrame = document.createElement("iframe");
                shinyFrame.setAttribute("src", this.shiny);
                shinyFrame.setAttribute("id", "shinyElement-" + this.uuid);
                shinyFrame.setAttribute("class", "shiny");
                shinyFrame.setAttribute("frameBorder", "0");
                divElement.insertBefore(shinyFrame, divElement.firstChild);
                var shinyElement = document.getElementById("shinyElement-" + this.uuid);

                // console.log(divElement.offsetWidth)
                // console.log(shinyElement)

                // responsive adjustments

                if (divElement.offsetWidth > 700) {
                    shinyElement.style.width = '1200px';
                    shinyElement.style.height = this.lgHeight + 'px';
                    shinyElement.style.marginLeft = '-175px';
                } else if (divElement.offsetWidth > 500) {
                    shinyElement.style.width = '900px';
                    shinyElement.style.height = this.lgHeight + 'px';
                    shinyElement.style.marginLeft = '-150px';
                } else {
                    shinyElement.style.width = '350px';
                    shinyElement.style.height = this.smHeight + 'px';
                    shinyElement.style.marginLeft = '-30px';
                }




            }
        },
        data() {
            return {
            };
        },
    };
</script>