<template>
  <v-sheet
    max-width="1000"
    min-width="300"
    elevation="5"
    class="align-center justify-center mx-auto"
    style="margin: 40px; padding: 20px;"
  >
    <div>
      <span
        class="text-h5"
      >Hello, {{ store.username }}. </span>
      <v-chip
        prepend-icon="$vuetify"
        variant="outlined"
        color="primary"
      >Verified</v-chip>
    </div>
  </v-sheet>

</template>

<script lang="ts" setup>
import router from '@/router';
import { useUserStore } from '@/store/user'

const store = useUserStore()

function link(s: string) {
  router.push(s)
}

</script>
