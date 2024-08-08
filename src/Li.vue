<script setup>
const props = defineProps({
  id: {
    type: [String, Number],
    required: true
  },
  productName: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  currentId: {
    type: [String, Number],
    required: true
  }
})

const emits = defineEmits(['closeProduct', 'openProduct'])

const close = () => {
  emits('closeProduct')
}

const open = (targetId) => {
  emits('openProduct', targetId)
}
</script>

<template>
  <li @click="open(props.id)">
    <p>{{ props.productName }} - ${{ props.price }}</p>
    <div v-if="props.currentId === props.id">
      <p>{{ props.description }}</p>
      <button @click.stop="close">close</button>
    </div>
  </li>
  <slot></slot>
</template>
