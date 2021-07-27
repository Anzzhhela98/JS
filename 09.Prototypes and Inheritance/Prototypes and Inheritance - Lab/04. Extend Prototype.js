function extendPrototype(classes) {
    classes.prototype.species = 'Human';
    classes.prototype.toSpeciesString = function() {
        return `I am a ${this.species}. ${this.toString()}`;
    }
}