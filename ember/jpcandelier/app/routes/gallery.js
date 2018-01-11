import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return [{
        image: '6300318366_0ef0aa65de_b.jpg',
        category: 'travel',
        title: 'Hermosa Beach',
        location: 'Hermosa Beach, CA',
        camera: 'Diana Camera',
        home: true
    },
    {
        image: '3257423319_7b723c6320_b.jpg',
        category: 'travel',
        title: 'White temple',
        location: 'Chiang Rai, Thailand',
        camera: 'Diana Camera',
        home: true
    },
    {
        image: '4571721717_bb4f9da01a_b.jpg',
        category: 'travel',
        title: 'Astronomy park',
        location: 'Jaipur, India',
        camera: 'Olympus XA',
        home: true
    }];
    }
});
