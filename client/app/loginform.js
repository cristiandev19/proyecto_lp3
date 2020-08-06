


Vue.component('loginform', {
    template:
    `
        <div>

            <div id="formulario1" style="display: block">
                <form  action="index.html" class="needs-validation" novalidate>

                    <div class="form-group">
                        <div class="col-md-15 mb-2">
                            <label for="validationCustom01">Usuario</label>
                                <input 
                                    name="username" 
                                    type="text"
                                    class="form-control " 
                                    id="validationCustom01"
                                    placeholder="Ejemplo: amorales357" 
                                    style="font-size: 14px"
                                    v-model='username'
                                >
                                <div class="invalid-feedback">
                                    Porfavor, ingresar una cuenta
                                </div>
                                <div class="valid-feedback">
                                    Bien!
                                </div>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <div class="col-md-15 mb-2">
                            <label for="exampleInputPassword1">Contraseña</label>
                            <input
                                name="password"
                                type="password"
                                class="form-control"
                                id="exampleInputPassword1"
                                style="font-size: 14px"
                                placeholder="*****"
                                v-model='password'
                            >
                                <div class="invalid-feedback">
                                    Ingrese su contraseña
                                </div>
                                <div class="valid-feedback">
                                    Bien!
                                </div>      
                        </div>
                    </div>

                    <button 
                        type="button"
                        class="btn btn-primary"
                        v-on:click="handleLogin"
                    >Iniciar Sesión</button>

                </form>

                <br>
                <div  v-if="displayError" class="alert alert-danger" role="alert">
                    <li v-for='error in errors'>
                    {{error}}
                    </li>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            displayError: false,
            formInputs: {},
            username: '',
            password: '',
            userdb:[],
            errors:[],
        }
    },
    methods: {
        handleLogin() {
            //console.log('loging...')
            axios.get('http://127.0.0.1:8000/api/getLogin',{
						params:{
                            'user': this.username,
                            'password': this.password
						}
					}).then(response=>{
                        this.userdb = response.data[0]
                        localStorage.setItem('user',JSON.stringify(this.userdb))
			})
        },
        validate(){
            this.errors = []
            this.displayError = false
            if(this.username===''){
                this.errors.push('Debe ingresar un usuario')    
                this.displayError = true
            }
            
            if(this.password===''){
                this.errors.push('Debe ingresar una contraseña')
                this.displayError = true
            }
        }
    }
})