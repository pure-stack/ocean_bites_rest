export const CATEGORIES = [
    {
        id: 'food',
        title: 'category.food'
    },
    {
        id: 'staff',
        title: 'category.staff'
    },
    {
        id: 'rent',
        title: 'category.rent'
    }
]

export const SUBCATEGORIES = {
    [CATEGORIES[0].id]: [
        {
            id: 'meat',
            title: 'subcategory.meat',
            field: 'meat'
        }, {
            id: 'fruits',
            title: 'subcategory.fruits',
            field: 'fruits'
        }, {
            id: 'dairy',
            title: 'subcategory.dairy',
            field: 'dairy'
        }, {
            id: 'beverages',
            title: 'subcategory.beverages',
            field: 'beverages'
        }, {
            id: 'other',
            title: 'subcategory.other',
            field: 'other'
        }
    ],
    [CATEGORIES[1].id]: [{
        id: 'kitchen',
        title: 'subcategory.kitchen',
        field: 'kitchen'
    }, {
        id: 'front',
        title: 'subcategory.front',
        field: 'front'
    }, {
        id: 'mgmt',
        title: 'subcategory.mgmt',
        field: 'mgmt'
    }, {
        id: 'overtime',
        title: 'subcategory.overtime',
        field: 'overtime'
    }, {
        id: 'training',
        title: 'subcategory.training',
        field: 'training'
    }],
    [CATEGORIES[2].id]: [
        {
            id: 'rent',
            title: 'subcategory.rent',
            field: 'rent'
        }, {
            id: 'utils',
            title: 'subcategory.utils',
            field: 'utils'
        }, {
            id: 'cleaning',
            title: 'subcategory.cleaning',
            field: 'cleaning'
        }, {
            id: 'waste',
            title: 'subcategory.waste',
            field: 'waste'
        }, {
            id: 'delivery',
            title: 'subcategory.delivery',
            field: 'delivery'
        }
    ]
}
