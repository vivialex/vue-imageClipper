[vue-imageClipper]: https://vivialex.github.io/demo/imageClipper/index.html

# vue-imageClipper

## Demo-例子
[vue-imageClipper]

## Import-引入
```Javascript
import Vue from 'vue';
import imageClipper from 'path/imageClipper/index'
Vue.use(imageClipper);
```

## Use-使用
```HTML
<image-clipper ref="clipper" v-show="visible" :img="imgUrl" :clipper-img-width="250" :clipper-img-height="250" @sure="sure"></image-clipper>
```
```Javascript
export default {
    data() {
        return {
            visible: true,
            imgUrl: 'xxx'
        }
    },
    methods: {
        ok(data) { 
            this.$refs.clipper.getBase64(data);
        }
    }
}
```

## Options-选项
| Option | Default | Type | Description
| ------ | ------- | ---- | --------- |
| [`img`] | "" | String | 图片url或dataURL 
| [`clipperImgWidth`] | 500 | Number | 裁剪图片的宽度
| [`clipperImgHeight`] | 200 | Number | 裁剪图片的高度

## Events-事件
| Name | Args | Description
| -----| ---- | -----------|
| beforeLoad | no | 图片加载前触发
| loadSuccess | no | 图片加载成功触发
| loadError | no | 图片加载失败触发
| loadComplete | no | 图片加载完成触发
| ok | dataUrl | 点击确认按钮，返回裁剪图片的dataUrl
| cancel | no | 点击取消按钮

## Methods-方法
| Name | Args | Return
| ---- | ---- | ----- |
| getBase64 | dataUrl | img base64


