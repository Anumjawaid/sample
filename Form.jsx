import React, { useState } from 'react'


export default function Form() {

    const [Name, setName] = useState()
    const [Age, setAge] = useState()
    const [Email, setEmail] = useState()
    const [data, setData] = useState([])


    let Add = () => {
        console.log("fdsdfs", Name, Email, Age)
        let cond=isUnique(Name)
        console.log(cond,"cond")
        data
        if(cond){
            data.push({
                name:Name,age:Age,email:Email
            })
            setData(data)

        }
        else{
              console.log("similar")
        }

      

    }

    let isUnique=(name)=>{
        
       return name==Name
    }


    return (
        <>
            <h5>Form fields</h5>
            <div className="container">
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
                    <tr>
                        <th>fd</th>
                        <th>fd</th>
                        <th>fdsd</th>
                    </tr>
                    </tbody>
                    
                </table>
                </>}

            </div>
        </>
    )
}