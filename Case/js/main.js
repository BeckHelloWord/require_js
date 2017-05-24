require.config({
    baseUrl: './js',
    paths: {
        'jquery': ['http://cdn.bootcss.com/jquery/3.2.1/jquery.min', 'lib/jquery'],
        'workA': 'lib/workA',
        'workB': 'lib/workB'

    }
})

require(['jquery', 'workA'], function ($, wa) {
    require(['workB'])
})