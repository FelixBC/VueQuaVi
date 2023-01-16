<template>
  <div>
    <h4> Students Form</h4>
    <br>

    <q-form>
      <div class="q-pa-md">
        <container>
        <div class="q-gutter-md" style="max-width: 300px">
          <q-input  filled v-model="text" label="Name"/>
          <q-input filled v-model="text" label="Age"/>
          <q-input  filled v-model="text" label="Country"/>
          <q-input filled v-model="text" label="City"/>
          <q-input  filled v-model="text" label="Income"/>
          <q-input filled v-model="text" label="Hobby"/>
          <q-btn label="Submit" type="submit" color="primary"/>
          <q-btn label="Reset" type="primary"/>
        </div>
          </container>
      </div>
    </q-form>
  </div>
</template>

<script>
export default {
  name: "Indexx",
  methods: {
    onSubmit(evt) {
      console.log('@submit - do something here', evt)
      evt.target.submit()
    }
  }
}
</script>

<style scoped>
container{
  margin-left: 30px;
}
h4 {
  text-align: center;

}
</style>