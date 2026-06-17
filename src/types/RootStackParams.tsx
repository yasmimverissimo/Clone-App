export type RootStackParamList = {
  LoginCPF: undefined; // Não espera parâmetros
  LoginSenha: { cpf: string }; // Espera um parâmetro 'cpf' do tipo string
  Home: undefined; // Não espera parâmetros
};