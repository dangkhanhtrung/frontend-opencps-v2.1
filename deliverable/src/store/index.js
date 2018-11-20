import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import saveAs from 'file-saver'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    groupId: window.themeDisplay !== undefined ? window.themeDisplay.getScopeGroupId() : 0,
    snackbarerror: false,
    snackbarsocket: false,
    refreshSocket: 0,
    initData: {},
    tocken: '',
    loginUser: [
      {
        'email': '',
        'role': ''
      }
    ],
    user: null,
    socket: {
      isConnected: false,
      message: '',
      reconnectError: false
    },
    endPointApi: '/o/rest/v2',
    // endPointApi: 'http://127.0.0.1:8081/api',
    getDeliverableTypes: []
  },
  actions: {
    loadInitResource ({state}) {
      return new Promise((resolve) => {
        if (window.themeDisplay !== null && window.themeDisplay !== undefined) {
          state.initData['groupId'] = window.themeDisplay.getScopeGroupId()
          state.initData['user'] = {
            'userName': window.themeDisplay.getUserName(),
            'userEmail': '',
            'userId': window.themeDisplay.getUserId()
          }
        } else {
          state.initData['groupId'] = 0
          state.initData['user'] = {
            'userName': '',
            'userEmail': '',
            'userId': 20103
          }
        }
        resolve(state.initData)
      })
    },
    getDeliverableTypes ({ commit, state }) {
      return new Promise(() => {
        let options = {
          headers: {
            'Authorization': 'Basic dGVzdEBsaWZlcmF5LmNvbTp0ZXN0',
            'groupId': state.groupId,
            'Accept': 'application/json'
          }
        }
        let body = `
          {
            getDeliverableTypes(start: 1, end: -1) {
              typeCode
              typeName
            }
          }
        `
        axios.post('http://localhost:8080/o/v1/opencps/deliverable', body, options).then(function (response) {
          state.getDeliverableTypes = response.data.getDeliverableTypes
        }).catch(function () {
          state.getDeliverableTypes = []
          commit('setsnackbarerror', true)
        })
      })
    }
  },
  mutations: {
    SOCKET_ONOPEN (state, event) {
      Vue.prototype.$socket = event.currentTarget
      state.socket.isConnected = true
      setTimeout(() => {
        if (state.socket.isConnected && state.refreshSocket === 3) {
          state.refreshSocket = 0
          window.location.reload(true)
        }
      }, 4000)
    },
    SOCKET_ONCLOSE (state, event) {
      console.log('SOCKET_ONCLOSE', event)
      state.refreshSocket = 3
      state.snackbarsocket = true
      state.socket.isConnected = false
    },
    SOCKET_ONERROR (state, event) {
      console.error(state, event)
    },
    SOCKET_ONMESSAGE (state, message) {
      state.message = message
    },
    [WebSocket.WS_RECONNECT](state, count) {
      console.log('WS_RECONNECT', state)
      console.log('WS_RECONNECT', count)
    },
    [WebSocket.WS_RECONNECT_ERROR](state) {
      state.socket.reconnectError = true
    },
    setInitData (state, payload) {
      state.initData = payload
    },
    setsnackbarerror (state, payload) {
      state.snackbarerror = payload
    },
    setsnackbarsocket (state, payload) {
      state.snackbarsocket = payload
    }
  },
  getters: {
    getsnackbarerror (state) {
      return state.snackbarerror
    },
    getsnackbarsocket (state) {
      return state.snackbarsocket
    },
    getDeliverableTypes (state) {
      return state.getDeliverableTypes
    }
  }
})