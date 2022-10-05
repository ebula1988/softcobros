import {useSelector} from 'react-redux'

const ClientsList = () => {
    const clientsState = useSelector(state => state.clients)
    console.log(clientsState)



  return (
    <div><h1>ClientsList</h1></div>
  )
}

export default ClientsList