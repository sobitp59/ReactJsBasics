import React, { useState } from 'react';
import { initialTravelPlan } from './places';


// const PlaceTree = ({place}) => {
//     const childPlaces = place.childPlaces;
//     return (
//         <>
//         <li>{place.title}</li>
//         {
//             childPlaces.length > 0 && (
//                 <ol>
//                     {childPlaces.map(place => (
//                         <PlaceTree key={place.id} place={place}/>
//                     ))}
//                 </ol>
//             )
//         }
//         </>
//     )
// }


const NestedComp = () => {
    const [plan, setPlan] = useState(initialTravelPlan)
    const root = plan[0]
    const planetIds = root.childIds

    const handleComplete = (parentId, childId) => {
        const parent = plan[parentId]
        
        const nextParent = {
            ...parent,
            childIds : parent.childIds.filter(id => id !== childId)
        }

        setPlan({
            ...plan,
            [parentId] : nextParent
        })
    }

    return(
        <>
            <h1>Travel Plan</h1>
            <h3>Places to visit</h3>
            <ol>
            {
                planetIds.map(id => (
                    <PlaceTree 
                        key={id} 
                        childID={id}
                        parentID={0}
                        placeByID={plan}
                        onComplete={handleComplete}
            
                    />
                ))
            }
            </ol>
        </>
    )
}


const PlaceTree = ({childID, parentID, placeByID, onComplete}) => {
    const place = placeByID[childID]
    const childIds =  place.childIds  
   
    return(
        <>
            <li>
                {place.title}
                {' '}
                <button onClick={() => onComplete(parentID, childID)}>Complete</button>
                {childIds.length && (
                    <ol>
                        {childIds.map(childId => (
                            <PlaceTree
                                key={childId}
                                childID={childId}
                                parentID={childID}
                                placeByID={placeByID}
                                onComplete={onComplete}
                            />
                        ))}
                    </ol>
                )}
            </li>
        </>
    )
}


export default NestedComp