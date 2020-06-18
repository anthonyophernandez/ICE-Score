import { Server } from 'miragejs'
import tasksJSON from './tasks.json'

export default function () {
  const server = new Server()

  server.namespace = 'api'

  server.get('/tasks', ({ db }, request) => db.tasks)

  server.post('/tasks/', (schema, request) => {
    const task = JSON.parse(request.requestBody)

    return schema.db.tasks.insert(task)
  })
  server.db.loadData({ tasks: tasksJSON })
}
