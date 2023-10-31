const { createApp } = Vue;

createApp({

  data() {
    return {
      endpoint: 'server.php',
      title: 'PHP ToDo List JSON',
      list: [],
      newTask: '',
      error: false,

    }
  },

  methods: {

    getApi() {
      axios.post(this.endpoint)
        .then(res => {
          this.list = res.data;
        })
    },

    addTask() {
      // 1. creo un form in javascript e lo salvo in una variabile
      // 2. a cui aggiungo i dati che voglio fornire, con la sintassi chiave valore
      // 3. faccio la chiamata axios dove passo i nuovi dati, il server applicherà le varie modifiche e infine aggiorno la nuova lista

      const formJs = new FormData();
      formJs.append('text', this.newTask);

      axios.post(this.endpoint, formJs)
        .then(res => {
          this.newTask = '';
          this.list = res.data;
        })
    },

    removeTask(index) {
      const formJs = new FormData();
      formJs.append('indexRemove', index);
      console.log(this.list);

      if (this.list[index].done === true) {
        this.error = false;

        axios.post(this.endpoint, formJs)
          .then(res => {
            this.list = res.data;
          })
      }
      else {
        this.error = true
      }

    },

    toggleDone(index) {
      const formJs = new FormData();
      formJs.append('indexDone', index);

      axios.post(this.endpoint, formJs)
        .then(res => {
          this.list = res.data;
        })
    },

    reset() {
      const formJs = new FormData();
      formJs.append('resetBtn', 'reset');

      axios.post(this.endpoint, formJs)
        .then(res => {
          this.list = res.data;
        })
    },

    editTask() {
      const formJs = new FormData();
      formJs.append('index', index);

      axios.post(this.endpoint, formJs)
        .then(res => {
          this.list = res.data;
        })
    }

  },

  mounted() {
    this.getApi();
  }

}).mount('#app');