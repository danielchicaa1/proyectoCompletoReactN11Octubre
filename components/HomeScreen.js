import { View, Text } from 'react-native'
import { useForm, Controller } from 'react-hook-form';
import { TextInput, Button } from 'react-native-paper';

export default function HomeScreen({ navigation, route }) {
  const {
    control,
    handleSubmit, reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      iduser: "",
      fullname: "",
      email: "",
      password: "",
      uri: "",
      age: ""
    },
  })
  const onSubmit = (data) => console.log(data);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Bienvenid@ {route.params.email}</Text>
      <Controller
        control={control}
        rules={{
          required: true,
          maxLength:12,
          minLength:4,
          pattern: /^[0-9]+$/
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Identificación"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="iduser"
      />
      {errors.iduser?.type == "required" && <Text style={{color:'red'}}>Id del usuario es obligatorio</Text>}
      {errors.iduser?.type == "maxLength" && <Text style={{color:'red'}}>La longitud debe ser hasta 12 chars.</Text>}
      {errors.iduser?.type == "minLength" && <Text style={{color:'red'}}>La longitud mínima es de 4 chars.</Text>}
      {errors.iduser?.type == "pattern" && <Text style={{color:'red'}}>Debe ingresar solo numeros</Text>}

      {/* para el otro campo full name */}

      <Controller
        control={control}
        rules={{
          required: true,
          maxLength:30,
          minLength:3,
          pattern: /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
          style={{marginTop:10}}
            label="Nombre Completo"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="fullname"
      />
      {errors.fullname?.type == "required" && <Text style={{color:'red'}}>nombre completo del usuario es obligatorio</Text>}
      {errors.fullname?.type == "maxLength" && <Text style={{color:'red'}}>La longitud debe ser hasta 30 chars.</Text>}
      {errors.fullname?.type == "minLength" && <Text style={{color:'red'}}>La longitud mínima es de 3 chars.</Text>}
      {errors.fullname?.type == "pattern" && <Text style={{color:'red'}}>Debe ingresar solo numeros</Text>}

      {/* para email */}

      <Controller
        control={control}
        rules={{
          required: true,
          maxLength:12,
          minLength:4,
          pattern: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Correo electronico"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />
      {errors.email?.type == "required" && <Text style={{color:'red'}}>correo del usuario es obligatorio</Text>}
      {errors.email?.type == "maxLength" && <Text style={{color:'red'}}>La longitud debe ser hasta 12 chars.</Text>}
      {errors.email?.type == "minLength" && <Text style={{color:'red'}}>La longitud mínima es de 4 chars.</Text>}
      {errors.email?.type == "pattern" && <Text style={{color:'red'}}>Debe ingresar solo numeros</Text>}

      {/* para el campo password */}

      <Controller
        control={control}
        rules={{
          required: true,
          maxLength:15,
          minLength:8,
          pattern:/(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
          style={{marginTop:10}}
            label="Contraseña"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="Contraseña"
      />
      {errors.fullname?.type == "required" && <Text style={{color:'red'}}>Contraseña del usuario es obligatorio</Text>}
      {errors.fullname?.type == "maxLength" && <Text style={{color:'red'}}>La longitud debe ser hasta 15 chars.</Text>}
      {errors.fullname?.type == "minLength" && <Text style={{color:'red'}}>La longitud mínima es de 8 chars.</Text>}
      {errors.fullname?.type == "pattern" && <Text style={{color:'red'}}>Debe ingresar solo numeros</Text>}


      <Button
          style={{ marginTop: 20, backgroundColor: 'powderblue' }}
          icon="content-save"
          mode="outlined"
          onPress={handleSubmit(onSubmit)}
          >
            Guardar
          </Button>
      {/* <Button title="Submit" onPress={handleSubmit(onSubmit)} /> */}
    </View>
  );
}