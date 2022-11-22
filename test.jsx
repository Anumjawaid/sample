import React, { useState } from 'react'


export default function Form() {

    const [Name, setName] = useState()
    const [Age, setAge] = useState()
    const [Email, setEmail] = useState()
    const [data, setData] = useState([])


    let Add = () => {
        console.log("fdsdfs", Name, Email, Age)
        let cond=isUnique(Email)
        
        if(cond){
            data.push({
                name:Name,age:Age,email:Email
            })
            setData(data)
            setAge('')
            setName('')
            setEmail('')

        }
        else{
              console.log("similar")
        }

      

    }

    let isUnique=(name)=>{
        let flag=true
       data.map((v,i)=>{
                if(v.email==name){
                    console.log("in map false")
                    flag=false
                }
       })
       return flag
       
    }


    return (
        <>
            <h5>Form fields</h5>
            <div className="container" style={{color:'white'}}>
                <label htmlFor="name"> Name</label>
                <input name='name' value={Name} onChange={(e) => setName(e.target.value)} />
                <label htmlFor="email"> Email</label>
                <input name='email' value={Email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="age"> Age</label>
                <input name='age' value={Age} onChange={(e) => setAge(e.target.value)} />
                <button onClick={Add}>add</button>


                { data.length ==0 ?
                <>
                Yes
               
                </>
                :
                <>
                No
                 <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                    </tr>
                    </thead>
                    <tbody>
                    
                         {data.map((v,i)=>(
                            <tr key={i}>
                                <td>{v.name}</td>
                                <td>{v.email}</td>
                                <td>{v.age}</td>
                                </tr>
                            
                         ))}
                         
                    </tbody>
                    
                </table>
                </>}

            </div>
        </>
    )
}