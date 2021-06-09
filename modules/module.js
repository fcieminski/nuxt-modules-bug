import { resolve } from 'path'

export default function () {
  this.addLayout(resolve(__dirname, './error.vue'), 'error')
}
