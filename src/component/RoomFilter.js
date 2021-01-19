import React from 'react';
import {useContext} from 'react';
import {RoomContext} from '../Context';
import Title from "../component/Title";
//get all unique types of room
const getUnique=(item,value)=>{
return [...new Set(item.map(item => item[value]))]
}
export default function RoomFilter({rooms}) {
   const context=useContext(RoomContext);
   const {handleChange,type,capacity,price,minPrice,maxPrice,minSize,maxSize,breakfast,pets}=context;
   //get unique types
   let types=getUnique(rooms,'type');
    types =['all',...types];
    //map to jsx to filter room types
    types=types.map((item,index)=>{
        return <option value={item} key={index}>{item}</option>
    })
     //map to jsx to filter number of peoples
    let people=getUnique(rooms,'capacity');
    people=people.map((item,index)=>{
        return <option key={index} value={item}>{item}</option>
    })
    return (
       <section className="filter-container">
           <Title title="search rooms"/>
           <form className="filter-form">
               {/* select type */}
               <div className="form-group">
                   <label htmlFor="type">type</label>
                   <select 
                        name="type" 
                        id="type" 
                        value={type} 
                        className="form-control" 
                        onChange={handleChange}>
                            {types}
                    </select>
               </div>
               {/* end select type */}
               {/* guest number */}
               <div className="form-group">
                   <label htmlFor="capacity">Guest</label>
                   <select 
                        name="capacity" 
                        id="capacity" 
                        value={capacity} 
                        className="form-control" 
                        onChange={handleChange}>
                            {people}
                    </select>
               </div>
               {/* end guest number */}
               {/*room price*/}
               <div className="form-group">
                   <label htmlFor="price">room price ${price}</label>
                   <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control"/>
               </div>
               {/*end of room price */}
               {/*size*/}
               <div className="form-group">
                   <label htmlFor="size">room size</label>
                   <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input"/>
                   <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input"/>
               </div>
               {/*end of size */}
               {/*extras */}
               <div className="form-group">
                   <div className="single-extra">
                       
                       <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange}/>
                       <label htmlFor="breakfast">breakfast</label><br/>
                       <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange}/>
                       <label htmlFor="pets">pets</label>
                   </div>
               </div>
               {/*end of extras */}
           </form>
       </section>
    )
}

