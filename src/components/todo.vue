<template>
  <div class="q-pa-md">

    <div>
      <pre>
      <h4> Vue Your ToDo</h4>
      <h7>A todo app powered by Vue.js 3</h7>
      </pre>
    </div>

    <div class="q-gutter-y-md column" @on.keyup.enter="" style="max-width: 300px">
      <q-input class="border-2 border-black rounded-md w-full px-2 text-center"
               type="text"
               v-on:keyup.enter="addTaskHandler"
               v-model="newItem" color="grey-3" label-color="teal" outlined label="Add task">
        <template v-slot:append>
          <q-icon name="search" color="teal"/>
        </template>
      </q-input>
      <ol>
        <li v-for= "(item, index) in items" :key="index">
          <q-list bordered separator>
            <q-item clickable v-ripple>
              <q-item-section>
                {{item}}
              </q-item-section>
              <q-item-section>
                <q-btn  @click="deleteElement(index)" class="gt-xs" size="10px" flat dense round icon="delete"/>

              </q-item-section>
            </q-item>
          </q-list>
        </li>
      </ol>

    </div>
  </div>
</template>

<script>
export default {

  name: "Todo",
  data() {
    return {
      newItem: "",
      items: [],

    };
  },
  methods: {
    addTaskHandler() {
      if (!this.newItem) return;
      this.items.push(this.newTaskObj.name);
      this.newItem = "";
    },
    deleteElement(index) {
      this.items.splice(index, 1)
    }
  },
  computed: {
    newTaskObj() {
      return {
        id: this.items.length + 1,
        name: this.newItem,
        complete: false,
      }
    }
  }


};
</script>

<style scoped>

</style>