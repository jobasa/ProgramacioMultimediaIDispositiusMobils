import React, {
    Component
} from 'react';

import {
    Text,
    View,
    Alert,
    StyleSheet
} from 'react-native';

function obtinLlistatTodos() {
    //fetch('https://jsonplaceholder.typicode.com/todos?completed=true')
    fetch('https://jsonplaceholder.typicode.com/todos')


        .then((resposta) => {
            if (resposta.ok) {
                return resposta.json();
            } else {
                console.log("Error al conectar amb https://jsonplaceholder.typicode.com/todos");
                Alert.alert("Error al conectar amb https://jsonplaceholder.typicode.com/todos");
            }
        })


        .then((respostaJson) => {
            if (respostaJson == undefined) {
                console.log("Documento vacio");
                Alert.alert("Documento vacio");
            } else {
                this.setState({
                    data: respostaJson
                })
            }
        })

        .catch(error => {
            console.log("Error de xarxa: " + error);
        });
}

export class Llistat extends Component{
    render(){
        //Comprobar que en data hay datos.
        if (this.props.result) {
            var res = this.props.result.map((item, i)=>{
                return(
                    <Text key={i}>{item.userId}*{item.title}</Text>
                )
            })
        }
        return(
            <View>
                {res}
            </View>
        )
    }
}

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: undefined
        };
    }

    componentDidMount() {
        obtinLlistatTodos()
    }

    render() {
        return ( 
            <View style={[styles.containerDetails, border('red')]}>

            <View style={[styles.containerChildOne, border('blue')]}>
                <Text>Examen de Joan. Tipo B</Text>
            </View>

            <View style={[styles.containerChildTwo, border('green')]}>
                <Llistat result={this.state.data}></Llistat>
            </View>

            <View style={[styles.containerChildThree, border('yellow')]}>

            </View>

            </View>
        )
    }
}

const border = (color) => {
    return{
        borderColor: color,
        borderWidth: 7
    }
}

const styles = StyleSheet.create({
    containerDetails : {
        flex: 1
    },
    containerChildOne: {
        flex: 1/6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerChildTwo: {
        flex: 3/6
    },
    containerChildThree: {
        flex: 2/6
    }
});
