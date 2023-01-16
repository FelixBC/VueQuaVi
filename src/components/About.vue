<template>
<h1>What's up I'm the about page </h1>
  <q-form>
    <div class="q-pa-md">
      <container>
        <div class="q-gutter-md" style="max-width: 300px">
          <q-input  filled v-model="text" label="Name"/>
          <q-btn label="Submit" type="submit" color="primary"/>
        </div>
      </container>
    </div>
  </q-form>
</template>

<script>
export default {
  name: "About"
}
</script>

<style scoped>

</style>