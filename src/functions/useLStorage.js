import {ref} from "vue";
export const data = ref([])
const key = 'data';
let currentId = 1

export const getItems = () => {
  data.value = JSON.parse(localStorage.getItem(key));
  return data.value ? data.value : [];
};

const savedData = getItems()

currentId = savedData.length ? ++savedData.at(-1).id : 1

export const saveItem = (todoItem) => {
  const data = getItems();

  data.push({
              ...todoItem,
              id: currentId
            })

  currentId += 1;
  localStorage.setItem(key, JSON.stringify(data));
  return getItems().at(-1)
};

export const getItemIndexById = (id) => {
  data.value = getItems();

  return data.value.findIndex(({id: todoItemId}) => {
    return Number(id) === todoItemId
  });
}

export const getItemById = (id) => {
  const data = getItems();

  return data.find(({id: todoItemId}) => {
    return Number(id) === todoItemId
  });
}

export const removeItem = (id) => {
  const data = getItems();
  const index = getItemIndexById(id)
  const removedItem = data.splice(index, 1)[0]
  localStorage.setItem(key, JSON.stringify(data));

  return removedItem;
}

export const changeItemStatus = ({id, status}) => {
  changeItemField(id, 'status', status);
}

export const changeItemField = (id, field, value) => {
  const data = this.getItems();
  const index = getItemIndexById(id);
  const currentEl = data[index];
  currentEl[field] = value;
  localStorage.setItem(key, JSON.stringify(data));
  return currentEl;
}

export const changeItemFields = (id, values) => {
  const data = getItems();
  const index = getItemIndexById(id);
  data[index] = values;
  data[index].id = Number(id);
  localStorage.setItem(key, JSON.stringify(data));
  return data[index];
}