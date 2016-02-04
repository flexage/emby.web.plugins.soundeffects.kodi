define([], function () {

    return function () {

        var self = this;

        self.name = 'Plink';
        self.type = 'soundeffects';
        self.id = 'androidtvsoundeffects';

        self.getEffects = function () {
            return {
                navigation: 'navigation.wav',
                select: 'select.wav'
            };
        };
    }
});
