import React, {useState} from "react";

const HomeViewModel = () => {
    const [values, setValues] = useState ({
        nome: '',
        sobrenome: '',
        email: '',
        senha: '',
        confirmeSenha: ''
    });

    const onChange = (property: string, value: any) => {
        setValues ({...values, [property]:value});
    }
    const register = async () => {
        try {
          const response = await fetch('http://192.168.18.46:3000/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          });
          console.log('Response:', response);
          if (response.ok) {
            console.log('User registered successfully');
            
          } else {
            console.error('Error registering user:', response.status);
            
          }
        } catch (error) {
          console.error('Error registering user:', error.message);
          
        }
      };

    return {
        ...values,
        onChange,
        register
    }
}

export default HomeViewModel;