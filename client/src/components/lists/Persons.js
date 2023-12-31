import { useQuery } from '@apollo/client'
import { GET_PERSONS } from '../../queries'
import { List } from 'antd'
import Person from '../listItems/Person'

const getStyles = () => ({
  list: {
    display: 'flex',
    justifyContent: 'center',
  }
})

const Persons = () => {
  const styles = getStyles()

  const { loading, error, data } = useQuery(GET_PERSONS)
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  console.log('data', data)

  return (
    <List grid={{ gutter: 20, column: 1 }} style={styles.list}>
      {data.persons.map(({ id, firstName, lastName }) => (
        <List.Item key={id}>
          <Person id={id} firstName={firstName} lastName={lastName} />
        </List.Item>
      ))}
    </List>
  )
}

export default Persons
