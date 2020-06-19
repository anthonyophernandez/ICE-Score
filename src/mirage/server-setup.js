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

  server.delete('/tasks/:id', (schema, request) => {
    return schema.db.tasks.remove(request.params.id)
  })

  server.put('/tasks/:id', function () {
    return new Response(200)
  })
  server.db.loadData({ tasks: tasksJSON })
}
