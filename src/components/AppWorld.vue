<template>
  <div class="world">
    <h1>World</h1>
    <h3> Todo List </h3>
    <input v-model="newItem" v-on:keyup.enter="AddNew">
    <ul>
      <li v-for="item in items" 
        :key="item.id"
        v-bind:class="{finished: item.isFinished}"
        v-on:click="toggleFinish(item)">
        <div><button>{{item.label}}</button>    {{item.isFinished}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppWorld',
  data () {
    return {
      newItem: '',
      items: [{
        label: 'sleeping',
        isFinished: false
      }]
    }
  },
  methods: {
    toggleFinish: function (item) {
      item.isFinished = !item.isFinished
    },
    AddNew: function () {
      this.items.push({
        label: this.newItem,
        isFinished: false
      })
      this.newItem = ''
    }
  }
}
</script>