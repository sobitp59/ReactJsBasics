import React, { useState } from 'react'

const ShareStateExII = () => {
    const [foodLists, setFoodLists] = useState(foods)

    const handleSearchItems = (e) => {
        setFoodLists(filterItems(foodLists, e.target.value))
    }

  return (
    <div>
        <h1>Share State Challenge II</h1>
        <SearchBar 
            label='Search : '
            query={handleSearchItems}
        />
        <List 
            items={foodLists}
        />
    </div>
  )
}


const SearchBar = ({label, query}) => {
    return(
        <>
            <label>
                {label}
                {' '}
                <input
                    placeholder='enter your query...'
                    onChange={query}
                />
            </label>
        </>
    )
}

const List = ({items}) => {
    return(
        <>
            {
                    <table>
                        <tbody>
                            {
                               items.map(item => (
                                <tr key={item.id}> 
                                    <td><h3>{item.name}</h3> </td>
                                    <td>{item.description}</td>
                                </tr>
                               ))
                            }
                        </tbody>
                    </table>
            }
        </>
    )
}



const foods = [{
    id: 0,
    name: 'Sushi',
    description: 'Sushi is a traditional Japanese dish of prepared vinegared rice'
  }, {
    id: 1,
    name: 'Dal',
    description: 'The most common way of preparing dal is in the form of a soup to which onions, tomatoes and various spices may be added'
  }, {
    id: 2,
    name: 'Pierogi',
    description: 'Pierogi are filled dumplings made by wrapping unleavened dough around a savoury or sweet filling and cooking in boiling water'
  }, {
    id: 3,
    name: 'Shish kebab',
    description: 'Shish kebab is a popular meal of skewered and grilled cubes of meat.'
  }, {
    id: 4,
    name: 'Dim sum',
    description: 'Dim sum is a large range of small dishes that Cantonese people traditionally enjoy in restaurants for breakfast and lunch'
  }];



const filterItems = (items, query) => {
    query = query.toLowerCase()
    return items.filter(item => 
        item.name.split(' ').some(word => 
            word.toLowerCase().startsWith(query)  
        )    
    )
}



export default ShareStateExII