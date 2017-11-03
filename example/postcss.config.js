module.exports = {
    plugins: [
        require('autoprefixer')({
            browsers: ['ios >= 8', 'Android > 4'] //样式兼容程度
        })
    ]
};