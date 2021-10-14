// create modal
$('#trigger').click(() => $('#trigger').createModal({
    text: {
        title: 'Modal title #3',
        body: 'It is third modal which we create with JS'
    },
    btns: {
        count: 2,
        settings: [
            [
                'Close',
                ['btn-danger', 'mr-10'],
                true
            ],
            [
                'Save changes',
                ['btn-success'],
                false,
                () => {
                    alert('Everythigs saved!');
                }
            ]
        ]
    }
}));