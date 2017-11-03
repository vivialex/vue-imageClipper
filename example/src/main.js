import mainCss from './main.less';

import Vue from 'Vue';
import imageClipper from 'component/imageClipper/index'

Vue.use(imageClipper);

let app = new Vue({
    el: '#app',
    data() {
        return {
            img: require('image/arsenal.jpg')
        }
    },
    methods: {
        ok(data) {
            let $image = new Image();

            $image.src = data;
            $image.addEventListener('load', e => {
                console.log($image.width, $image.height);
            }, false);
        }
    }
});