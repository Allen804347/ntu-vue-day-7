<script setup>
import { ref, reactive, computed } from 'vue'
import Product from './Li.vue'
//  = = = router
import { useRouter } from 'vue-router'
//  = = =


const currentId = ref(-1)


const cola = { id: 'ad1', productName: 'Cola', price: 5, description: 'A creamy and delicious milkshake with various flavors.' }
const sprite = { id: 'ad2', productName: 'Sprite', price: 5, description: 'A creamy and delicious milkshake with various flavors.' }

const data = reactive([
  { id: 1, productName: 'Bubble Tea', price: 4, description: 'A sweet and refreshing tea with tapioca pearls.' },
  { id: 2, productName: 'Milkshake', price: 5, description: 'A creamy and delicious milkshake with various flavors.' },
  { id: 3, productName: 'Smoothie', price: 6, description: 'A healthy and fruity smoothie with fresh ingredients.' }
])

const newData = computed(() => data.filter((el) => el.price > 5))

const closeProduct = () => {
  currentId.value = -1
}

const openProduct = (targetId) => {
  currentId.value = targetId
}

//  = = = router
const router = useRouter()

const toNamedPage = () => {
  router.push('/named')
}
//  = = =

</script>

<template>
  <p>Drink Menu</p>
  <ul>
    <template v-for="item, index in data" :key="item.id">
      <Product
        v-if="index !== 1"
        :id="item.id"
        :productName="item.productName"
        :price="item.price"
        :description="item.description"
        :currentId="currentId"
        @closeProduct="closeProduct"
        @openProduct="openProduct"
      />
      <Product
        v-else
        :id="item.id"
        :productName="item.productName"
        :price="item.price"
        :description="item.description"
        :currentId="currentId"
        @closeProduct="closeProduct"
        @openProduct="openProduct"
      >
        <Product
        :id="cola.id"
        :productName="cola.productName"
        :price="cola.price"
        :description="cola.description"
        :currentId="currentId"
        @closeProduct="closeProduct"
        @openProduct="openProduct"
      ></Product>
      </Product>
    </template>
  </ul>
  <button @click="toNamedPage">
    go to Named Slot Page
  </button>
</template>
