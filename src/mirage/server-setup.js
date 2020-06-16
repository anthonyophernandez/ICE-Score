import { Server } from 'miragejs'
import tasksJSON from './tasks.json'

export default function () {
  const server = new Server()

  server.namespace = 'api'

  server.get('/tasks', ({ db }, request) => db.tasks)

  server.db.loadData({ tasks: tasksJSON })
}
