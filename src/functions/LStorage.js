class LStorage {
    #key = 'notes';
    #currentId = 1

    constructor() {
        const savedData = this.getItems();
        if(!savedData.length) return;
        this.#currentId = ++savedData.at(-1).id
    }

    getItems() {
        const data = JSON.parse(localStorage.getItem(this.#key));
        return data ? data : [];
    }
    saveItem(todoItem) {
        const data = this.getItems();

        data.push({
            ...todoItem,
            id: this.#currentId
        })

        this.#currentId += 1;
        localStorage.setItem(this.#key, JSON.stringify(data));

        return this.getItems().at(-1)
    }

    #getItemIndexById(id) {
        const data = this.getItems();

        return data.findIndex(({id: todoItemId}) => {
            return id === todoItemId
        });
    }

    removeItem(id) {
        const data = this.getItems();
        const index = this.#getItemIndexById(id)
        const removedItem = data.splice(index, 1)[0]
        localStorage.setItem(this.#key, JSON.stringify(data));

        return removedItem;
    }

}

const storage = new LStorage();

export default storage;
