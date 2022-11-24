<script>
export default {
  data() {
    return {
      date: new Date(),
    };
  }
}
</script>
<template>
  <v-date-picker v-model="date"/>
</template>
