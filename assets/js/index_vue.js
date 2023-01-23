const top_vm = new Vue({
    el: '.safari',
    data: function() {
        return {
            navigationList: [
                {id: 'nav-1', url: '#', icon: 'ion-information-circled'},
                {id: 'nav-2', url: '#', icon: 'ion-help-circled'},
                {id: 'nav-3', url: './Calculator/Variance-calculator.html', icon: 'ion-more'},
                {id: 'nav-4', url: './Basketball.html', icon: 'ion-cube'},
                {id: 'nav-5', url: '#', icon: 'ion-ios-home'},
            ]
        }
    }
});

const vm = new Vue({
    el: '#header',
    data: function() {
        return {
            imageList: [
                {id: 'img-0', src: './images/Nahida.png'},
                {id: 'img-1', src: './images/BTR2.png'},
                {id: 'img-2', src: './images/SS.jpg'},
                {id: 'img-3', src: './images/Arck.jpg'},
                {id: 'img-4', src: './images/B&K.jpg'},
            ],

        }
    },
    methods: {

    },
    computed: {

    },
    watch: {

    }
});

const section1 = new Vue({
    el: '#section-1',
    data: function() {
        return {
            ArticleList: [
                {
                    id: '0', 
                    title: '[Python]使用Selenium爬取网易云音乐排行榜',
                    overview: "This is an article text.Here's an overview of this article",
                    navigation_url: 'https://mp.weixin.qq.com/s/eIoreVGjHz0aXn7jC_FP2w',
                    image: './images/img1.jpg',
                },
                {
                    id: '2',
                    title: 'None',
                    overview: 'None',
                    image: './images/Nahida.png'
                },
                {
                    id: '3',
                    title: 'None',
                    overview: 'None',
                    image: './images/Nahida.png'
                },
            ]
        }
    },
    computed: {
    },
    methods: {
        navigativeTo:function(index) {
            window.open(this.ArticleList[index].navigation_url)
        }
    }
})