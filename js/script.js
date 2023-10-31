const { createApp } = Vue;

createApp({

  data() {
    return {
      title: 'PHP ToDo List JSON',
      list: [],
      newTask: '',

    }
  },

  methods: {
    getApi() {
      axios.get('server.php')
        .then(res => {
          this.list = res.data;
          console.log(this.list);
        })
    },

    addTask() {
      if (this.newTask !== '') {
        this.list.push(this.newTask);
        this.newTask = '';
        console.log(this.list);
      }
    }
  },

  mounted() {
    this.getApi();
  }

}).mount('#app');