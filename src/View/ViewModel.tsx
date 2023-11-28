import React, { useState } from "react";
const HomeViewModel = () => {
  const [values, setValues] = useState({

    email: '',
    senha: '',
    nome: '',
    sobrenome: '',
    confirmeSenha: ''

  });

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  }

  const register = () => {
    console.log(JSON.stringify(values))
  }

  return {
    ...values,
    onChange,
    register
  }
}

export default HomeViewModel;