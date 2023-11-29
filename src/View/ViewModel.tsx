import React, { useState } from "react";

import { api } from "../services/api";
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
    api.post("/api/cadastro/create", {
      email: values.email,
      senha: values.senha,
      nome: values.nome,
      sobrenome: values.sobrenome,
      confirmeSenha: values.confirmeSenha
    })

  }

  return {
    ...values,
    onChange,
    register
  }
}

export default HomeViewModel;