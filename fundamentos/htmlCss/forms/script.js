// Interrompa o comportamento padrão do botão submit utilizando o método preventDefault().
const button = document.querySelector("#botao-enviar");


button.addEventListener('click', 'getUserValue');

const getUserValue = (event) => event.preventDefaut();

// ver final da aula do dia 11/01

// (Bônus) Faça a validação dos campos com limite de caracteres. Caso não estejam dentro do esperado ao clicar no botão de submit, um alerta deve ser mostrado com a mensagem: ‘Dados Inválidos’. Caso contrário, a mensagem ‘Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.’ deverá aparecer na tela.