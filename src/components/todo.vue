<template>

  <b-container>
    <div class="row">
     <div class="col-sm-4" style="padding: 5%">
    <b-col>
      <pre>
      <h4> Vue Your ToDo</h4>
      <h7>A todo app powered by Vue.js 3</h7>

      </pre>
    </b-col>

   <div class="col-sm-4">
    <b-col>
      <q-input class="border-2 border-black rounded-md w-full px-2 text-center"
               type="text"
               v-on:keyup.enter="addTaskHandler"
               v-model="newItem" color="grey-3" label-color="teal" outlined label="Add task">
        <template v-slot:append>
          <q-icon name="search" color="teal"/>
        </template>
      </q-input>
    </b-col>
   </div>
     </div>
    <div class="col-sm-4" style="padding: 5%;">
    <ol>
      <p> Recently added ~ New </p>
      <li v-for="(item, index) in items" :key="index">
        <q-list bordered separator>
          <q-item clickable v-ripple>

            <q-item-section>
              {{ item }}
            </q-item-section>
            <q-item-section>
              <q-btn @click="deleteElement(index)" class="gt-xs" size="10px" flat dense round icon="delete"/>
              <q-btn @click="updateElement(index, this.newItem)" class="gt-xs" size="10px" flat dense round
                     icon="edit"/>
              <q-btn @click="moveElementToDone()" class="gt-xs" size="10px" flat dense round icon="done"/>

            </q-item-section>

          </q-item>
        </q-list>
      </li>
    </ol>
    </div>
     <div class="col-sm-4" style="padding: 5%;"> Done stuff </div>
    </div>

  </b-container>
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
    },
    updateElement(index, newValue) {
      this.items.splice(index, 1, newValue)
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