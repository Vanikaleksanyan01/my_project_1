import React, {useState, useEffect} from 'react';
import './style.css'

function MyLogin(){

    const [formValues, setFormValues] = useState({email: '', password: '', remember: false})
    const [isLogedin, setIslogedin] = useState(false)

    const onChange = (event) => {
        if(event.target.name === 'remember') {
            setFormValues({ ...formValues, [event.target.name]: event.target.checked })
        } else {
            setFormValues({ ...formValues, [event.target.name]: event.target.value })
        }
    }

    const handleLogin = (event) => {
        event.preventDefault();
        if (formValues.remember){
            localStorage.setItem('userData', JSON.stringify(formValues))
        } else {
            sessionStorage.setItem('userData', JSON.stringify(formValues))
        }

        setIslogedin(true)
    }

    const back = () => {
        localStorage.clear();
        sessionStorage.clear();
        setIslogedin(false);
    }

    useEffect(() => {
        const userData = localStorage.getItem('userData') || sessionStorage.getItem('userData');
        if (userData) {
            setIslogedin(true)
        }
    }, [] )



    return (
        <>
            {isLogedin ?
                <div>
                    <p>Back</p>
                    <button onClick={back}>Back</button>
                </div>
                : <form>
                    <label>Login:<br />
                    <input name='email' type='login' onInput={onChange} /><br />
                    </label>
                    <label>Password:<br />
                    <input name='password' type='password' onInput={onChange} /><br />
                    </label>
                    <label>Remember:
                    <input name='remember' type='checkbox' onChange={onChange} />
                    </label><br /><br />
                    <button onClick={handleLogin}>Login</button>
                </form>
            }
        </>
    )

}
    
export default MyLogin