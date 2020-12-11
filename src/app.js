import Vue from 'vue';

var app = new Vue (
    {
        el: '#root',
        data: {
            navProduct: [
                'overview',
                'features',
                'compare',
                'tech specs',
                'gallery',
                'learning'
            ],
            isActive: false,
            footerProductsItems: [
                'Corel Painter',
                'ParticleShop',
                'Painter Essentials',
                'Special Offers',
                'Free Trials',
                'All Products'
            ],
            footerQuickLinksItems: [
                'Licensing',
                'Tutorials & Tips',
                'Webinars',
                'The Painter Factory',
                'Discovery Center',
                'Beta Programs'
            ],
            footerSupportItems: [
                'Register your product',
                'Patches & Updates',
                'Knowledgebase',
                'Uninstall instructions',
                'Contact us'
            ],
            footerAboutCorelItems: [
                'Company information',
                'Newsroom',
                'Careers',
                'Partner Program',
                'Legal Information',
                'EULA'
            ],
            itemIndex: 0,
        },
        methods: {
            changeClass(i) {
                this.itemIndex = i;
            },
        }
    }
)
