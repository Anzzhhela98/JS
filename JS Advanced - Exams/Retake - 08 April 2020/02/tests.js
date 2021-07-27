const { Repository } = require("./solution.js");
const { assert } = require('chai');

describe("Repository Tests", () => {
    let repository = '';
    let properties = '';
    let entity = ''
    beforeEach(() => {
        properties = {
            name: "string",
            age: "number",
            birthday: "object",
        };
        repository = new Repository(properties);
        entity = { name: 'Anzhela', age: 19, birthday: new Date(1998, 0, 7) };
    });

    it("Get Count", () => {
        assert.equal(repository.count, 0)
    })

    it('Add Entity, adding correct ', () => {
        assert.equal(repository.add(entity), 0);
        assert.equal(repository.add(entity), 1);
    });

    it('Add Entity Should Throw Error', () => {
        let anotherEntity = { name1: 'Anzhela', age: 19,birthday:new Date(1998, 0, 7) }
        assert.throws(() => repository.add(anotherEntity), `Property name is missing from the entity!`);
    });

    it('Add Entity Should Throw Type Error', () => {
        let wrongEntity = {
            name: 'Stamat',
            age: 29,
            birthday: 11
        };

        let repository = new Repository(properties);
        assert.throws(() => repository.add(wrongEntity), `Property birthday is not of correct type!`);
    });

    it("Get Id should Throw", () => {
        assert.throws(() => repository.getId(0), `Entity with id: 0 does not exist!`)
    });

    it('Get Id Should Return 0', () => {
        let anotherEntity = { name: 'GIGI', age: 21,birthday:new Date(1998, 0, 7) }
        repository.add(entity);
        repository.add(anotherEntity);
        assert.deepEqual(repository.getId(0), entity)
        assert.deepEqual(repository.getId(1), anotherEntity)
    });

    it('Update Should Throw Error', () => {
        repository.add(entity);
        assert.throws(() => repository.update(10, entity), `Entity with id: 10 does not exist!`);
    });

    it('Update replace the entity with the given Id ', () => {
        let anotherEntity = { name: 'GIgi', age: 20,birthday:new Date(1998, 0, 7) }
        repository.add(entity);
        repository.update(0, anotherEntity);
        assert.equal(repository.getId(0), anotherEntity)
    })
    it('Del Should Throw Error', () => {
        repository.add(entity);
        assert.throws(() => repository.del(10), "Entity with id: 10 does not exist!")
    })

    it('Del Should Delete Correct', () => {
        let anotherEntity = { name: 'GIgi', age: 20 ,birthday:new Date(1998, 0, 7)}
        repository.add(entity);
        repository.add(anotherEntity);
        repository.del(0);

        assert.equal(repository.data.size, 1);
        assert.deepEqual(repository.getId(1), anotherEntity);
    })
});