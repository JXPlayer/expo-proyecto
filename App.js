import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Button, Alert, TouchableOpacity, ImageBackground, TextComponent } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

//Funciones de la pantalla de inicio
function InicioScreen({ navigation }) { 
  return (
    //View es un contenedor
      <View style={styles.inicio}>
        <Text style={styles.logo}>825</Text>
        <Text style={styles.brigada}>BRIGADA</Text>
        <TouchableOpacity style={styles.btnInicioSesion}
          onPress={() => navigation.navigate('Inicio de sesión')}>
          <Text style={styles.txtiniciosesion}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity style={styles.btnRegistro}
          onPress={() => navigation.navigate('Rol')}>
          <Text style={styles.txtRegistro}>Registro</Text>
        </TouchableOpacity>
        <View style={styles.inicioilustracion}>
          <Image style={{width:600, height:110}} source={require('./InicioIlustracion.png')}></Image>
        </View>
      </View>
  );
}



function InicioSesion({ navigation }) {
  return (
      <View style={styles.iniciosesionscreen}>
        <Image style={styles.imagencorreo} source={require('./LoginUser.png')}></Image>
        <Text style={styles.txtcorreo}>Correo electrónico</Text>
        <TextInput style={styles.textinput}></TextInput>
        <Text style={styles.txtcontra}>Contraseña</Text>
        <TextInput style={styles.textinput}></TextInput>
        <TouchableOpacity style={styles.btningresar}
          onPress={() => navigation.navigate('Brigada825')}>
          <Text style={styles.txtingresar}>Ingresar</Text>
        </TouchableOpacity>
      </View>
  );
}

function RegistroScreen({ navigation }) {
  return(
    <View style={styles.fondoregistro}>
      <Text style={styles.txtregistrate}>REGÍSTRATE</Text>
      <View style={styles.viewregistro}>
        <Text style={styles.txtregistro}>Nombre</Text>
        <TextInput style={styles.txtInputRegistro}></TextInput>
        <Text style={styles.txtregistro}>Apellidos</Text>
        <TextInput style={styles.txtInputRegistro} ></TextInput>
        <Text style={styles.txtregistro}>Carnet</Text>
        <TextInput style={styles.txtInputRegistro}></TextInput>
        <Text style={styles.txtregistro}>Correo institucional</Text>
        <TextInput style={styles.txtInputRegistro}></TextInput>
        <TouchableOpacity style={styles.btningresarregistro} 
        onPress={() => navigation.navigate('Brigada825')}>
          <Text style={styles.txtingresar}>Ingresar</Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={styles.carrusel}
          onPress={() => navigation.goBack()}></TouchableOpacity>
          <TouchableOpacity style={styles.carruselactivo}></TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function RolScreen({ navigation }) {
  return(
    <View style={styles.viewRol}>
      <Text style={styles.txtRol}>¿CUÁL ES TU ROL?</Text>
      <Text style={styles.txtRoles}>Estudiante</Text>
      <TouchableOpacity style={styles.btnRoles} onPress={() => navigation.navigate('Bienvenido')}>
        <Image style={styles.imgRoles} source={require('./PerfilEstudiante.png')}></Image>
      </TouchableOpacity>
      <Text style={styles.txtRoles}>Brigadista</Text>
      <TouchableOpacity style={styles.btnRoles} onPress={() => navigation.navigate('Bienvenido')}>
        <Image style={styles.imgRoles} source={require('./PerfilBrigadista.png')}></Image>
      </TouchableOpacity>
      
    </View>
  );
}

function BienvenidoScreen({navigation}) {
  return(
    <View style={styles.bienvenido}>
      <View style={styles.viewbienvenido}>
        <Text style={styles.txtbienvenido}>¡Bienvenido!</Text>
      </View>
      <Image style={styles.imgbienvenido} source={require('./bienvenido.png')}></Image>
      <Text style={styles.parrafo}>Como estudante, con la Brigada 85, podrás conocer los diferentes
        brigadistas del colegio, dónde ubicarlos, qué hacer en caso de accidente
        y mucho más, que te ayudará y guiará en caso de una emergencia
      </Text>
      <View style={{flexDirection:'row', marginTop:34}}>
        <TouchableOpacity style={styles.carruselactivo}>
        </TouchableOpacity>
        <TouchableOpacity style={styles.carrusel}
          onPress={() => navigation.navigate('Registro')}>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Brigada825Screen({navigation}) {
  return (
    <View style={styles.bienvenido}>
      <View style={styles.viewbrigada}>
        <Text style={styles.txtbrigada}>BRIGADA 825</Text>
        <View style={{flexDirection:'row'}}>
          <Image style={{width:50, height:50}} source={require('./lupa.png')}></Image>
          <TextInput style={styles.txtinputbrigada}></TextInput>
        </View>
      </View>
      <View style={{flexDirection:'row', }}>
        <TouchableOpacity onPress={() => Alert.alert("Botiquín")}>
          <Image style={styles.btnbrigada} source={require('./InicioBotiquin.png')}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Reporte')}>
          <Image style={styles.btnbrigada} source={require('./InicioReporte.png')}/>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row', }}>
        <TouchableOpacity onPress={() => navigation.navigate('FichaMedica')}>
          <Image style={styles.btnbrigada} source={require('./InicioFicha.png')}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Aplicacion')}>
          <Image style={styles.btnbrigada} source={require('./InicioAplicacion.png')}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

function FichaMedicaScreen({ navigation }) {
  return(
    <View style={{flex:1}}>
      
      <Text style={styles.txtregistrate}>FICHAS MEDICAS</Text>
      <View style={styles.viewregistro}>
      <TouchableOpacity style={styles.btnInicioSesion}
          onPress={() => navigation.navigate('ingresarfichamedica')}>
          <Text style={styles.txtiniciosesion}>Ingresar Ficha Medica</Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity style={styles.btnRegistro}
          onPress={() => navigation.navigate('Listafichasmedicas')}>
          <Text style={styles.txtRegistro}>Ver fichas medicas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function AplicacionScreen({navigation}) {
  return (
    <View style={{flex:1}}>
      <ImageBackground style={{flex:1, alignItems:'center'}} source={require('./FondoFicha.png')} >
        <View style={styles.viewaplicacion}>
          <Text style={styles.aplicacion}>APLICACIÓN BRIGADA</Text>
          <Text style={{fontSize:20, marginLeft:25}}>Cédula</Text>
          <TextInput style={styles.txtinputaplicacion}></TextInput>
          <Text style={{fontSize:20, marginLeft:25}}>Nombre</Text>
          <TextInput style={styles.txtinputaplicacion}></TextInput>
          <Text style={{fontSize:20, marginLeft:25}}>Primer apellido</Text>
          <TextInput style={styles.txtinputaplicacion}></TextInput>
          <Text style={{fontSize:20, marginLeft:25}}>Segundo apellido</Text>
          <TextInput style={styles.txtinputaplicacion}></TextInput>
          <TouchableOpacity style={styles.btnEnviar} onPress={() => Alert.alert("Enviado")}>
            <Text style={{color:'white', fontSize:30, fontWeight:'bold'}}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}

function ReporteScreen({navigation}) {
  return (
    <View style={{flex:1}}>
      <ImageBackground style={{flex:1, alignItems:'center', padding:50}} source={require('./FondoReporte.png')} >
        <Text style={styles.reporte}>REPORTE DE INCIDENTES</Text>
        <View style={{width:420}}>
          <Text style={styles.txtreporte}>Cédula brigadista</Text>
          <TextInput style={styles.txtinputreporte}></TextInput>
          <Text style={styles.txtreporte}>Día</Text>
          <TextInput style={styles.txtinputreporte}></TextInput>
          <Text style={styles.txtreporte}>Hora</Text>
          <TextInput style={styles.txtinputreporte}></TextInput>
          <Text style={styles.txtreporte}>Descripción</Text>
          <TextInput style={styles.txtinputreporte}></TextInput>
        </View>
        <TouchableOpacity style={styles.btnsiguiente} onPress={() => navigation.navigate('Envío de reporte')}>
          <Text style={{color:'#f93943', fontSize:30}}>Siguiente</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

function ReporteScreen2({navigation}) {
  return (
    <View style={{flex:1}}>
      <ImageBackground style={{flex:1, alignItems:'center', padding:50}} source={require('./FondoReporte.png')} >
        <Text style={styles.reporte}>REPORTE DE INCIDENTES</Text>
        <View style={{width:420, marginTop:135}}>
          <Text style={styles.txtreporte}>Cédula afectado</Text>
          <TextInput style={styles.txtinputreporte}></TextInput>
          <Text style={styles.txtreporte}>Nombre afectado</Text>
          <TextInput style={styles.txtinputreporte}></TextInput>
          <Text style={styles.txtreporte}>Apellido afectado</Text>
          <TextInput style={styles.txtinputreporte}></TextInput>
        </View>
        <TouchableOpacity style={styles.btnsiguiente} onPress={() => Alert.alert("Enviado")}>
          <Text style={{color:'#f93943', fontSize:30}}>Enviar</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Inicio' component={InicioScreen} />
        <Stack.Screen name='Inicio de sesión' component={InicioSesion} />
        <Stack.Screen name='Registro' component={RegistroScreen} />
        <Stack.Screen name='Rol' component={RolScreen} />
        <Stack.Screen name='Bienvenido' component={BienvenidoScreen} />
        <Stack.Screen name='Brigada825' component={Brigada825Screen} />
        <Stack.Screen name='Aplicacion' component={AplicacionScreen} />
        <Stack.Screen name='Reporte' component={ReporteScreen} />
        <Stack.Screen name='Envío de reporte' component={ReporteScreen2} />
        <Stack.Screen name='FichaMedica' component={FichaMedicaScreen} />
        <Stack.Screen name='Listafichasmedicas' component={ListafichasmedicasScreen} />
        <Stack.Screen name='ingresarfichamedica' component={ingresarfichamedicaScreen} />
        

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  inicio: {
    flex: 1,
    backgroundColor: '#445e93',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontSize:100,
    color:'white',
    fontWeight:'bold',
    backgroundColor: '#f93943',
    alignItems: 'center',
    justifyContent: 'center',
    padding:30,
    marginTop: 80,
    borderRadius:15
  },
  brigada:{
    marginTop:20,
    color:'white',
    fontSize:50,
    fontWeight:'bold'
  },
  inicioilustracion:{
    flex: 1,
    marginTop: 359,
  },
  containercorreo: {
    flex: 1,
    backgroundColor: '#445e93',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:'center'
  },
  btnInicioSesion: {
    backgroundColor: '#f93943',
    borderRadius: 10,
    padding: 10,
    marginTop:30
  },
  btnRegistro:{
    borderWidth:2,
    borderColor:'white',
    padding: 10,
    borderRadius: 10,
  },
  imagencorreo:{
    marginTop:77,
    padding:20,
    width:120,
    height:120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtRegistro:{
    paddingHorizontal:12,
    color: 'white',
    fontSize:20
  },
  txtiniciosesion:{
    color:'white',
    fontSize:20
  },
  iniciosesionscreen:{
    marginHorizontal:20,
    alignItems:'center'
  },
  txtcorreo:{
    marginTop:40,
  },
  txtcontra:{
    marginTop:50
  },
  textinput:{
    alignSelf:'center',
    borderWidth:1,
    borderRadius:300,
    padding:14,
    width:230,
    shadowColor:'black',
    elevation: 10,
    backgroundColor: 'white',
    shadowOpacity: 1,
  },
  btningresar:{
    margin:40,
    backgroundColor:'#445e93',
    padding:15,
    paddingHorizontal:40,
    borderRadius:30
  },
  txtingresar:{
    color:'white',
    fontWeight:'bold',
    fontSize:20
  },
  fondoregistro:{
    backgroundColor:'#f93943',
    flex:1,
    alignItems:'center',
  },
  txtregistrate:{
    color:'white',
    fontWeight:'bold',
    fontSize:40,
    marginTop:50
  },
  viewregistro:{
    backgroundColor:'white',
    borderTopEndRadius:50,
    borderTopStartRadius:50,
    flex:1,
    alignItems:'center',
    paddingHorizontal:150
  },
  txtregistro:{
    marginTop:40,
    fontSize:25,
  },
  txtInputRegistro:{
    alignSelf:'center',
    borderWidth:1,
    borderRadius:300,
    padding:14,
    width:300,
    shadowColor:'black',
    elevation: 10,
    backgroundColor: 'white',
    shadowOpacity: 1,
  },
  btningresarregistro:{
    marginTop:60,
    backgroundColor:'#f93943',
    padding:15,
    paddingHorizontal:40,
    borderRadius:30
  },
  viewRol:{
    backgroundColor:'white',
    flex:1,
    alignItems:'center'
  },
  txtRol:{
    marginTop:50,
    color:'#f93943',
    fontWeight:'bold',
    fontSize:40
  },
  txtRoles:{
    fontSize:30,
    marginTop:30,
    marginBottom:10
  },
  imgRoles:{
    height:200,
    width:200
  },
  btnRoles:{
    borderWidth:2,
    borderRadius:20,
    padding:20,
    paddingHorizontal:30,
    marginHorizontal:10
  },
  carruselactivo:{
    marginTop:20,
    backgroundColor:'#f93943',
    borderColor:'#f93943',
    borderWidth:1,
    padding:30,
    paddingHorizontal:30,
    borderRadius:120,
    marginHorizontal:10
  },
  carrusel:{
    marginTop:20,
    borderColor:'#f93943',
    padding:30,
    paddingHorizontal:30,
    borderRadius:120,
    borderWidth:1,
    marginHorizontal:10
  },
  bienvenido:{
    backgroundColor:'white',
    flex:1,
    alignItems:'center'
  },
  viewbienvenido:{
    backgroundColor:'#f93943',
    borderBottomLeftRadius:300,
    borderBottomEndRadius:600,
    padding:75,
    width:650,
  },
  txtbienvenido:{
    color:'white',
    fontSize:60,
    fontWeight:'bold'
  },
  parrafo:{
    textAlign:'center',
    marginHorizontal:30,
    fontSize:20,
    marginTop:20
  },
  imgbienvenido:{
    height:360,
    width:550,
    marginTop:10
  },
  viewbrigada:{
    backgroundColor:'#f93943',
    width:'100%',
    alignItems:'center',
    padding:30,
    borderBottomLeftRadius:60,
    borderBottomRightRadius:60
  },
  txtbrigada:{
    color:'white',
    fontWeight:'bold',
    fontSize:40,
    margin:20
  },
  txtinputbrigada:{
    borderWidth:1,
    borderColor:'gray',
    borderRadius:300,
    padding:14,
    width:300,
    backgroundColor: 'white',
    opacity:100,
    marginLeft:20
  },
  btnbrigada:{
    margin:20,
    marginTop:40
  },
  viewaplicacion:{
    backgroundColor:'white',
    marginTop:60,
    padding:40
  },
  aplicacion:{
    fontWeight:'bold',
    fontSize:40,
    marginBottom:30
  },
  txtinputaplicacion:{
    borderWidth:1,
    borderRadius:50,
    padding:20,
    marginTop:10,
    marginBottom:20
  },
  btnEnviar:{
    backgroundColor:'#445e93',
    alignSelf:'center',
    padding:20,
    marginTop:30,
    width:200,
    borderRadius:50,
    alignItems:'center'
  },
  reporte:{
    fontWeight:'bold',
    fontSize:40,
    marginBottom:30,
    color:'white'
  },
  txtreporte:{
    color:'white',
    fontSize:25
  },
  txtinputreporte:{
    borderWidth:1,
    borderRadius:50,
    padding:20,
    marginTop:10,
    marginBottom:20,
    backgroundColor:'white',
    width:400,
    alignSelf:'center'
  },
  btnsiguiente:{
    marginTop:40,
    backgroundColor:'white',
    padding:10,
    width:200,
    alignItems:'center',
    borderRadius:100
  }
});

export default App;