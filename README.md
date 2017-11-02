# vue-image-clipper

##Demo-例子

##Import引入
```Javascript
import Vue from 'vue';
import imageClipper from 'path/imageClipper/index.js';
Vue.use(imageClipper);
```

##Use使用
```HTML
<image-clipper v-show="visible" :clip-width="250" :clip-width="250" @ok="ok"></image-clipper>
```
```Javascript
export default {
    data() {
        return {
            visible: false,
            imgUrl: 'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=false&word=%E5%A3%81%E7%BA%B8&hs=0&pn=0&spn=0&di=29105939410&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&ie=utf-8&oe=utf-8&cl=2&lm=-1&cs=2192668381%2C2116711447&os=1324151937%2C4179637641&simid=0%2C0&adpicid=0&lpn=0&ln=30&fr=ala&fm=&sme=&cg=wallpaper&bdtype=13&oriquery=%E5%A3%81%E7%BA%B8&objurl=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F6d81800a19d8bc3e3bad2adf888ba61ea8d34579.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bq7wg3tg2_z%26e3Bv54AzdH3Ft42k7yAzdH3Fanja90lm_z%26e3Bip4s&gsm=0'
        }
    }
}
```

##Options选项
| Option | Description |
| ----- | ----- |
| v-model | Boolean(default: false) Picker show and hide. |

##Events事件

##Methods方法

