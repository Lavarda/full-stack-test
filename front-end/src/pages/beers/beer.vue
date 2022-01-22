<template>
  <h3> Beer </h3>
  <q-table
    :rows="beers"
    :columns="columns"
    :filter="filter"
    :loading="loading"
    :rows-per-page-options="[5,10, 20, 30, 40, 50, 100, 500]"
    rows-per-page-label="Itens per page:"
    @request="getData"
    v-model:pagination="pagination"
    class="shadow-0"
    style="background: #dadada"
    dense
  >
    <template v-slot:top-right>
      <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </template>
    <template v-for="each in slotNamesDynamic" v-slot:[each]="props">
      <q-td :props="props">
        <div v-if="each === 'body-cell-view'">
          <q-btn color="grey-8" icon="visibility" dense flat round @click="$emitter.emit('drawerBeer', {id:props.row.id})"></q-btn>
        </div>
        <div v-else class="row">
          {{props.value}}
        </div>
      </q-td>
    </template>
  </q-table>
</template>

<script>
export default {
  name: "beer",
  data () {
    return {
      beers: [],
      columns: [
        {
          name: 'view',
          field: 'view',
          label: '',
          required: true,
          headerClasses: 'g-w-34'
        },
        {
          name: 'id',
          field: 'id',
          align: 'left',
          label: 'ID',
          required: true,
        },
        {
          name: 'name',
          field: 'name',
          align: 'left',
          label: 'Name',
          required: true,
          sortable: true,
        },
        {
          name: 'tagline',
          field: 'tagline',
          align: 'left',
          label: 'Tagline',
          required: true,
        },
        {
          name: 'first_brewed',
          field: 'first_brewed',
          align: 'left',
          label: 'First Brewed',
          required: true,
        },
        {
          name: 'abv',
          field: 'abv',
          align: 'left',
          label: 'ABV',
          required: true,
        },
        {
          name: 'ibu',
          field: 'ibu',
          align: 'left',
          label: 'IBU',
          required: true,
        },
      ],
      filter: '',
      loading: false,
      pagination: {
        page: 1,
        rowsPerPage: 5
      },
    }
  },
  computed: {
    slotNamesDynamic() {
      return (this.columns || []).map(n => 'body-cell-' + n.name)
    }
  },
  beforeMount() {
    this.getData()
  },
  methods: {
    async getData () {
      try {
        this.loading = true
        const beers = await this.$axios.get('/beers')

        if (beers && beers.data && beers.status && beers.status === 200) {
          this.beers = beers.data.data
          this.loading = false
        } else if (beers && beers.data && beers.data.message) {
          this.$q.notify({message: beers.data.message, type: 'negative'})
        } else {
          this.$q.notify({message: 'Error to get beers, try again later.', type: 'negative'})
        }
      } catch (e) {
        this.loading = false
        throw new Error(e)
      }
    },
  }
}
</script>

<style scoped>
.q-table th {
  font-size: 14px;
  font-weight: 600;
}
.table-tags{
  min-width: 62px;
}
.table-tags i{
  height: 17px !important;
  margin-top: 2.5px;
  padding-top: 0 !important;
}
.table-tags .row{
  justify-content: center !important;
}
</style>
