<template>
  <q-drawer no-swipe-open no-swipe-close content-class="overflow-unset" v-model="isActive" side="right" behavior="mobile" :width="innerWidth - 600" style="background: #dadada;">
    <q-scroll-area class="full-height full-width q-pl-md">
      <div class="default-layout">
        <div class="row items-stretch">
          <div class="q-ml-sm align-center" style="font-size: 22px">
            <q-img src="~assets/beerBlack.svg" width="34px" height="34px"></q-img>
            Beer data
          </div>
        </div>
        <div v-if="!loading" class="q-pr-sm q-pt-sm q-mt-sm">
          <q-list highlight separator no-border>
            <q-item>
              <q-item-section>
                <div class="row">
                  <div class="col-4 flex items-center opacity-6">
                    ID
                  </div>
                  <div class="col-8">
                    {{data.id}}
                  </div>
                </div>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <div class="row">
                  <div class="col-4 flex items-center opacity-6">
                    Name
                  </div>
                  <div class="col-8">
                    {{data.name}}
                  </div>
                </div>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <div class="row">
                  <div class="col-4 flex items-center opacity-6">
                    Tagline
                  </div>
                  <div class="col-8">
                    {{data.tagline}}
                  </div>
                </div>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <div class="row">
                  <div class="col-4 flex items-center opacity-6">
                    First brewed
                  </div>
                  <div class="col-8">
                    {{data.first_brewed}}
                  </div>
                </div>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <div class="row">
                  <div class="col-4 flex items-center opacity-6">
                    Description
                  </div>
                  <div class="col-8">
                    {{data.description}}
                  </div>
                </div>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <div class="row">
                  <div class="col-4 flex items-center opacity-6">
                    ABV
                  </div>
                  <div class="col-8">
                    {{data.abv}}
                  </div>
                </div>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <div class="row">
                  <div class="col-4 flex items-center opacity-6">
                    IBU
                  </div>
                  <div class="col-8">
                    {{data.ibu}}
                  </div>
                </div>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <div class="row">
                  <div class="col-4 flex items-center opacity-6">
                    Breweed tips
                  </div>
                  <div class="col-8">
                    {{data.brewers_tips}}
                  </div>
                </div>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <div class="row">
                  <div class="col-4 flex items-center opacity-6">
                    EBC
                  </div>
                  <div class="col-8">
                    {{data.ebc}}
                  </div>
                </div>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <div class="row">
                  <div class="col-4 flex items-center opacity-6">
                    SRM
                  </div>
                  <div class="col-8">
                    {{data.srm}}
                  </div>
                </div>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <div class="row">
                  <div class="col-4 flex items-center opacity-6">
                    PH
                  </div>
                  <div class="col-8">
                    {{data.ph}}
                  </div>
                </div>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
      <div v-if="loading" class="text-center" style="margin-top: 30%">
        <q-spinner
          color="primary"
          size="5em"
          :thickness="5"
        />
      </div>
    </q-scroll-area>
  </q-drawer>
</template>

<script>
export default {
  name: 'drawer-beer',
  data () {
    return {
      isActive: false,
      loading: false,
      data: {},
      innerWidth: 0
    }
  },
  beforeMount () {
    this.innerWidth = window.innerWidth
    console.log('inner', this.innerWidth)
    this.$emitter.off('drawerBeer')
    this.$emitter.on('drawerBeer', ({id}) => {
      this.data = {}
      this.isActive = true
      this.init(id)
    })
  },
  methods: {
    async init (id) {
      try {
        this.loading = true

        const beer = await this.$axios.get(`/beer/${id}`)

        if (beer && beer.data && beer.status && beer.status === 200) {
          this.data = beer.data.data
          this.loading = false
        } else if (beer && beer.data && beer.data.message) {
          this.$q.notify({message: beer.data.message, type: 'negative'})
        } else {
          this.$q.notify({message: 'Error to get beer, try again later.', type: 'negative'})
        }
      } catch (e) {
        throw new Error(e)
      } finally {
        this.loading = false
      }
    },
  }
}
</script>

<style scoped>
.overflow-unset {
  overflow: unset;
}
.chat-balloon {
  max-width: 300px;
  border-radius: 20px;
  padding: 6px 15px;
  margin-bottom: 10px;
  word-break: break-word;
}
</style>
