import { useState } from 'react';
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import { useAppStore } from '../../store/useAppStore';
import { useNavigate } from 'react-router';
import { postSignIn } from '../../Services/authServices';
import type { loginType } from '../../types';

const Login = () => {
    const [formData, setFormData] = useState<loginType>({
        username: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({
        username: '',
        password: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const login = useAppStore((state) => state.login);
    const navigate = useNavigate();



    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validate = () => {
        const newErrors = {
            username: '',
            password: ''
        };
        let isValid = true;

        if (!formData.username) {
            newErrors.username = 'username es requerido';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.username)) {
            newErrors.username = 'username no válido';
            isValid = false;
        }

        if (!formData.password) {
            newErrors.password = 'Contraseña es requerida';
            isValid = false;
        } else if (formData.password.length < 6) {
            newErrors.password = 'Mínimo 6 caracteres';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setIsLoading(true);
        try {
            const userData = await postSignIn(formData);
            login(userData); // Guarda token y datos del usuario en Zustand
            navigate("/user/home");
        } catch (err: any) {
            console.error("Login error:", err);
            setErrors({
                username: 'Credenciales incorrectas o servidor no disponible',
                password: ''
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="w-full max-w-4xl bg-white shadow-xl rounded-lg overflow-hidden flex">
                <div className="hidden md:block md:w-1/2">
                    <div className="h-full flex items-center justify-center p-8">
                        <img
                            src="img/escudo-ucm.png"
                            alt="Login visual"
                            className="object-contain h-full max-h-[400px] rounded-lg"
                        />
                    </div>
                </div>

                <div className="w-full md:w-1/2 py-8 px-6 sm:px-10">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-600">Iniciar Sesión</h2>
                        <p className="text-gray-500 mt-2">Ingresa tus credenciales para continuar</p>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FiMail className="text-gray-400" />
                                </div>
                                <input
                                    type="email"
                                    id="username"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    className={`block w-full pl-10 pr-3 py-2 border ${errors.username ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                                    placeholder="tu@username.com"
                                />
                            </div>
                            {errors.username && <p className="mt-1 text-sm text-red-600">{errors.username}</p>}
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Contraseña
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FiLock className="text-gray-400" />
                                </div>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className={`block w-full pl-10 pr-10 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <FiEyeOff className="text-gray-400" /> : <FiEye className="text-gray-400" />}
                                </button>
                            </div>
                            {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
                        </div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isLoading ? 'opacity-70' : ''}`}
                        >
                            {isLoading ? 'Ingresando...' : 'Ingresar'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;