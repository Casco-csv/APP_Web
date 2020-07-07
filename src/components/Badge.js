import React from 'react';
import "./styles/style.css";
import header from './images/head-img.png';
import suma from './images/Suma.png';
import resta from './images/Resta.png';
import axios from 'axios';
require('dotenv').config();

class Badge extends React.Component {
    
    state = {
                cantidad: 1, 
                form:{
                 Nombre:'NONE',
                 Telefono:'NONE',
                 Direccion:'NONE',
                 Sabor:'Manzana',
                 Piso:'',
                 Depto:'',
                }
                };
    handleSubmit = e =>{
        e.preventDefault();
    }
    handleChange = e =>{
        console.log({value: e.target.value});
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            },
        });
    };
    handleClick = e =>{
        switch(e.target.name){
            case"finish":
            var pedido = this.state.form
            console.log(pedido);
        //    axios.get(process.env.REACT_APP_TEST + `→ NUEVO PEDIDO =-=-=-=-=-= → NOMBRE: ${pedido.Nombre} → TELEFONO:  ${pedido.Telefono} → DIRECCÓN: ${this.state.Direccion} → PISO: ${this.state.Piso} ❘ Depto: ${this.state.Piso} → CANTIDAD: ${this.state.cantidad}`);
            // axios.get(`https://api.telegram.org/bot${process.env.REACT_APP_BOT_ID}/sendMessage?chat_id=${process.env.REACT_APP_CHAT_ID}&text=→ NUEVO PEDIDO =-=-=-=-=-= → NOMBRE: ${pedido.Nombre} → TELEFONO:  ${pedido.Telefono} → DIRECCÓN: ${this.state.Direccion} → PISO: ${this.state.Piso} ❘ Depto: ${this.state.Piso} → CANTIDAD: ${this.state.cantidad}`);
            break;
            case "suma":
                if(this.state.cantidad <10)  this.setState({ cantidad: this.state.cantidad +1 });
            break;
            case "resta":
                if(this.state.cantidad >0)
                {
                     this.setState({ cantidad: this.state.cantidad -1 });
                 }else
                 {
                     this.setState({ cantidad: this.state.cantidad});
                 }
            break;
        }           

    }
    render(){
        return(  
            <form className="form-group" onSubmit={this.handleSubmit}>
                <img src={header} className="w-100" alt="" />

                    <div className="form-group m-2">
                    <input onChange={this.handleChange}  className="form-control rounded-0" type="text" name="Nombre" placeholder="NOMBRE" />
                    </div>
                    
                    <div className="form-group m-2">
                    <input onChange={this.handleChange} className="form-control rounded-0" type="text" name="Telefono" placeholder="TELÉFONO" />
                    </div>
                    
                    <div className="form-group m-2">
                    <div className="h-divider" />
                    </div>
                    
                    <div className="form-group m-2">
                     <label   name="Direccion" className="label-badge m-2" for="Direccion">DIRECCIÓN</label>
                     <input  onChange={this.handleChange} className="form-control rounded-0" type="text" name="Direccion" placeholder="Ej: calle - 1234" />
                    </div>

                    <div class="form-group ml-5">
                        <label  class="m-2 w-25" className="label-badge" for="sel1">PISO</label>
                        <input onChange={this.handleChange} class="rounded-1 border-input m-2 w-25" type="text" name="Piso" placeholder="Ej: 3ro" />
                        <label class="m-2 w-25" className="label-badge" for="sel1">DEPTO</label>
                        <input onChange={this.handleChange} class="rounded-1 border-input m-2 w-25" type="text" name="Depto" placeholder="Ej: 1B" />
                    </div>

                    <div class="form-group m-2">
                     <label className="label-badge m-2" for="Localidad">LOCALIDAD</label>
                     <input  class="form-control rounded-0" type="text" name="telefono" placeholder="Ej: MUNRO" />
                    </div>

                    <div class="form-group m-2">
                    <div class="h-divider" />
                    </div>
                    
                    <div class="form-group m-2">
                        <label class="m-2" className="label-badge" for="sel1">-SABOR A ELECCIÓN</label>
                         <select onChange={this.handleChange} value={this.state.sabor} name="Sabor" class="form-control rounded-0 option-badge"  id="sel1">
                        <option className="option-badge" >Manzana</option>
                        <option className="option-badge">Dulce De Leche</option>
                        </select>
                    </div>

                    <div class="form-group m-2">
                    <label class="m-2" className="label-badge nav navbar-nav navbar-center" for="sel1">UNIDADES</label>
                    </div>
                    
                    <div class="form-group d-flex justify-content-center">
                    <input onClick={this.handleClick}name="resta" type="image" src={resta} class="m-2 mt-4"  width="41" height="24"/>
                    <svg width="81" height="64"  class="m-2" >
                    <text x="35" y="40" font-family="YuGothicUI-Regular, Yu Gothic UI" > {this.state.cantidad} </text>
                     <rect class="unity " y="20" rx="20" ry="20" width="81" height="32" />
                    </svg>
                    <input onClick={this.handleClick} name="suma" type="image"  src={suma} class="m-2 mt-3"  width="41" height="41"/>
                    </div>

                    <div class= 'form-group m-2'>
                    <input onClick={this.handleClick} name="finish" type="button" value="REALIZAR PEDIDO" class="form-control rounded-0 btn btn-danger"></input>
                    </div>
                    <label className="label-badge m-2" for="Direccion">IMPORTANTE: APP EN CONSTRUCCIÓN</label>
            </form>
        )
    }
}

export default Badge;