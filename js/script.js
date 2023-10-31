const { createApp } = Vue;

createApp({

  data() {
    return {
      endpoint: 'server.php',
      title: 'PHP ToDo List JSON',
      list: [],
      newTask: '',

    }
  },

  methods: {
    getApi() {
      axios.post(this.endpoint)
        .then(res => {
          this.list = res.data;
          console.log(this.list);
        })
    },

    addTask() {
      // creo un form in javascript e lo salvo in una variabile
      const formJs = new FormData();

      // a cui aggiungo i dati che voglio fornire, con la sintassi chiave valore
      formJs.append('taskItem', this.newTask);

      // faccio la chiamata axios dove passo i nuovi dati, il server applicherà le varie modifiche e infine aggiorno la nuova lista
      axios.post(this.endpoint, formJs)
        .then(res => {

          this.newTask = '';

          this.list = res.data;
          console.log(this.list);
        })
    },
  },

  mounted() {
    this.getApi();
  }

}).mount('#app');