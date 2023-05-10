import {useState} from 'react';

function MyLogin(){

    const
    }
    
    return(
        <div>
            <form>
                <label>
                    Login:<br/>
                    <input type='text'/><br/>
                </label>
                <label>
                    Password:<br/>
                    <input type='password'/><br/><br/>
                </label>
                <label>
                    Remember Me:
                    <input type='checkbox'/><br/><br/>
                </label>

                <button onClick={login}>Login</button>
                <button onClick={login}>Login</button>

                
            </form>
        </div>
    );
};

export default MyLogin