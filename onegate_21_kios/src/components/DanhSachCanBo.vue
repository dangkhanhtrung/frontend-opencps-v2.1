<template>
  <div class="py-0 kios-item" style="width: 80%;margin: auto">
    <div>
      <content-placeholders class="mt-3" v-if="loading">
        <content-placeholders-text :lines="10" />
      </content-placeholders>
      <v-card v-else>
        <div class="table-dossier" style="background-color: #ffffff">
          <h4 class="py-3 ml-3 text-xs-center">
            <span style="color:#065694">DANH SÁCH CÁN BỘ LÀM VIỆC TẠI TRUNG TÂM PHỤC VỤ HÀNH CHÍNH CÔNG</span>
          </h4>
          <div class="dossierList" style="border-left:1px solid #dedede">
            <div class="wrap-list">
              <div class="text-bold px-2 py-2 td" style="background-color: #dede;">
                I.	CÁN BỘ TRỰC THUỘC TRUNG TÂM
              </div>
              <!-- <v-layout class="wrap" v-for="(item, index) in employeeList"
              :key="index" v-if="item.userType === '0'">
                <v-flex class="px-2 py-2 td" style="width: 150px;height:150px">
                  <img style="width: 100%;height: 100%;object-fit: contain" :src="'https://vietopencps.github.io/frontend-opencps-v2.1/o/opencps-frontend/kios/img/image' + item.userId +'.png'">
                </v-flex>
                <v-flex class="px-2 py-2 td" style="width: 200px"><span>{{item.fullName}}</span></v-flex>
                <v-flex class="px-2 py-2 td" style="width:calc(100% - 850px)">
                  <span> {{item.jobPos}}</span>
                </v-flex>
                <v-flex class="px-2 py-2 td" style="width: 250px"><span>{{item.workingUnit}}</span></v-flex>
                <v-flex class="px-2 py-2 td text-xs-center" style="width: 150px"><span>{{item.telNo}}</span></v-flex>
              </v-layout> -->
              <v-container fluid grid-list-sm class="px-2">
                <v-layout wrap>
                  <v-flex xs12 sm3 md4 class="mb-2"
                  v-for="(item, index) in employeeList" :key="index" v-if="item.userType === '0'"
                  >
                    <v-card flat color="#e9e9ff" width="100%" height="100%">
                      <v-card-title primary-title>
                        <v-flex class="px-2 py-2 td">
                          <img style="width: 150px;height: 150px;object-fit: contain" :src="'https://vietopencps.github.io/frontend-opencps-v2.1/o/opencps-frontend/kios/img/image' + item.userId +'.png'">
                        </v-flex>
                        <v-flex class="px-2 py-2"><span>{{item.fullName}}</span></v-flex>
                        <v-flex class="px-2 py-2"><span> {{item.jobPos}}</span></v-flex>
                        <v-flex class="px-2 py-2"><span>{{item.workingUnit}}</span></v-flex>
                        <v-flex class="px-2 py-2"><span>{{item.telNo}}</span></v-flex>
                      </v-card-title>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
              <!--  -->
              <div class="text-bold px-2 py-2 td" style="background-color: #dede;">
                II.	 CÁN BỘ BIỆT PHÁI ĐẾN LÀM VIỆC TẠI TRUNG TÂM
              </div>
              <!-- <v-layout class="wrap" v-for="(item, index) in employeeList"
              :key="index" v-if="item.userType === '1'">
                <v-flex class="px-2 py-2 td" style="width: 150px;height:150px">
                  <img style="width: 100%;height: 100%;object-fit: contain" :src="'https://vietopencps.github.io/frontend-opencps-v2.1/o/opencps-frontend/kios/img/image' + item.userId +'.png'">
                </v-flex>
                <v-flex class="px-2 py-2 td" style="width: 200px"><span>{{item.fullName}}</span></v-flex>
                <v-flex class="px-2 py-2 td" style="width:calc(100% - 850px)">
                  <span> {{item.jobPos}}</span>
                </v-flex>
                <v-flex class="px-2 py-2 td" style="width: 250px"><span>{{item.workingUnit}}</span></v-flex>
                <v-flex class="px-2 py-2 td text-xs-center" style="width: 150px"><span>{{item.telNo}}</span></v-flex>
              </v-layout> -->
              <v-container fluid grid-list-sm class="px-2">
                <v-layout wrap>
                  <v-flex xs12 sm3 md4 class="mb-2"
                  v-for="(item, index) in employeeList" :key="index" v-if="item.userType === '1'"
                  >
                    <v-card flat color="#e9e9ff" width="100%" height="100%">
                      <v-card-title primary-title>
                        <v-flex class="px-2 py-2 td">
                          <img style="width: 150px;height: 150px;object-fit: contain" :src="'https://vietopencps.github.io/frontend-opencps-v2.1/o/opencps-frontend/kios/img/image' + item.userId +'.png'">
                        </v-flex>
                        <v-flex class="px-2 py-2"><span>{{item.fullName}}</span></v-flex>
                        <v-flex class="px-2 py-2"><span> {{item.jobPos}}</span></v-flex>
                        <v-flex class="px-2 py-2"><span>{{item.workingUnit}}</span></v-flex>
                        <v-flex class="px-2 py-2"><span>{{item.telNo}}</span></v-flex>
                      </v-card-title>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </div>
          </div>
          <!-- <v-container fluid grid-list-sm class="px-2">
            <v-layout wrap>
              <v-flex xs12 sm6 v-for="(item, index) in dossierList" :key="index" class="mb-2">
                <v-card flat color="#e9e9ff" width="100%" height="100%">
                  <v-card-title primary-title>
                    <v-flex class="xs12 sm12 pb-1">
                      <span class="pr-2 text-bold">Mã hồ sơ: </span>
                      <span class="pl-0"> {{item.dossierNo}}</span>
                    </v-flex>
                    <v-flex class="xs12 sm12 pb-1">
                      <span class="pr-2 text-bold">Chủ hồ sơ: </span>
                      <span class="pl-0"> {{item.applicantName}}</span>
                    </v-flex>
                    <v-flex class="xs12 sm12 pb-1">
                      <span class="pr-2 text-bold">Ngày nộp: </span>
                      <span class="pl-0"> {{item.receiveDate}}</span>
                    </v-flex>
                    <v-flex class="xs12 sm12 pb-1">
                      <span class="pr-2 text-bold">Ngày có kết quả: </span>
                      <span class="pl-0"> {{item.releaseDate}}</span>
                    </v-flex>
                  </v-card-title>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container> -->
        </div>
        <v-btn class="back-btn" title="Trang chủ" @click="goHome" fab color="primary">
          <v-icon v-if="fullScreen" dark>home</v-icon>
        </v-btn>
      </v-card>
    </div>
  </div>
</template>

<script>
import router from '@/router'
import Vue from 'vue/dist/vue.min.js'
import $ from 'jquery'
export default {
  props: [],
  components: {},
  data: () => ({
    loading: false,
    loadingAction: false,
    employeeList: []
  }),
  computed: {
    fullScreen () {
      return this.$store.getters.getFullScreen
    }
  },
  created () {
    let vm = this
    vm.$nextTick(function () {
      vm.$store.commit('setFullScreen', true)
      vm.$store.dispatch('loadInitResource').then(result => {
        console.log('result', result)
        vm.employeeList = result.dataEmployee
      })
    })
  },
  watch: {},
  methods: {
    changeScreen () {
      var vm = this
      vm.$store.commit('setFullScreen', !vm.fullScreen)
    },
    goHome () {
      window.history.back()
    }
  }
}
</script>
