//公共配置
require.config({
    baseUrl: './js',
    paths: {
        'jquery': ['http://cdn.bootcss.com/jquery/3.2.1/jquery.min', 'lib/jquery'], //注意，不能添加.js文件后缀，会报错
        'workA': 'lib/workA',
        'workB': 'lib/workB'

    }
})