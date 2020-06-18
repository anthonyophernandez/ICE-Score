import { Server, JSONAPISerializer, Model } from 'miragejs'
import tasksJSON from './tasks.json'

export default function () {
  const server = new Server({
    serializers: {
      application: JSONAPISerializer
    },
    fixtures: {
      tasks: tasksJSON
    },
    models: {
      task: Model
    }
  })

  server.namespace = 'api'

  server.get('/tasks')
  server.post('/tasks/', function (schema, request) {
    const json = JSON.parse(request.requestBody)
    const response = schema.tasks.create(json)
    return this.serialize(response)
  })
}
